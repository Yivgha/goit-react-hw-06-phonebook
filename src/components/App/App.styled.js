import styled from '@emotion/styled';
import { theme } from 'styles';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
`;

export const MainTitle = styled.h1`
  width: 400px;
  background-color: ${theme.colors.titleBC};
  border-radius: 5px;
  color: ${theme.colors.title};
  padding: 8px;
  box-shadow: ${theme.shadow};
  text-transform: uppercase;
`;

export const Title = styled.h2`
  width: 400px;
  background-color: ${theme.colors.titleBC};
  border-radius: 5px;
  color: ${theme.colors.title};
  padding: 8px;
  box-shadow: ${theme.shadow};
  font-size: 18px;
  text-transform: uppercase;
`;