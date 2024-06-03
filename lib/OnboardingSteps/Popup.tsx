import ButtonPrimary from '../Components/ButtonPrimary';
import DarkOverlay from '../Components/DarkOverlay';
import { PopupOptions } from '../types';

export default function Popup({
  title,
  text,
  image,
  visible = true,
  children,
  navigation,
  productTour,
}: PopupOptions) {
  return (
    <>
      {!productTour && <DarkOverlay />}

      <div
        aria-hidden={visible || !productTour ? 'false' : 'true'}
        style={{
          visibility: visible || !productTour ? 'visible' : 'hidden',
        }}
        className="ol-flex ol-items-center ol-justify-center ol-absolute ol-top-1/2 ol-left-1/2 ol-transform -ol-translate-x-1/2 -ol-translate-y-1/2 ol-z-41 "
      >
        <div className="ol-bg-background ol-p-5 ol-rounded-3xl ol-max-w-[664px] ol-flex ol-flex-col ol-gap-y-4 ">
          <span
            onClick={function (): void {}}
            className="material-symbols-outlined hover:ol-cursor-pointer ol-h-5 ol-w-5 ol-text-gray-dark hover:ol-text-secondary ol-text-center ol-content-center ol-absolute ol-top-2.5 ol-right-2.5"
          >
            close_small
          </span>
          {title && <h2 className="ol-text-4xl">{title}</h2>}
          {image && (
            <div className="ol-flex ol-justify-center">
              <img
                src={image}
                className="ol-object-contain w-full h-auto"
              ></img>
            </div>
          )}
          {text && <p className="ol-text-lg">{text}</p>}
          {children}
          {navigation ? (
            navigation
          ) : (
            <ButtonPrimary
              text={'close pop up message'}
              onClickHandler={function (): void {}}
            />
          )}
        </div>
      </div>
    </>
  );
}
