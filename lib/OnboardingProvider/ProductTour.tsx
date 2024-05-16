import React, { ReactNode, useCallback, useEffect, useState } from 'react';

interface InterfaceProductTour {
  children: Array<ReactNode>;
  productTourId: string;
  dev?: boolean;
}

export default function ProductTour({ ...props }: InterfaceProductTour) {
  const [index, setIndex] = useState(0);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (index === props.children.length && !props.dev) {
      localStorage.setItem(props.productTourId, 'false');
    }
    if (!warning && props.dev) {
      localStorage.setItem(props.productTourId, 'true');
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
    localStorage.getItem(props.productTourId) === null ||
    localStorage.getItem(props.productTourId) === 'true' // if the product tour has not yet been finished by the user then it should be set to true in localStorage
  ) {
    return <div>{renderChildren()?.[index]}</div>;
  } else if (localStorage.getItem(props.productTourId) === 'false') {
    return null;
  }
}
