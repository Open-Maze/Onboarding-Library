import {
  FloatingFocusManager,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useState } from 'react';
import Button from '../Components/Button';
import TextButton from '../Components/TextButton';

export default function Popover() {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: 'end' }),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const headingId = useId();

  return (
    <>
      <button ref={refs.setReference} {...getReferenceProps()}>
        Add review
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className="w-max max-w-[312px] bg-gray px-4 shadow-md rounded-xl border"
            ref={refs.setFloating}
            style={floatingStyles}
            aria-labelledby={headingId}
            {...getFloatingProps()}
          >
            <div className="pt-3 pb-2 gap-y-1 flex flex-col">
              <span className="material-symbols-outline">chat</span>
              <h2>title</h2>
              <img
                src="https://picsum.photos/200/300"
                className="bg-gray-dark"
              ></img>
              <div>text</div>
              <div className="flex flex-row items-center justify-between">
                <div className="text-gray-dark">1 of 1</div>
                <div className="flex flex-row gap-x-2.5">
                  <TextButton
                    text={'Previous'}
                    onClickFunc={() => {
                      console.log('textButtonFunc is not defined');
                    }}
                  ></TextButton>
                  <Button
                    text={'Next'}
                    onClickFunc={() => {
                      console.log('fillButtonFunc is not defined');
                    }}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
