import { useState } from 'react';
import ButtonClose from '../Components/ButtonClose';
import ButtonPrimary from '../Components/ButtonPrimary';
import DarkOverlay from '../Components/DarkOverlay';
import { PopupOptions } from '../types';

/**
 * Popup component that displays a modal dialog with optional title, text, image, and children.
 * The visibility of the popup can be controlled with the `visible` prop.
 * If `productTour` is false, a close button and dark overlay will be displayed.
 * The `navigation` prop allows for custom navigation elements to be included in the popup if it is in a product tour.
 * @param {PopupOptions} props
 */
export default function Popup({
  title,
  text,
  image,
  visible = true,
  children,
  navigation,
  productTour,
}: PopupOptions) {
  const [popupClosed, setPopupClosed] = useState(false);

  return (
    <>
      {/* A product tour provides its children with a darkoverlay so if the popup is used on its own it needs to display its own darkoverlay. */}
      {!productTour && !popupClosed && <DarkOverlay />}
      <div className="ol-flex ol-items-center ol-justify-center ol-absolute ol-top-0 ol-left-0 ol-w-full ol-h-screen ol-content-center">
        {/* The popup is hidden when it is closed or not part of a product tour. In order to comply with accesibility the aria value will also be set to hidden*/}
        <div
          aria-hidden={visible || !productTour ? 'false' : 'true'}
          style={{
            visibility: visible || !productTour ? 'visible' : 'hidden',
          }}
          className={` ${popupClosed && 'ol-hidden'} ol-flex ol-items-center ol-justify-center ol-absolute ol-z-41 ol-p-4`}
        >
          <div className="ol-bg-background ol-relative ol-p-5 ol-rounded-3xl ol-max-w-[664px] ol-flex ol-flex-col ol-gap-y-4 ">
            {/* If not part of a product tour, display a close button */}
            {!productTour && (
              <ButtonClose onClickHandler={() => setPopupClosed(true)} />
            )}
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
                onClickHandler={() => setPopupClosed(true)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
