import React, { ReactElement, useState } from 'react';

interface InterfaceProductTour {
  children: Array<ReactElement<unknown>>;
}

export default function ProductTour({ ...props }: InterfaceProductTour) {
  const [index, setIndex] = useState(0);

  const renderChildren = () => {
    return React.Children.map(props.children, (child, index) => {
      return React.cloneElement(child as JSX.Element, {
        filledButtonFunc: () => {
          setIndex(index + 1);
          console.log('filledButton clicked' + index);
        },
        textButtonFunc: () => {
          if (index !== 0) {
            setIndex(index - 1);
            console.log('textButton clicked' + index);
          }
        },
        currentStep: index + 1,
        totalSteps: props.children.length,
      });
    });
  };
  return <div>{renderChildren()?.[index]}</div>;
}
