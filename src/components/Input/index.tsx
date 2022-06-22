import React from 'react';
import { Container, Icon, InputText } from './styles';
import theme from '../../global/theme';
import { TextInputProps } from 'react-native';

interface IProps extends TextInputProps {
  icon: string;
}

export const Input: React.FC<IProps> = ({ icon, ...otherProps }) => {
  return (
    <Container>
      <Icon name={icon} />
      <InputText placeholderTextColor={theme.colors.gray700} {...otherProps} />
    </Container>
  );
};
