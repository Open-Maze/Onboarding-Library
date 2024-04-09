import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const OnboardingProvider = ({ children }: Props) => (
  <div className="absolute bg-black bg-opacity-50 h-screen w-screen">
    <div className="flex h-full items-center align-center">
      <p className="h-sm">OnboardingProvider</p>
      {children}
    </div>
  </div>
);

export default OnboardingProvider;
