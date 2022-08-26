import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FlexBoxProps } from 'components/@shared/FlexBox/FlexBox.type';

const FlexBox = styled.div<FlexBoxProps>`
  ${({ flexDirection, justifyContent, flexWrap, alignItems, gap }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-wrap: ${flexWrap};
    gap: ${gap};
  `}
`;

export default FlexBox;
