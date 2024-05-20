interface ButtonProps {
  text: string;
  onClickFunc: () => void;
}

const Button = ({ text, onClickFunc }: ButtonProps) => (
  <>
    <button
      className="ol-px-6 ol-py-2.5 ol-rounded-full ol-bg-primary ol-text-white"
      onClick={onClickFunc}
    >
      {text}
    </button>
  </>
);

export default Button;
