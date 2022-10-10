import { Button, ButtonProps, styled } from '@mui/material';
import React from 'react';

const StyledButton = styled(Button)`
  border-radius: 40px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export function MamoButton(props: ButtonProps) {
  return <StyledButton {...props} />;
}
