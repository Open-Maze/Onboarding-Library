import ButtonClose from './ButtonClose';
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
    <div className="ol-flex ol-flex-row ol-items-center ol-justify-between">
      <ButtonClose onClickHandler={closeOnboardingHandler} />
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
