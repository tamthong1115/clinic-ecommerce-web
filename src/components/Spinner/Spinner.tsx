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

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <SpinnerComponent color={color} size={size} />
    </div>
  );
};

export default Spinner;
