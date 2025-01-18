import { FC } from 'react';
import { PacmanLoader, ClipLoader, BeatLoader } from 'react-spinners';

interface SpinnerProps {
  type: 'PacmanLoader' | 'ClipLoader' | 'BeatLoader';
  color: string;
  size: number;
}

const spinnerComponents = {
  PacmanLoader,
  ClipLoader,
  BeatLoader,
};

const Spinner: FC<SpinnerProps> = ({ type, color, size }) => {
  const SpinnerComponent = spinnerComponents[type];

  return <SpinnerComponent color={color} size={size} />;
};

export default Spinner;
