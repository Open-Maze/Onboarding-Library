# Onboarding library OpenMaze

![NPM Version](https://img.shields.io/npm/v/onboarding-library-openmaze)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev)

## Table of Contents

1. [Installation](#installation)
2. [API Reference](#api-reference)
   - [Popover](#popover)
   - [Popup](#popup)
   - [ProductTour](#producttour)
   - [Tailwind plugin](#tailwind-plugin)
3. [Technical Details](#technical-details)
   - [Z-index Layers](#z-index-layers)
4. [Authors](#authors)
5. [Contributors](#contributors)

## Installation

Install this library with npm

```bash
npm i onboarding-library-openmaze
```

Import library styling near where you import your other css files

```jsx
import 'onboarding-library-openmaze/dist/style.css';
```

## API Reference

### Popover

The Popover component is a component designed to display additional information or options in a small overlay that's positioned relative to another element. It can be used on its own or as a step in a product tour. The popover can be filled with content by adding the fitting parameters or by wrapping your own content with the popover element.

#### Usage

<!-- prettier-ignore-start -->
```tsx
import { Popover } from 'onboarding-library-openmaze';
import { useRef } from 'react';
const targetRefOne = useRef<HTMLDivElement>(null);

<div ref={targetRefOne}>Target</div>
<Popover 
  targetRef={targetRefOne}
  targetSpacing={8}
  placement={'top'} 
  icon="chat"
  iconStyle="outlined"
  title="Chatbox"
  image="https://picsum.photos/id/237/1920/1080"
  text="Explaining text stuff. Look cute dog"
>
  <div>My content</div>
</Popover>
```
<!-- prettier-ignore-end -->

| Parameter       | Type                                     | Description                                                                                                                                                                                           |
| :-------------- | :--------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `targetRef`     | `React.RefObject<HTMLElement>`           | **Required** Reference to the element you want to attach the popover to. The library expects you to use a `useRef` for this.                                                                          |
| `targetSpacing` | `number`                                 | **Required** A numerical variable that moves the popover a certain number of pixels away from the refferenced element.                                                                                |
| `placement`     | `'top' \| 'bottom' \| 'left' \| 'right'` | **Required** Where the popover will be placed relative to the reference element                                                                                                                       |
| `icon`          | `string`                                 | Accepts a string and uses it to apply the corresponding icon form the [Material symbols](https://fonts.google.com/icons?icon.size=24&icon.color=%23e8eaed) library (Requires iconstyle to be defined) |
| `iconStyle`     | `'outlined' \| 'rounded' \| 'sharp'`     | Applies one of the three styling options from the [Material symbols](https://fonts.google.com/icons?icon.size=24&icon.color=%23e8eaed) library to apply to the icon variable.                         |
| `title`         | `string`                                 | Accepts a string and places it inside of an h2 tag inside the popover. It is recommended to always have a title unless you're providing your own elements within the popover.                         |
| `image`         | `string`                                 | Accepts a string as a refference to an image and places that image inside the popover                                                                                                                 |
| `text`          | `string`                                 | Accepts a string and places it as the main text inside the popover component.                                                                                                                         |

### Popup

The pop is a component designed to convey more general information to you user. It coan be used on its own or as a step in a product tour. An example use case for this component could be for greeting a user when they first open you application and explaining the general usage your application provides.

#### Usage

```tsx
import { Popup } from 'onboarding-library-openmaze';

<Popup
  title="Title 1"
  text="Supporting line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo pellentesque vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
  image="https://picsum.photos/id/237/1920/1080"
>
  <div>My content</div>
</Popup>;
```

| Parameter | Type     | Description                                                                                                                                                               |
| :-------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`   | `string` | Accepts a string and places it inside of an h2 tag inside the popup. It is recommended to always have a title unless you're providing your own elements within the popup. |
| `image`   | `string` | Accepts a string as a refference to an image and places that image inside the popup                                                                                       |
| `text`    | `string` | Accepts a string and places it as the main text inside the popup component.                                                                                               |

### ProductTour

The product tour component is used in order to wrap other elements of this library. It provides them with the context and logic to navigate to other onboarding elements making it able to chain them and provide a user with a product tour that highlights and explains the most important features of an application. Dont overwhelm users by creating long and exhaustive product tours. Try and keep it to a maximum of 5 steps per product tour.

#### Usage

```tsx
import { ProductTour, Popover } from 'onboarding-library-openmaze';

<>
  <ProductTour dev={true} productTourId={'qapp-chat-pt'}>
    <Popover />
    <Popup />
    {/* Other onboarding elements */}
  <ProductTour />
</>
```

| Parameter       | Type      | Description                                                                                            |
| :-------------- | :-------- | :----------------------------------------------------------------------------------------------------- |
| `dev`           | `boolean` | **Required** If set to true the product tour wont be stored in local storage when its finished.        |
| `productTourId` | `string`  | **Required** This is the variable the finished state of the tour will be stored under in localstorage. |

### Tailwind plugin

This library utilizes a tailwind plugin in order to allow users to apply certain styling changes to the library in order to make it fit with the styling of the project it will be implemented in.

### Usage

```tsx
import { OnboardingLibrary } from 'onboarding-library-openmaze';

module.exports = {
  // ...
  plugins: [
    OnboardingLibrary({
      colors: {
        primary: '#d32c10',
        background: '#8b7349',
        primaryLighter: '#dcbaf9',
        primaryDarker: '#841be0',
        secondary: '#39cfe8',
        gray: '#e6e6e6',
        grayDark: '#797979',
      },
    }),
  ],
};
```

| Parameter    | Type     | Description                                                   | default                                                                               |
| :----------- | :------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| `primary`    | `string` | Main color used for elements like buttons.                    | <div style="padding: 2px 4px; background-color: #8c1cec; color: white;">#8c1cec</div> |
| `secondary`  | `string` | Secondary color used for detailing like during a hover event. | <div style="padding: 2px 4px; background-color: #39cfe8; color: black;">#39cfe8</div> |
| `gray`       | `string` | Gray color used for non primary elements like a close button  | <div style="padding: 2px 4px; background-color: #e6e6e6; color: black;">#e6e6e6</div> |
| `grayDark`   | `string` | Darker variant of the gray color                              | <div style="padding: 2px 4px; background-color: #797979; color: white;">#797979</div> |
| `background` | `string` | Color used as the background of every component               | <div style="padding: 2px 4px; background-color: #f4f4f4; color: black;">#f4f4f4</div> |

## Technical details

### Z-index layers

The entire component library is built using z-index layers 40 and 41. This ensures that our components properly layer above standard application content but below any critical overlays or modals that might use higher z-index values to still be placed overtop by using standard tailwind classes. Here are the specific details:

- **z-index: 40** - Used for the darkoverlay that covers the page..
- **z-index: 41** - Used for library components.

## Authors

- [@Raf Schapendonk](https://github.com/RafSchapendonk)

## Contributors

- [@Max van Hattum](https://github.com/Maxvanhattum)
- [@Ruben Fricke](https://github.com/RubenFricke)
