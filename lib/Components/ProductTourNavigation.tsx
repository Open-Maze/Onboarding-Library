import Button from './Button';
import TextButton from './TextButton';

interface ProductTourNavigationProps {
  currentStep: number;
  totalSteps: number;
  filledButtonFunc: () => void;
  textButtonFunc: () => void;
}

const ProductTourNavigation = ({
  currentStep,
  totalSteps,
  filledButtonFunc,
  textButtonFunc,
}: ProductTourNavigationProps) => (
  <>
    {currentStep && totalSteps && textButtonFunc && filledButtonFunc && (
      <div className="ol-flex ol-flex-row ol-items-center ol-justify-between">
        <div className="ol-text-gray-dark ol-pr-4 ol-text-nowrap">
          {currentStep + ' of ' + totalSteps}
        </div>
        <div className="ol-flex ol-flex-row ol-gap-x-2.5">
          {currentStep > 1 && (
            <TextButton
              text={'Previous'}
              onClickFunc={textButtonFunc || (() => {})}
            ></TextButton>
          )}
          <Button
            text={currentStep >= totalSteps ? 'Finish' : 'Next'}
            onClickFunc={filledButtonFunc || (() => {})}
          ></Button>
        </div>
      </div>
    )}
  </>
);

export default ProductTourNavigation;
