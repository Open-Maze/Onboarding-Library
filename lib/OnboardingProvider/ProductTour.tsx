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

interface InterfaceProductTour {
  children: Array<ReactElement>;
  productTourId: string;
  dev?: boolean;
}

export default function ProductTour({
  children,
  productTourId,
  dev = false,
}: InterfaceProductTour) {
  const [index, setIndex] = useState(0);
  const [warning, setWarning] = useState(false);
  const [isOnboardingFinished, setIsOnboardingFinished] = useState(false);

  function finishOnboarding() {
    if (!dev) {
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
    return Children.map(children, (child, index) => {
      const childrenLength = children.length;
      return cloneElement(child, {
        navigation: (
          <ProductTourNavigation
            currentStep={index + 1}
            totalSteps={childrenLength}
            nextButtonHandler={() => nextButtonOnClick(childrenLength)}
            previouButtonHandler={() => previousButtonOnClick()}
            closeOnboardingHandler={() => closeOnboarding(childrenLength)}
          />
        ),
      });
    });
  }, []);

  return !isOnboardingFinished && <div>{renderChildren[index]}</div>;
}
