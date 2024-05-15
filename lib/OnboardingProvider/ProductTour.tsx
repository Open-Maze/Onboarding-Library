import React, { ReactElement, useCallback, useEffect, useState } from 'react';

interface InterfaceProductTour {
  children: Array<ReactElement<unknown>>;
  productTourId: 'dev' | string;
  dev?: boolean;
}

function LocalStorageCheck(productTourId: string, dev: boolean = false) {
  if (dev) {
    localStorage.setItem(productTourId, 'true');
    return true;
  }
  return localStorage.getItem(productTourId) !== 'false';
}

export default function ProductTour({ ...props }: InterfaceProductTour) {
  const [index, setIndex] = useState(0);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (index === props.children.length && !props.dev) {
      localStorage.setItem(props.productTourId, 'false');
    }
    if (!warning && props.dev) {
      console.warn(`Product Tour ${props.productTourId} is in dev mode`);
      setWarning(true);
    }
  }, [index, props.children.length, props.dev, props.productTourId, warning]);

  const filledButtonFunc = useCallback((index: number) => {
    setIndex(index + 1);
  }, []);

  const textButtonFunc = useCallback((index: number) => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  }, []);

  const renderChildren = () => {
    return React.Children.map(props.children, (child, index) => {
      return React.cloneElement(child as JSX.Element, {
        filledButtonFunc: () => filledButtonFunc(index),
        textButtonFunc: () => textButtonFunc(index),
        currentStep: index + 1,
        totalSteps: props.children.length,
      });
    });
  };

  if (
    LocalStorageCheck(
      props.productTourId,
      props.dev
      // warning,
      // () =>      setWarning(true)
    )
  ) {
    return <div>{renderChildren()?.[index]}</div>;
  } else {
    return null;
  }
}
