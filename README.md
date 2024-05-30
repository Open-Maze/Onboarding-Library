# Onboarding library OpenMaze

![NPM Version](https://img.shields.io/npm/v/onboarding-library-openmaze)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

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

The Popover component is a component designed to display additional information or options in a small overlay that's positioned relative to another element. It can be used on its own or as a step in a product tour

#### Usage

<!-- prettier-ignore-start -->
```jsx
import { Popover } from 'onboarding-library-openmaze';
import { useRef } from 'react';
const targetRefOne = useRef<HTMLDivElement>(null);

<>
  <div ref={targetRefOne}>Target</div>
  <Popover targetRef={targetRefOne} targetSpacing={8} placement={'top'} />
</>;
```
<!-- prettier-ignore-end -->

| Parameter       | Type                                     | Description                                                                                                                                                                                           |
| :-------------- | :--------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `targetRef`     | `React.RefObject<HTMLElement>`           | **Required** Reference to the element you want to attach the popover to. The library expects you to use a `useRef` for this.                                                                          |
| `targetSpacing` | `number`                                 | **Required** A numerical variable that moves the popover a certain number of pixels away from the refferenced element.                                                                                |
| `placement`     | `'top' \| 'bottom' \| 'left' \| 'right'` | **Required** Where the popover will be placed relative to the reference element                                                                                                                       |
| `icon`          | `string`                                 | Accepts a string and uses it to apply the corresponding icon form the [Material symbols](https://fonts.google.com/icons?icon.size=24&icon.color=%23e8eaed) library (Requires iconstyle to be defined) |
| `iconStyle`     | `'outlined' \| 'rounded' \| 'sharp'`     | Applies one of the three styling options from the [Material symbols](https://fonts.google.com/icons?icon.size=24&icon.color=%23e8eaed) library to apply to the icon variable.                         |
| `title`         | `string`                                 | Accepts a string and places it inside of an h2 tag inside the popover                                                                                                                                 |
| `image`         | `string`                                 | Accepts a string as a refference to an image and places that image inside the popover                                                                                                                 |
| `text`          | `string`                                 | Accepts a string and places it as the main text inside the popover component.                                                                                                                         |

### ProductTour

The product tour component is used in order to wrap other elements of this library. It provides them with the context and logic to navigate to other onboarding elements making it able to chain them and provide a user with a product tour that highlights and explains the most important features of an application.

#### Usage

```jsx
import { ProductTour, Popover } from 'onboarding-library-openmaze';

<>
  <ProductTour dev={true} productTourId={'qapp-chat-pt'}>
    <Popover />
    {/* Other onboarding elements */}
  <ProductTour />
</>
```

| Parameter       | Type      | Description                                                                                            |
| :-------------- | :-------- | :----------------------------------------------------------------------------------------------------- |
| `dev`           | `boolean` | **Required** If set to true the product tour wont be stored in local storage when its finished.        |
| `productTourId` | `string`  | **Required** This is the variable the finished state of the tour will be stored under in localstorage. |

## Authors

- [@Raf Schapendonk](https://github.com/RafSchapendonk)
