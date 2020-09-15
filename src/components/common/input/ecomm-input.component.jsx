import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd'; 

const EcommInput = ({ placeholder, value, ...props }) => {
  return (<Input
    {...props}
    size="large"
    placeholder={placeholder}
    value={value}
  />)
}

EcommInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  props: PropTypes.string
}

export default EcommInput;