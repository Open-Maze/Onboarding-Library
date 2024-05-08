import React, { ReactElement, useState } from 'react';

interface InterfaceProductTour {
  children: Array<ReactElement<unknown>>;
}

export default function ProductTour({ ...props }: InterfaceProductTour) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
    console.log(index);
  }

  const renderChildren = () => {
    return React.Children.map(props.children, (child) => {
      return (
        <>
          <button className="absolute top-0 left-0 z-100" onClick={handleClick}>
            next {index}
          </button>
          {child}
        </>
      );
    });
  };

  if (props.children) {
    return <>{renderChildren()?.[index]}</>;
  } else {
    console.error(
      'ProductTour component must have child components from the onboarding library'
    );
    console.log(props.children);
  }
  return;
}
