import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray800};
  flex: 1;
`;

export const Content = styled.View`
  padding: ${RFValue(18)}px ${RFValue(24)}px;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(40)}px;
`;
