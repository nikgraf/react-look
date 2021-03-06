<h1><img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/logo.png" width=350></h1>

![TravisCI](https://travis-ci.org/rofrischmann/react-look.svg?branch=develop) [![Test Coverage](https://codeclimate.com/github/rofrischmann/react-look/badges/coverage.svg)](https://codeclimate.com/github/rofrischmann/react-look/coverage) [![Code Climate](https://codeclimate.com/github/rofrischmann/react-look/badges/gpa.svg)](https://codeclimate.com/github/rofrischmann/react-look)
[![npm version](https://badge.fury.io/js/react-look.svg)](http://badge.fury.io/js/react-look)
![Dependencies](https://david-dm.org/rofrischmann/react-look.svg)
![Gzipped Size](https://img.shields.io/badge/gzipped-~17k-brightgreen.svg)

**Look** is a modular, **plugin**-based and **feature-rich** styling library for [React](https://facebook.github.io/react/) and [React Native](https://facebook.github.io/react-native/). <br>
Platform differences are flagged using either <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=15> or <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/native-badge.png" height=15>. If not flagged, it is available for both.
> **Warning**: The documentation references the 1.0.0-beta. Make sure to test it. For legacy docs check [here](https://github.com/rofrischmann/react-look/tree/9a7261b16f9a06e8cd7e64773d19714fd4181219).

# Features
- ES2015 Classes & `React.createClass`
- stateless Components
- server-side rendering <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=15>
- [plugin-based](docs/Plugins.md)
- [developer tools](docs/Plugins.md#developertools)
- Sass-like nesting
- [pseudo classes](docs/dom/api/StyleSheet.md#pseudo-classes) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=15>
- [media queries](docs/dom/api/StyleSheet.md#media-queries) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=15>
- [platform queries](docs/Mixins.md#platform-queries) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=15>
- [conditioned styles](docs/Mixins.md#stateful-conditions)
- [stateful values](docs/plugins/StatefulValue.md)
- [fallback values](docs/plugins/FallbackValue.md) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=15>
- [extending](docs/Mixins.md#extend)
- [vendor prefixing](docs/plugins/Prefixer.md) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=15>
- [CSS](docs/dom/api/StyleSheet.md##tocssstyles--scope-media-id), [font-face ](docs/dom/api/StyleSheet.md#fontfontfamily-files--properties) & [keyframes API](docs/dom/api/StyleSheet.md#keyframesframes--name) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=15>

# [Documentation](docs)
The documentation contains information on every part of Look including usage guides and API reference.

**New to Look?**<br>docs/
Make sure to check out the the relevant Getting Started guide which provides a full guide on how to use Look. From installation, over configuration and up to even developer tooling.

#### Table of contents
1. Registry
	* **1.1. [Plugins](docs/Plugins.md)**
		* [Fallback Value](docs/plugins/FallbackValue.md) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=15>
		* [Mixin](docs/plugins/Mixin.md)
		* [Prefixer](docs/plugins/Prefixer.md) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=15>
		* [Stateful Value](docs/plugins/StatefulValue.md)
		* **1.1.1 [DevTools](docs/Plugins.md#developertools)**
			* [Friendly ClassName](docs/plugins/FriendlyClassName.md) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=15>
			* [Linter](docs/plugins/Linter.md) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=15>
			* [Style Logger](docs/plugins/StyleLogger.md)
	* **1.2 [Mixins](docs/Mixins.md)**
    * [Before / After](docs/Mixins.md#before-after) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/native-badge.png" height=15>
    * [Blank](docs/Mixins.md#blank) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/native-badge.png" height=15>
    * [Contains](docs/Mixins.md#contains)
    * [Empty](docs/Mixins.md#empty) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/native-badge.png" height=15>
    * [Extend](docs/Mixins.md#extend)
    * [Extract CSS](docs/Mixins.md#extract-css) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=15>
    * [First Letter](docs/Mixins.md#first-letter) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/native-badge.png" height=15>
    * [Platform queries](docs/Mixins.md#platform-queries) <img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=15>
* [Stateful Conditions](docs/Mixins.md#stateful-conditions)
* [Substr](docs/Mixins.md#substr)
2. [Guides](docs/guides/)
	* 2.1. [Upgrading Look](docs/guides/upgradeLook.md)
	* 2.2. [Configuring Look](docs/guides/configureLook.md)
	* 2.3. [Build your own: Mixin](docs/guides/customMixin.md)
	* 2.4. [Build your own: Plugin](docs/guides/customPlugin.md)
3. [FAQ](docs/FAQ.md)
4. Under The Hood *(incomplete)*
	* 4.1. How does Look work?
	* 4.2. How does StyleSheet.create work?

<img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=25>

1. [Getting Started](docs/dom/GettingStarted.md)
	* 1.1. [Installation](docs/dom/GettingStarted.md#1-installation)
	* 1.2. [First Component](docs/dom/GettingStarted.md#2-first-component)
	* 1.3. [Stateless Components](docs/dom/GettingStarted.md#3-stateless-components)
	* 1.4. [Pseudo classes](docs/dom/GettingStarted.md#4-pseudo-classes)
	* 1.5. [Media queries](docs/dom/GettingStarted.md#5-media-queries)
	* 1.6. [Mixins & Plugins](dom/GettingStarted.md#6-mixins--plugins)
	* 1.7. [Fallback values](docs/dom/GettingStarted.md#7-fallback-values)
	* 1.8. [Vendor prefixes](docs/dom/GettingStarted.md#8-vendor-prefixes)
	* 1.9. [Server-side rendering](docs/dom/GettingStarted.md#9-server-side-rendering)
	* 1.10. [DevTools](docs/dom/GettingStarted.md#10-devtools)
2. [API Reference](docs/dom/api/)
	* **2.1. [look](docs/dom/api/Look.md)**
	* **2.2. [StyleSheet](docs/dom/api/StyleSheet.md)**
		* [create](docs/dom/api/StyleSheet.md#createstyles)
		* [combineStyles](docs/dom/api/StyleSheet.md#combinestylesstyles)
		* [toCSS](docs/dom/api/StyleSheet.md#tocssstyles--scope)
		* [keyframes](docs/dom/api/StyleSheet.md#keyframesframes--name)
		* [font](docs/dom/api/StyleSheet.md#fontfontfamily-files--properties)
	* **2.3. [LookRoot](docs/dom/api/LookRoot.md)**
	* **2.4. [StyleContainer](docs/dom/api/StyleContainer.md)**

<img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/native-badge.png" height=25>

1. [Getting Started](docs/native/GettingStarted.md)
	* 1.1. [Installation](docs/native/GettingStarted.md#1-installation)
	* 1.2. [First Component](docs/native/GettingStarted.md#2-first-component)
	* 1.3. [Stateless Components](docs/native/GettingStarted.md#3-stateless-components)
	* 1.4. [Mixins & Plugins](docs/native/GettingStarted.md#4-mixins--plugins)
	* 1.5. [DevTools](docs/native/GettingStarted.md#5-devtools)
2. [API Reference](docs/native/api/)
	* **2.1. [look](docs/native/api/Look.md)**
	* **2.2. [StyleSheet](docs/native/api/StyleSheet.md)**
		* [create](docs/native/api/StyleSheet.md#createstyles)
		* [combineStyles](docs/native/api/StyleSheet.md#combinestylesstyles)
	* **2.3. [LookRoot](docs/native/api/LookRoot.md)**


# Example
The syntax is quite similar to [Sass](http://sass-lang.com) and other React styling libraries.

<img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=25>
```sh
npm install react-look
```
Using with `react-dom` Look ships **pseudo class** and **media query** support by default. They're resolved within the `StyleSheet.create` method.
```javascript
import React, { Component, PropTypes } from 'react'
import look, { StyleSheet } from 'react-look'

class Header extends Component {
  static defaultProps = { size: 24 };
  static propTypes = { size: PropTypes.number.isRequired };
  state = { status: 'active' };

  render() {
    return (
      // Styles are basically applied using the `className` property
      <header className={styles.header}>
        <h1 className={styles.title}>
          {this.props.title}
        </h1>
      </header>
    )
  }
}

// generates classNames for each selector
const styles = StyleSheet.create({
  header: {
    transition: '200ms all linear',
    // Use media queries or pseudo classes
    // using nested style objects. Those get transformed
    // on the fly and can be nested endlessly.
    '@media (min-height: 800px)': {
      fontSize: 13,
      ':hover': {
        fontSize: 15
      }
    },
    // You can also use mixins with the same selector.
    // They'll get split intelligently and evaluated on render
    'status=active': {
      backgroundColor: 'green',
      'size>=20': {
        backgroundColor: 'pink'
      }
    }
  },
  title: {
    fontWeight: 800,
    // use functions to inject props, state or context values
    fontSize: (props, state, context) => props.size * state.zoom
  }
})

export default look(Header)
```
<br>
<img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/native-badge.png" height=25>
```sh
npm install react-look-native
```
Using with `react-native` only a part of the plugins, mixins and devTools is available.
You also import some stuff differently.
```javascript
import React, { View, Text, Component, PropTypes } from 'react-native'
import look, { StyleSheet } from 'react-look-native'

class Header extends Component {
  static defaultProps = { size: 24 };
  static propTypes = { size: PropTypes.number.isRequired };
  state = { status: 'active' };

  render() {
    return (
      // Styles are basically applied using the `style` property
			// Same way as React Native does by default
      <View style={styles.header}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

// generates classNames for each selector
const styles = StyleSheet.create({
  header: {
    color: 'red',
		// You can also use mixins with the same selector.
		// They'll get split intelligently and evaluated on render
    'status=active': {             
      backgroundColor: 'green',
      'size>=20': {            
        backgroundColor: 'pink'       
      }
    }
  },
  title: {
    fontWeight: 800,
    // use functions to inject props, state or context values
    fontSize: (props, state, context) => props.size * state.zoom
  }
})

export default look(Header)
```
# Demo
Check out the provided examples for some special use cases. See them in action using the demo. You can easily run the examples on your own within the provided demo by just.

<img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/dom-badge.png" height=25>
```sh
git clone --bare https://github.com/rofrischmann/react-look.git
npm install
npm run babel
# run this as a client-side only demo
npm run demo
# run this as a universal demo
npm run demo:universal
```
<br>
<img src="https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/https://raw.githubusercontent.com/rofrischmann/react-look/develop/docs/res/native-badge.png" height=25>

Right now I am working to get a running React Native example ready. Stay tuned.

# License
**Look** is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@rofrischmann](http://rofrischmann.de).

# Contributing
I would love to see people getting involved.<br>
If you have a feature request please create an issue. Also if you're even improving Look by any kind please don't be shy and send a pull request to let everyone benefit.

### Issues
If you're having any issue please let me know as fast as possible to find a solution a hopefully fix the issue. Try to add as much information as possible such as your environment, exact case, the line of actions to reproduce the issue.

### Pull Requests
If you are creating a pull request, try to use commit messages that are self-explanatory. Also always add some **tests** unless it's totally senseless (add a reason why it's senseless) and test your code before you commit so Travis won't throw errors.
