import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  border-radius: 10px;
  padding: ${RFValue(18)}px;
  background-color: ${({ theme }) => theme.colors.black};
  margin: ${RFValue(6)}px 0;
  flex-direction: row;
  align-items: center;
`;

export const InputText = styled(TextInput)`
  color: ${({ theme }) => theme.colors.gray700};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  width: 100%;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.gray700};
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(14)}px;
  margin-left: ${RFValue(4)}px;
`;
