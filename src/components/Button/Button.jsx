import PropTypes from 'prop-types';

import { Button } from './Button.styled';

const ButtonComponent = ({ children, onLoadMore }) => {
  return (
    <Button type="button" onClick={onLoadMore}>
      {children}
    </Button>
  );
};

ButtonComponent.prototype = {
  children: PropTypes.children,
  onLoadMore: PropTypes.func,
};

export default ButtonComponent;
