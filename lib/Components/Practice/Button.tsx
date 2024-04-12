// TO-DO: Remove this component and its stories
// This component should be used as a practice environment for experimenting with react and Storybook

export interface ButtonProps {
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
