import React, { ReactNode, useCallback, useEffect, useState } from 'react';

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
  const [localStorageState, setLocalStorageState] = useState('true');

  useEffect(() => {
    const getLocalStorage = localStorage.getItem(productTourId);
    if (getLocalStorage === null) {
      return;
    }
    setLocalStorageState(getLocalStorage);
  }, []);

  useEffect(() => {
    if (index === children.length && !dev) {
      localStorage.setItem(productTourId, 'false');
    }
  }, [index, children.length, dev, productTourId]);

  useEffect(() => {
    if (!warning && dev) {
      localStorage.setItem(productTourId, 'true');
      console.warn(`Product Tour ${productTourId} is in dev mode`);
      setWarning(true);
    }
  }, [warning, dev]);

  const filledButtonOnClick = useCallback((index: number) => {
    setIndex(index + 1);
  }, []);

  const textButtonOnClick = useCallback((index: number) => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  }, []);

  const renderChildren = (): ReactNode[] => {
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child as JSX.Element, {
        filledButtonFunc: () => filledButtonOnClick(index),
        textButtonFunc: () => textButtonOnClick(index),
        currentStep: index + 1,
        totalSteps: children.length,
      });
    }) as ReactNode[];
  };

  if (localStorageState === 'true') {
    return <div>{renderChildren()[index]}</div>;
  } else if (localStorageState === 'false') {
    return null;
  }
}
