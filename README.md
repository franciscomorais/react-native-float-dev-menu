# react-native-float-dev-menu

A tool to show a float button to open dev menu. This button only appears in development mode.


**Android**

<img src="https://raw.githubusercontent.com/franciscomorais/react-native-float-dev-menu/master/assets/android.gif" width="200px">

**iOS**

<img src="https://raw.githubusercontent.com/franciscomorais/react-native-float-dev-menu/master/assets/ios.gif" width="200px">


## Getting started

`npm install react-native-float-dev-menu react-native-dev-menu-android --save`

or

`yarn add react-native-float-dev-menu react-native-dev-menu-android`

## Usage
```javascript
import FloatDevMenu from 'react-native-float-dev-menu';

const Root = () => (
  <FloatDevMenu>
    <App />
  </FloatDevMenu>
);
```

#### Available Props

| Name    |  Type  | Defaut value | Description    |
| ------- | ------ | ------------ | -------------- |
|  label  | string | `"DEV"`      | Button label   |
|  startX | number | `50`         | Button label   |
|  startY | number | `50`         | Button label   |


## Contributing

Please feel free to submit any issues or pull requests.

## License
MIT
