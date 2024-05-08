interface ButtonProps {
  text: string;
  onClickFunc: () => void;
}

const TextButton = ({ text, onClickFunc }: ButtonProps) => (
  <>
    <button className="px-3 py-2.5 bg-transparent" onClick={onClickFunc}>
      {text}
    </button>
  </>
);

export default TextButton;
