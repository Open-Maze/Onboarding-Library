interface ButtonProps {
  text: string;
  onClickFunc: () => void;
}

const Button = ({ text, onClickFunc }: ButtonProps) => (
  <>
    <button className="bg-red-500" onClick={onClickFunc}>
      {text}
    </button>
  </>
);

export default Button;
