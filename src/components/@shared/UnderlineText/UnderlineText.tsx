import { PropsWithChildren } from 'react';
import { UnderlineTextProps } from 'components/@shared/UnderlineText/UnderlineText.type';
import * as Styled from 'components/@shared/UnderlineText/UnderlineText.style';
import { Text } from 'components';

const UnderlineText = ({
  children,
  customTextStyle,
  customUnderlineStyle,
  underlineBottomPos,
  underlineColor,
  underlineOpacity,
  underlineThickness,
  size,
  ...restProps
}: PropsWithChildren<UnderlineTextProps>) => {
  return (
    <Styled.Wrapper>
      <Text css={customTextStyle} size={size} {...restProps}>
        {children}
      </Text>
      <Styled.Underline
        css={customUnderlineStyle}
        size={size}
        underlineBottomPos={underlineBottomPos}
        underlineColor={underlineColor}
        underlineOpacity={underlineOpacity}
        underlineThickness={underlineThickness}
      />
    </Styled.Wrapper>
  );
};

export default UnderlineText;
