import copyProperties from '../utils/copyProperties'
import { Component, PropTypes } from 'react'
import _ from 'lodash'

const contextType = { _lookConfig: PropTypes.object }
/**
 * Wrapper that maps your styles to a React Component
 * @param {Object} CustomComponent - a valid React Component that gets styles applied
 * @param {Object} config - additional processors that modify the styles
 */
export default (CustomComponent, config = { }) => {
  // Detecting stateless components
  // Sets the base Component which should be extended
  const stateless = !CustomComponent.prototype.setState
  const Extend = stateless ? Component : CustomComponent


  class LookComponent extends Extend {
    constructor(props, context) {
      super(...arguments)

      // Inject the global style resolver passed down by <LookRoot>
      this._lookResolver = context._lookConfig._resolveStyles
    }

    // Inherit the original displayName for proper use later on
    static displayName = CustomComponent.displayName || CustomComponent.name || 'Component';
    static childContextTypes = { ...CustomComponent.childContextTypes, ...contextType };
    static contextTypes = { ...CustomComponent.contextTypes, ...contextType };
    static _isLookEnhanced = true;

    render() {
      const renderedElement = stateless ? CustomComponent(this.props, this.context) : super.render() // eslint-disable-line
      const contextConfig = this.context._lookConfig || null
      const elementConfig = renderedElement.props.lookConfig || null
      // Compose all possible ways to configure Look
      const composedConfig = _.merge({ }, contextConfig, config, elementConfig)
      return this._lookResolver(this, renderedElement, composedConfig)
    }
  }

  // copy props in order to get hmr working correctly
  if (process.env.NODE_ENV !== 'production') {
    copyProperties(CustomComponent.prototype, LookComponent.prototype)
  }

  return LookComponent
}
