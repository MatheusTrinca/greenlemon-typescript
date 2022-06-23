import React from 'react';
import { Container, Error, Icon, InputController, InputText } from './styles';
import theme from '../../global/theme';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

interface IProps extends TextInputProps {
  icon: string;
  control: Control;
  name: string;
  error: string;
}

export const Input: React.FC<IProps> = ({
  icon,
  control,
  name,
  error,
  ...otherProps
}) => {
  return (
    <InputController>
      <Container
        style={error && { borderColor: theme.colors.danger, borderWidth: 1 }}
      >
        <Controller
          control={control}
          rules={{ required: true }}
          name={name}
          render={({ field: { onChange, value } }) => (
            <>
              <Icon
                name={icon}
                style={
                  (error && { color: theme.colors.danger }) ||
                  (!error && value && { color: theme.colors.primary })
                }
              />
              <InputText
                onChangeText={onChange}
                value={value}
                placeholderTextColor={theme.colors.gray700}
                {...otherProps}
              />
            </>
          )}
        />
      </Container>
      {error && <Error>{error}</Error>}
    </InputController>
  );
};
