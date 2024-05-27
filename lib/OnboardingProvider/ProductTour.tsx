import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import ProductTourNavigation from '../Components/ProductTourNavigation';

interface InterfaceProductTour {
  children: Array<ReactNode>;
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

  useEffect(() => {
    const getLocalStorage = localStorage.getItem(productTourId);
    if (getLocalStorage === null) {
      return;
    }
    setIsOnboardingFinished(JSON.parse(getLocalStorage));
  }, []);

  useEffect(() => {
    if (index === children.length - 1 && !dev) {
      localStorage.setItem(productTourId, 'true');
      setIsOnboardingFinished(true);
    }
  }, [index, children.length, dev, productTourId]);

  useEffect(() => {
    if (!warning && dev) {
      localStorage.setItem(productTourId, 'false');
      setIsOnboardingFinished(false);
      console.warn(`Product Tour ${productTourId} is in dev mode`);
      setWarning(true);
    }
  }, [warning, dev]);

  const filledButtonOnClick = useCallback(() => {
    setIndex((prevState) => prevState + 1);
  }, []);

  const textButtonOnClick = useCallback(() => {
    setIndex((prevState) => prevState - 1);
  }, []);

  const renderChildren = (): ReactNode[] => {
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child as JSX.Element, {
        navigation: (
          <ProductTourNavigation
            currentStep={index + 1}
            totalSteps={children.length}
            filledButtonFunc={() => filledButtonOnClick()}
            textButtonFunc={() => textButtonOnClick()}
          />
        ),
      });
    }) as ReactNode[];
  };

  return !isOnboardingFinished && <div>{renderChildren()[index]}</div>;
}
