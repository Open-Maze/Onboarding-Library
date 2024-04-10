import React from 'react';
import Step from '../Components/OnboardingSteps/Step';

interface StepType {
  id: string;
}

export default function OnboardingProvider({ steps }: { steps: StepType[] }) {
  const [index, setIndex] = React.useState(0);

  const nextStepFunc = () => {
    console.log('-----------------------------');
    console.log(index);
    if (index < steps.length - 1) {
      setIndex(index + 1);
    } else {
      console.log('This is the last step');
    }
  };

  return (
    <>
      <div className="absolute bg-black bg-opacity-50 h-screen w-screen">
        <div className="flex h-full items-center justify-center align-center">
          <Step
            stepProps={{
              nextStep: () => nextStepFunc(),
              content: `${steps[index].id}`,
            }}
          />
        </div>
      </div>
    </>
  );
}
