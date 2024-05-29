interface ButtonProps {
  text: string;
  onClickHandler: () => void;
}

const OutlinedButton = ({ text, onClickHandler }: ButtonProps) => (
  <>
    <button
      className="ol-px-4 ol-py-2 ol-border-2 ol-border-primary ol-text-primary ol-rounded-xl ol-bg-transparent ol-transition-transform hover:ol-scale-95 hover:ol-bg-primary hover:ol-text-white"
      onClick={onClickHandler}
    >
      {text}
    </button>
  </>
);

export default OutlinedButton;
