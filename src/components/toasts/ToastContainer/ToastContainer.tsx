import 'react-toastify/dist/ReactToastify.css';

import { Slide, ToastContainer } from 'react-toastify';

import CrossButton from '../../buttons/CrossButton';

/**
 * Use this to customize the different colors for the different toast types
 * https://fkhadra.github.io/react-toastify/how-to-style/#css-classes-as-function
 */
const contextClass = {
  success: 'bg-green',
  error: 'bg-red',
  info: 'bg-gray',
  warning: 'bg-orange',
  default: 'bg-white border-gray-200 dark:bg-dark-800 dark:border-dark-700 text-white',
  dark: 'bg-white-600 bg-dark-800 font-gray-300',
};

const CloseIcon = () => <CrossButton />;

const ToastContainerWrapper: React.FC = () => {
  return (
    <ToastContainer
      transition={Slide}
      closeButton={CloseIcon}
      toastClassName={(context) =>
        `${
          contextClass[context?.type || 'default']
        } min-h-14 flex m-4 p-4 rounded-lg cursor-pointer lg:min-w-560`
      }
      toastStyle={{
        boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 18%)',
      }}
      bodyClassName={() => 'flex-1'}
    />
  );
};

export default ToastContainerWrapper;
