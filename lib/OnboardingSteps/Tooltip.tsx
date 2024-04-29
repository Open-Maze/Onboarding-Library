import Button from '../Components/Button';
import TextButton from '../Components/TextButton';

interface TooltipProps {
  icon: string;
  title: string;
  image: string;
  text: string;
  currentStep: number;
  totalSteps: number;
}

export default function Tooltip({
  icon,
  title,
  image,
  text,
  currentStep,
  totalSteps,
}: TooltipProps) {
  return (
    <>
      <div className="flex flex-col max-w-[312px] bg-gray px-4 pt-3 pb-2 gap-y-1 shadow-md rounded-xl">
        <div className="h-6 w-6">{icon}</div>
        <h2>{title}</h2>
        <img src={image} className="bg-gray-dark"></img>
        <div>{text}</div>
        <div className="flex flex-row items-center justify-between">
          <div className="text-gray-dark">
            {currentStep} of {totalSteps}
          </div>
          <div className="flex flex-row gap-x-2.5">
            <TextButton
              text={'Previous'}
              onClickFunc={function (): void {
                throw new Error('Function not implemented.');
              }}
            ></TextButton>
            <Button
              text={'Next'}
              onClickFunc={function (): void {
                throw new Error('Function not implemented.');
              }}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}
