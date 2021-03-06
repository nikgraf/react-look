import { isValidElement, Children } from 'react'
import _ from 'lodash'

/**
 * Resolves all plugins provided by the configuration
 * @param {Object} pluginInterface - interface containing all configurations to resolve
 */
export function resolvePlugins(pluginInterface) {
  let { styles, config } = pluginInterface

  // Triggers plugin resolving
  // Uses the exact plugin lineup defined within Config
  config.plugins.forEach(plugin => {
    styles = plugin({
      ...pluginInterface,
      styles
    })
  })

  return styles
}

/**
 * Checks if a given element is a look-enhanced Component itself
 * @param {Object} element - React element to be validated
 */
export function isLookEnhanced(element) {
  return element.type && element.type._isLookEnhanced
}

/**
 * Resolves provided styles for an elements children
 * @param {Object} Component - wrapping React Component providing looks and elements
 * @param {Array|string|number} children - children that get resolved
 * @param {Object} config - configuration containing plugins and plugin-specific configs
 */
export function resolveChildren(Component, newProps, config) {
  if (newProps.children) {

    const { children } = newProps
    // directly return primitive children
    if (_.isString(children) || _.isNumber(children)) {
      return
    }

    if (children.type) {
      newProps.children = config._resolveStyles(Component, children, config)
    }

    // if there are more than one child, iterate over them
    if (_.isArray(children)) {
      // flattening children prevents deeper nested children
      const flatChildren = _.flattenDeep(children)

      // recursively resolve styles for child elements if it is a valid React Component
      newProps.children = Children.map(flatChildren, child => {
        if (isValidElement(child)) {
          return config._resolveStyles(Component, child, config)
        }
        return child; // eslint-disable-line
      })
    }
  }
}

/**
* Resolves Components passed as a property
* @param {Object} Component - wrapping React Component providing looks and elements
* @param {Object} newProps - element's properties to iterate
* @param {Object} config - configuration containing plugins and plugin-specific configs
*/
export function resolveProps(Component, newProps, config) {
  Object.keys(newProps).forEach(property => {
    if (property === 'children') {
      return
    }

    // Resolving styles for elements passed by props
    // Skip children as they've been resolved already
    const propElement = newProps[property]
    if (isValidElement(propElement)) {
      newProps[property] = config._resolveStyles(Component, propElement, config)
      newProps._lookShouldUpdate = true
    }
  })
}
