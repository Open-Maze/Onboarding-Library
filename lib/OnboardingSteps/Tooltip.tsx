import {
  FloatingFocusManager,
  FloatingPortal,
  Placement,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
  useRole,
} from '@floating-ui/react';
import * as React from 'react';
import Button from '../Components/Button';
import TextButton from '../Components/TextButton';

export interface TooltipOptions {
  initialOpen?: boolean;
  placement?: Placement;
  modal?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

function useTooltip({
  initialOpen = false,
  placement = 'bottom',
  modal,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  onNext,
  onPrev,
}: TooltipOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
  const [labelId, setLabelId] = React.useState<string | undefined>();
  const [descriptionId, setDescriptionId] = React.useState<
    string | undefined
  >();

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'end',
        padding: 5,
      }),
      shift({ padding: 5 }),
    ],
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      modal,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
      onNext,
      onPrev,
    }),
    [
      open,
      setOpen,
      interactions,
      data,
      modal,
      labelId,
      descriptionId,
      onNext,
      onPrev,
    ]
  );
}

type ContextType =
  | (ReturnType<typeof useTooltip> & {
      setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
      setDescriptionId: React.Dispatch<
        React.SetStateAction<string | undefined>
      >;
    })
  | null;

const TooltipContext = React.createContext<ContextType>(null);

const useTooltipContext = () => {
  const context = React.useContext(TooltipContext);

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />');
  }

  return context;
};

export function Tooltip({
  children,
  modal = false,
  ...restOptions
}: {
  children: React.ReactNode;
} & TooltipOptions) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const Tooltip = useTooltip({ modal, ...restOptions });
  return (
    <TooltipContext.Provider value={Tooltip}>
      {children}
    </TooltipContext.Provider>
  );
}

interface TooltipTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export const TooltipTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & TooltipTriggerProps
>(function TooltipTrigger({ children, asChild = false, ...props }, propRef) {
  const context = useTooltipContext();
  const childrenRef = React.useRef<HTMLElement>(null);
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': context.open ? 'open' : 'closed',
      })
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      // The user can style the trigger based on the state
      data-state={context.open ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      {children}
    </button>
  );
});

export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function TooltipContent({ style, ...props }, propRef) {
  const { context: floatingContext, ...context } = useTooltipContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!floatingContext.open) return null;

  const iconStyle = 'outline';
  const icon = 'chat';
  const title = 'Welcome to the product tour';
  const image = 'https://picsum.photos/id/237/1920/1080';
  const text =
    'This is a product tour that will guide you through the features of the application.';
  const currentStep = 1;
  const totalSteps = 2;

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext} modal={context.modal}>
        <>
          <div
            ref={ref}
            style={{ ...context.floatingStyles, ...style }}
            aria-labelledby={context.labelId}
            aria-describedby={context.descriptionId}
            {...context.getFloatingProps(props)}
            className="max-w-[312px] absolute top-0 left-0 bg-gray px-4 z-100 shadow-md rounded-xl"
          >
            <div className="pt-3 pb-2 gap-y-1 flex flex-col">
              {props.children}
              <span className={`material-symbols-${iconStyle}`}>{icon}</span>
              <h2>{title}</h2>
              <img src={image} className="bg-gray-dark"></img>
              <div>{text}</div>
              <div className="flex flex-row items-center justify-between">
                <div className="text-gray-dark">
                  {currentStep} of {totalSteps}
                </div>
                <div className="flex flex-row gap-x-2.5">
                  <TextButton
                    text={'Previous'}
                    onClickFunc={context.onPrev || (() => {})}
                  ></TextButton>
                  <Button
                    text={'Next'}
                    onClickFunc={context.onNext || (() => {})}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </>
      </FloatingFocusManager>
    </FloatingPortal>
  );
});
