'use client';
import {
  Children,
  ReactElement,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import ProductTourNavigation from '../Components/ProductTourNavigation';

/**
 * Interface for the ProductTour component.
 *
 * @typedef {Object} InterfaceProductTour
 * @property {Array<ReactElement>} children - The child elements of the product tour.
 * @property {string} productTourId - The unique identifier for the product tour.
 * @property {boolean} [dev=false] - A flag indicating whether the product tour is in development mode.
 */
interface InterfaceProductTour {
  children: Array<ReactElement>;
  productTourId: string;
  dev?: boolean;
}

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

  function finishOnboarding() {
    if (!dev && localStorage) {
      localStorage.setItem(productTourId, 'true');
    }
    setIsOnboardingFinished(true);
  }

  useEffect(() => {
    const getLocalStorage = localStorage.getItem(productTourId);
    if (getLocalStorage === null) {
      return;
    }
    setIsOnboardingFinished(JSON.parse(getLocalStorage));
  }, []);

  useEffect(() => {
    if (!warning && dev) {
      localStorage.setItem(productTourId, 'false');
      setIsOnboardingFinished(false);
      console.warn(`Product Tour ${productTourId} is in dev mode`);
      setWarning(true);
    }
  }, [warning, dev]);

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

  const renderChildren = useMemo(() => {
    return Children.map(children, (child, childIndex) => {
      const childrenLength = children.length;
      const isVisible = childIndex === index;

      return cloneElement(child, {
        style: { visibility: isVisible ? 'visible' : 'hidden' },
        navigation: (
          <ProductTourNavigation
            currentStep={childIndex + 1}
            totalSteps={childrenLength}
            nextButtonHandler={() => nextButtonOnClick(childrenLength)}
            previouButtonHandler={() => previousButtonOnClick()}
            closeOnboardingHandler={() => closeOnboarding(childrenLength)}
          />
        ),
      });
    });
  }, [index]);

  return !isOnboardingFinished && <div>{renderChildren}</div>;
}
