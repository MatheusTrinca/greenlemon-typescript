import React from 'react';
import { ButtonContainer, ButtonText } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface IProps extends TouchableOpacityProps {
  text: string;
}

export const Button: React.FC<IProps> = ({ text, ...otherProps }) => {
  return (
    <ButtonContainer {...otherProps}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};
