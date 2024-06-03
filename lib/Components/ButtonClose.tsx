interface ButtonCloseProps {
  onClickHandler: () => void;
}

const ButtonClose = ({ onClickHandler }: ButtonCloseProps) => (
  <span
    onClick={onClickHandler}
    className="material-symbols-outlined hover:ol-cursor-pointer ol-h-5 ol-w-5 ol-text-gray-dark hover:ol-text-secondary ol-text-center ol-content-center ol-absolute ol-top-2.5 ol-right-2.5"
  >
    close_small
  </span>
);

export default ButtonClose;
