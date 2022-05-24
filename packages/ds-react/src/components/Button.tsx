import { styled } from '@stitches/react';
import { Button as ButtonCSS } from 'zodiac-ui-styles';

const ButtonWrapper = styled('button', ButtonCSS);

export const Button = () => {
  return <ButtonWrapper>Button</ButtonWrapper>;
};
