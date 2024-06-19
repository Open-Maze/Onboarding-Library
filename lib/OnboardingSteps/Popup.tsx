import { useState } from 'react';
import ButtonClose from '../Components/ButtonClose';
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
  const [popupClosed, setPopupClosed] = useState(false);

  return (
    <>
      {!productTour && !popupClosed && <DarkOverlay />}
      <div className="ol-flex ol-items-center ol-justify-center ol-absolute ol-top-0 ol-left-0 ol-w-full ol-h-screen ol-content-center">
        <div
          aria-hidden={visible || !productTour ? 'false' : 'true'}
          style={{
            visibility: visible || !productTour ? 'visible' : 'hidden',
          }}
          className={` ${popupClosed && 'ol-hidden'} ol-flex ol-items-center ol-justify-center ol-absolute ol-z-41 ol-p-4`}
        >
          <div className="ol-bg-background ol-p-5 ol-rounded-3xl ol-max-w-[664px] ol-flex ol-flex-col ol-gap-y-4 ">
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
