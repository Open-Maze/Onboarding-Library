interface ButtonProps {
  text: string;
  onClickFunc: () => void;
}

const TextButton = ({ text, onClickFunc }: ButtonProps) => (
  <>
    <button
      className="ol-px-4 ol-py-2 ol-duration-100 ol-border-2 ol-transform ol-border-primary ol-text-primary ol-rounded-xl ol-bg-transparent hover:ol-scale-95 hover:ol-bg-primary hover:ol-text-white"
      onClick={onClickFunc}
    >
      {text}
    </button>
  </>
);

export default TextButton;
