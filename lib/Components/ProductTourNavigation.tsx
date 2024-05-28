import ButtonPrimary from './ButtonPrimary';
import OutlinedButton from './OutlinedButton';

interface ProductTourNavigationProps {
  currentStep: number;
  totalSteps: number;
  previouButtonHandler: () => void;
  nextButtonHandler: () => void;
  closeOnboardingHandler: () => void;
}

const ProductTourNavigation = ({
  currentStep,
  totalSteps,
  previouButtonHandler,
  nextButtonHandler,
  closeOnboardingHandler,
}: ProductTourNavigationProps) => (
  <>
    <div className="ol-flex ol-flex-row ol-items-center ol-justify-between relative">
      <span
        onClick={closeOnboardingHandler}
        className="material-symbols-outlined hover:ol-cursor-pointer ol-h-5 ol-w-5 ol-text-gray-dark hover:ol-text-secondary ol-text-center ol-content-center ol-absolute ol-top-[10px] ol-right-[10px]"
      >
        close_small
      </span>
      <div className="ol-pr-4 ol-text-nowrap ol-text-gray-dark">
        {`${currentStep} of ${totalSteps}`}
      </div>
      <div className="ol-flex ol-flex-row  ol-gap-x-2.5">
        {currentStep > 1 && (
          <OutlinedButton
            text={'previous'}
            onClickHandler={previouButtonHandler}
          ></OutlinedButton>
        )}
        <ButtonPrimary
          text={currentStep >= totalSteps ? 'finish' : 'next'}
          onClickHandler={nextButtonHandler}
        ></ButtonPrimary>
      </div>
    </div>
  </>
);

export default ProductTourNavigation;
