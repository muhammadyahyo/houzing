import React from 'react'
import { Container } from './style'

export const Input = ({
  type,
  onChange,
  placeholder,
  name,
  value,
  defaultValue,
  width,
  height,
}) => {
  return (
    <Container
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      width={width}
      type={type}
      height={height}
    />
  );
};

export default Input