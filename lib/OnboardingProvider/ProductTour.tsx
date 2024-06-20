'use client';
import {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import DarkOverlay from '../Components/DarkOverlay';
import ProductTourNavigation from '../Components/ProductTourNavigation';
import { InterfaceProductTour } from '../types';

/**
 * ProductTour component that displays a product tour with various steps.
 *
 * @param {Array<ReactElement>} children - The child elements of the product tour.
 * @param {string} productTourId - The unique identifier for the product tour.
 * @param {boolean} [dev=false] - A flag indicating whether the product tour is in development mode.
 *
 * @returns {React.ReactElement} The rendered ProductTour component.
 */
export default function ProductTour({
  children,
  productTourId,
  dev = false,
}: InterfaceProductTour) {
  const [index, setIndex] = useState(0);
  const [warning, setWarning] = useState(false);
  const [isOnboardingFinished, setIsOnboardingFinished] = useState(false);

  // Function to finish the product tour and store the state in local storage
  function finishOnboarding() {
    if (!dev && localStorage) {
      localStorage.setItem(productTourId, 'true');
    }
    setIsOnboardingFinished(true);
  }

  // UseEffect to check if the product tour has already been finished previously
  useEffect(() => {
    const getLocalStorage = localStorage.getItem(productTourId);
    if (getLocalStorage === null) {
      return;
    }
    setIsOnboardingFinished(JSON.parse(getLocalStorage));
  }, []);

  // UseEffect to warn the user that the product tour is in dev mode
  useEffect(() => {
    if (!warning && dev) {
      localStorage.setItem(productTourId, 'false');
      setIsOnboardingFinished(false);
      console.warn(`Product Tour ${productTourId} is in dev mode`);
      setWarning(true);
    }
  }, [warning, dev]);

  // UseCallback functions for the next button providing logic for accessing next step or finishing the product tour
  const nextButtonOnClick = useCallback((totalSteps: number) => {
    setIndex((prevState) => {
      const newIndex = prevState + 1;
      if (newIndex >= totalSteps) {
        finishOnboarding();
      }
      return newIndex;
    });
  }, []);

  const previousButtonOnClick = useCallback(() => {
    setIndex((prevState) => prevState - 1);
  }, []);

  const closeOnboarding = useCallback((totalStepAmount: number) => {
    finishOnboarding();
    setIndex(totalStepAmount);
  }, []);

  // Using useMemo to optimize performance by only re-rendering children when the index changes
  const renderChildren = useMemo(() => {
    // Mapping over the children to add additional props
    return Children.map(children, (child, childIndex) => {
      const childrenLength = children.length;
      const isVisible = childIndex === index;

      // Cloning the child element and adding additional props
      return cloneElement(child, {
        productTour: true,
        visible: isVisible,
        navigation: (
          <ProductTourNavigation
            currentStep={childIndex + 1}
            totalSteps={childrenLength}
            nextButtonHandler={() => nextButtonOnClick(childrenLength)}
            previousButtonHandler={() => previousButtonOnClick()}
            closeOnboardingHandler={() => closeOnboarding(childrenLength)}
          />
        ),
      });
    });
  }, [index]);

  return (
    !isOnboardingFinished && (
      <div>
        <DarkOverlay />
        {renderChildren}
      </div>
    )
  );
}
