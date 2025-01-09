import { useToast } from '../context/ToastContext';

const Ex = () => {
  const { showToast } = useToast();

  const handleClick = () => {
    showToast('This is a success message!', {
      type: 'success',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Show Toast</button>
    </div>
  );
};

export default Ex;
