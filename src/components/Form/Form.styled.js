import styled from '@emotion/styled';
import { theme } from 'styles';

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  border: 1px solid ${theme.colors.gray};
  width: 400px;
  margin-bottom: 30px;
  background-color: ${theme.colors.green};
`;

export const Label = styled.label`
  margin-right: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.03em;
  color: ${theme.colors.title};
`;

export const InputContact = styled.input`
  padding: 5px;
  border-radius: 5px;
  margin-left: 10px;
  width: auto;
`;

export const ButtonContact = styled.button`
   justify-content: center;  
   font-size: 12px;
width:105px;
   background-color: ${theme.colors.titleBC};
  border-radius: 5px;
  color: ${theme.colors.title};
  padding: 5px;
  box-shadow: ${theme.shadow};
  border:1px solid ${theme.colors.valueBC};
      transition: all 0.3s ease;
  &:hover {
 background-color: ${theme.colors.title};
   color: ${theme.colors.light};
`;