interface ButtonProps {
  text: string;
  onClickFunc: () => void;
}

const TextButton = ({ text, onClickFunc }: ButtonProps) => (
  <>
    <button
      className="ol-px-3 ol-py-2.5 ol-bg-transparent"
      onClick={onClickFunc}
    >
      {text}
    </button>
  </>
);

export default TextButton;
