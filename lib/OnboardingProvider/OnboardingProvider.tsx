import Step from '../Components/OnboardingSteps/Step';

interface StepType {
  id: string;
}

export default function OnboardingProvider({ steps }: { steps: StepType[] }) {
  // const [currentId, setCurrentId] = useState(steps[0].id);
  // const currentStep = steps.find((step) => step.id === currentId);
  let index = 0;
  let currentStep = steps[index];

  const nextStepFunc = () => {
    console.log('-----------------------------');
    console.log(currentStep);
    console.log(index);
    index++;
    currentStep = steps[index];
  };

  return (
    <>
      <div className="absolute bg-black bg-opacity-50 h-screen w-screen">
        <div className="flex h-full items-center justify-center align-center">
          <Step
            stepProps={{
              nextStep: () => nextStepFunc(),
              content: `${currentStep!.id}`,
            }}
          />
        </div>
      </div>
    </>
  );
}
