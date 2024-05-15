import React, { ReactElement, useState } from 'react';

interface InterfaceProductTour {
  children: Array<ReactElement<unknown>>;
  productTourId: 'dev' | string;
  dev?: boolean;
}

function LocalStorageCheck(productTourId: string, dev?: boolean) {
  if (dev) {
    console.log('Product Tour is in dev mode');
    localStorage.setItem(productTourId, 'true');
    return true;
  } else {
    console.log(
      'Product Tour is in production mode. Product Tour ID:',
      productTourId
    );
    const productTour = localStorage.getItem(productTourId);
    if (productTour === 'false') {
      console.log('Product Tour is disabled');
      return false;
    } else {
      console.log('Product Tour is enabled');
      return true;
    }
  }
}

export default function ProductTour({ ...props }: InterfaceProductTour) {
  const [index, setIndex] = useState(0);

  if (LocalStorageCheck(props.productTourId, props.dev)) {
    const renderChildren = () => {
      return React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child as JSX.Element, {
          filledButtonFunc: () => {
            setIndex(index + 1);
          },
          textButtonFunc: () => {
            if (index !== 0) {
              setIndex(index - 1);
            }
          },
          currentStep: index + 1,
          totalSteps: props.children.length,
        });
      });
    };

    if (index === props.children.length && !props.dev) {
      localStorage.setItem(props.productTourId, 'false');
    }

    return (
      <div>
        {props.dev ? (
          <div className="absolute top-0 left-0 bg-red-500 p-2 opacity-50">
            product tour {props.productTourId} is in dev-mode
          </div>
        ) : null}
        {renderChildren()?.[index]}
      </div>
    );
  } else {
    return null;
  }
}
