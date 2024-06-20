import { ReactElement } from 'react';

export interface ProductTourChild {
  /**
   * A boolean value that determines whether the popover is part of a product tour.
   * @type {boolean}
   * @default false
   */
  productTour?: false;

  /**
   * A boolean value that determines whether the popover is visible or hidden.
   * @type {boolean}
   */
  visible?: boolean;

  /**
   * A React element for navigation controls within the popover provided by the product tour component
   * @type {React.ReactElement}
   */
  navigation?: ReactElement;
}

/**
 * Interface for configuring the options of a popover component.
 */
export interface PopoverOptions extends ProductTourChild {
  /**
   * A reference to the HTML element that the popover is attached to.
   * Used to position the popover relative to the target element.
   * @type {React.RefObject<HTMLElement>}
   */
  targetRef: React.RefObject<HTMLElement>;

  /**
   * The spacing (in pixels) between the target element and the popover.
   * Controls how far the popover is from the target element.
   * @type {number}
   */
  targetSpacing: number;

  /**
   * Specifies the position of the popover relative to the target element.
   * The popover can be placed on the top, bottom, left, or right of the target element.
   * @type {'top' | 'bottom' | 'left' | 'right'}
   */
  placement: 'top' | 'bottom' | 'left' | 'right';

  /**
   * The style of the icon displayed in the popover based on material symbols. Optional unless icon is defined.
   * Can be 'outlined', 'rounded', or 'sharp'.
   * @type {'outlined' | 'rounded' | 'sharp'}
   */
  iconStyle?: 'outlined' | 'rounded' | 'sharp';

  /**
   * The name of the icon to be displayed in the popover based on material symbols. Optional unless iconStyle is defined.
   * Allows for an icon to be shown alongside the popover content.
   * @type {string}
   */
  icon?: string;

  /**
   * The title text displayed at the top of the popover. Optional.
   * Used to give a brief heading or description.
   * @type {string}
   */
  title?: string;

  /**
   * The URL of an image to be displayed in the popover. Optional.
   * Can be used to include visual content in the popover.
   * @type {string}
   */
  image?: string;

  /**
   * The main text content of the popover. Optional.
   * Used for displaying detailed information or instructions.
   * @type {string}
   */
  text?: string;

  /**
   * React elements to be rendered inside the popover. Optional.
   * Allows for complex content, including other components, to be included in the popover.
   * @type {React.ReactElement}
   */
  children?: ReactElement;

  /**
   * Custom CSS properties provided by the product tour component.
   * Used to override styling of the popover.
   * @type {React.CSSProperties}
   */
  style?: React.CSSProperties;
}

export interface PopupOptions extends ProductTourChild {
  /**
   * The title text displayed at the top of the popup. Optional.
   * Used to give a brief heading or description.
   * @type {string}
   */
  title?: string;

  /**
   * The URL of an image to be displayed in the popup. Optional.
   * Can be used to include visual content in the popup.
   * @type {string}
   */
  image?: string;

  /**
   * The main text content of the popup. Optional.
   * Used for displaying detailed information or instructions.
   * @type {string}
   */
  text?: string;

  /**
   * React elements to be rendered inside the popup. Optional.
   * Allows for complex content, including other components, to be included in the popup.
   * @type {React.ReactElement}
   */
  children?: ReactElement;
}

/**
 * `ProductTourNavigationProps` interface for Product Tour Navigation component properties.
 */
export interface ProductTourNavigationProps {
  /**
   * The current step the user is on in the product tour.
   * @type {number}
   */
  currentStep: number;

  /**
   * The total number of steps in the product tour.
   * @type {number}
   */
  totalSteps: number;

  /**
   * Handler function to be called when the "Previous" button is clicked.
   * This function should handle the logic to navigate to the previous step in the product tour.
   * @type {() => void}
   */
  previousButtonHandler: () => void;

  /**
   * Handler function to be called when the "Next" button is clicked.
   * This function should handle the logic to navigate to the next step in the product tour.
   * @type {() => void}
   */
  nextButtonHandler: () => void;

  /**
   * Handler function to be called when the onboarding process is closed.
   * This function should handle the logic to close the onboarding process.
   * @type {() => void}
   */
  closeOnboardingHandler: () => void;
}
