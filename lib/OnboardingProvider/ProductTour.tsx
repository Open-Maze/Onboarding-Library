import React, { useState } from 'react';

interface ProductTourProps {
  children?: React.ReactNode;
}

export default function ProductTour({ children }: ProductTourProps) {
  const [index, setIndex] = useState(0);

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
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
        index,
      });
    });
  };
  return <div>{renderChildren()?.[index]}</div>;
}
