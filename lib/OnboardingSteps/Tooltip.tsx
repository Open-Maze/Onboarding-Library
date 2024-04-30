import Button from '../Components/Button';
import TextButton from '../Components/TextButton';

interface TooltipProps {
  iconStyle: 'outlined' | 'rounded' | 'sharp';
  icon: string;
  title: string;
  image: string;
  text: string;
  currentStep: number;
  totalSteps: number;
  filledButtonFunc?: () => void;
  textButtonFunc?: () => void;
}

export default function Tooltip({
  iconStyle,
  icon,
  title,
  image,
  text,
  currentStep,
  totalSteps,
  filledButtonFunc,
  textButtonFunc,
}: TooltipProps) {
  return (
    <>
      <div className="flex flex-col max-w-[312px] bg-gray px-4 pt-3 pb-2 gap-y-1 shadow-md rounded-xl">
        <span className={`material-symbols-${iconStyle}`}>{icon}</span>
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
              onClickFunc={
                textButtonFunc ||
                (() => {
                  console.log('textButtonFunc is not defined');
                })
              }
            ></TextButton>
            <Button
              text={'Next'}
              onClickFunc={
                filledButtonFunc ||
                (() => {
                  console.log('fillButtonFunc is not defined');
                })
              }
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}
