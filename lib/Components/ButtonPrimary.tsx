interface ButtonProps {
  text: string;
  onClickHandler: () => void;
}

const ButtonPrimary = ({ text, onClickHandler }: ButtonProps) => (
  <>
    <button
      className="ol-px-4 ol-py-2 ol-border-2 ol-border-primary ol-text-white ol-rounded-xl ol-bg-primary ol-transition-transform hover:ol-scale-95"
      onClick={onClickHandler}
    >
      {text}
    </button>
  </>
);

export default ButtonPrimary;
