interface ButtonProps {
  text: string;
  onClickFunc: () => void;
}

const Button = ({ text, onClickFunc }: ButtonProps) => (
  <>
    <button
      className="ol-duration-100 hover:ol-scale-95 ol-border-2 ol-transform ol-border-primary ol-px-4 ol-py-2 ol-rounded-xl ol-bg-primary ol-text-white"
      onClick={onClickFunc}
    >
      {text}
    </button>
  </>
);

export default Button;
