interface StepProps {
  nextStep: () => void;
  content: string;
  lastStep: boolean;
}

export default function Step({ stepProps }: { stepProps: StepProps }) {
  return (
    <div className="bg-white max-w-[300px] justify-between min-h-[400px] w-full flex flex-col p-[4px]">
      <p>{stepProps.content}</p>
      <button onClick={stepProps.nextStep} className="bg-blue-500">
        {stepProps.lastStep ? 'Close' : 'Next'}
      </button>
    </div>
  );
}
