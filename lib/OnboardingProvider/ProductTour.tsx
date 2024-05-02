import React, { useCallback, useState } from 'react';
import { TooltipOptions } from '../OnboardingSteps/Tooltip';

interface ProductTourProps {
  children: React.ReactElement<TooltipOptions>[];
}

export default function ProductTour({ children }: ProductTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = React.Children.count(children);

  const increaseStep = useCallback(() => {
    setCurrentStep(currentStep + 1);
    console.log('next step product tour func');
  }, [currentStep]);
  const decreaseStep = useCallback(() => {
    setCurrentStep(currentStep - 1);
    console.log('prev step product tour func');
  }, [currentStep]);

  const renderChildWithCallback = (
    child: React.ReactElement<TooltipOptions>,
    index: number
  ) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        key: index,
        onNext: increaseStep,
        onPrev: decreaseStep,
      });
    }
    return child;
  };
  return (
    <>
      {React.Children.map(children, (child, index) => {
        // Render only the current step
        if (index === currentStep) {
          console.log(child);
          return renderChildWithCallback(child, index);
        }
        return null; // Skip other steps
      })}
      <button onClick={increaseStep} disabled={currentStep === 0}>
        Previous
      </button>
      <button onClick={decreaseStep} disabled={currentStep >= totalSteps}>
        Next
      </button>
    </>
  );
}
