export interface StepProps {
  nextStep: () => void;
  content: string;
  lastStep: boolean;
}

export default function Step({ nextStep, content, lastStep }: StepProps) {
  return (
    <>
      <div className="bg-white max-w-[300px] justify-between min-h-[400px] w-full flex flex-col p-[4px]">
        <p>{content}</p>
        <button onClick={nextStep} className="border border-black">
          {lastStep ? 'Close' : 'Next'}
        </button>
      </div>
    </>
  );
}
