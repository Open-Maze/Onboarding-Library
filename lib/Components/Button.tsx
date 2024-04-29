interface ButtonProps {
  text: string;
  onClickFunc: () => void;
}

const Button = ({ text, onClickFunc }: ButtonProps) => (
  <>
    <button
      className="px-6 py-2.5 rounded-full bg-primary text-white"
      onClick={onClickFunc}
    >
      {text}
    </button>
  </>
);

export default Button;
