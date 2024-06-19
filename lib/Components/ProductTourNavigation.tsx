import ButtonClose from './ButtonClose';
import ButtonPrimary from './ButtonPrimary';
import OutlinedButton from './OutlinedButton';

interface ProductTourNavigationProps {
  currentStep: number;
  totalSteps: number;
  previousButtonHandler: () => void;
  nextButtonHandler: () => void;
  closeOnboardingHandler: () => void;
}

const ProductTourNavigation = ({
  currentStep,
  totalSteps,
  previousButtonHandler,
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
            onClickHandler={previousButtonHandler}
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
