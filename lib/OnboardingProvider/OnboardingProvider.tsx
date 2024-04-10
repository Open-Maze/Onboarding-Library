import React from 'react';
import Step from '../Components/OnboardingSteps/Step';

interface StepType {
  id: string;
}

export default function OnboardingProvider({ steps }: { steps: StepType[] }) {
  const [index, setIndex] = React.useState(0);
  const [lastStep, setLastStep] = React.useState(false);
  const onboardingProvider = document.getElementById('onboardingProvider');

  const nextStepFunc = () => {
    if (index < steps.length - 1) {
      setIndex(index + 1);
      if (index === steps.length - 2) {
        setLastStep(true);
      }
    } else {
      if (onboardingProvider) {
        onboardingProvider.remove();
      }
    }
  };

  return (
    <>
      <div
        id="onboardingProvider"
        className="absolute bg-black bg-opacity-50 h-screen w-screen"
      >
        <div className="flex h-full items-center justify-center align-center">
          <Step
            stepProps={{
              nextStep: () => nextStepFunc(),
              content: `${steps[index].id}`,
              lastStep: lastStep,
            }}
          />
        </div>
      </div>
    </>
  );
}
