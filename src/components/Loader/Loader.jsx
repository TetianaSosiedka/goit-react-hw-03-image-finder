import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="20"
      width="100%"
      radius="9"
      color="#3f51b5"
      ariaLabel="three-dots-loading"
      //wrapperStyle
      //wrapperClass
    />
  );
};

export default Loader;
