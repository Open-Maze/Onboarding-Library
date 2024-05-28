interface ButtonProps {
  text: string;
  onClickHandler: () => void;
}

const Button = ({ text, onClickHandler }: ButtonProps) => (
  <>
    <button
      className="ol-duration-100 hover:ol-scale-95 ol-border-2 ol-transform ol-border-primary ol-px-4 ol-py-2 ol-rounded-xl ol-bg-primary ol-text-white"
      onClick={onClickHandler}
    >
      {text}
    </button>
  </>
);

export default Button;
