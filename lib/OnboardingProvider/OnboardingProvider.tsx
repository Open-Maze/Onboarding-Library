import { useCallback, useState } from 'react';
import Step from '../OnboardingSteps/Step';

interface StepType {
  id: string;
}

export default function OnboardingProvider({ steps }: { steps: StepType[] }) {
  const [index, setIndex] = useState(0);
  const lastStep = index === steps.length - 1;

  const nextStepFunc = useCallback(() => {
    if (index < steps.length - 1) {
      setIndex(index + 1);
    } else {
      document.getElementById('onboardingProvider')?.remove();
    }
  }, [index, steps.length]);

  return (
    <>
      <div
        id="onboardingProvider"
        className="absolute top-0 z-100 bg-black bg-opacity-50 h-screen w-screen"
      >
        <div className="flex h-full items-center justify-center align-center">
          <Step
            nextStep={nextStepFunc}
            content={steps[index].id}
            lastStep={lastStep}
          />
        </div>
      </div>
    </>
  );
}
