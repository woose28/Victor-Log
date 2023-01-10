import { PropsWithChildren } from 'react';
import { UnderlineTextProps } from 'components/@shared/UnderlineText/UnderlineText.type';
import * as Styled from 'components/@shared/UnderlineText/UnderlineText.style';

const UnderlineText = ({
  children,
  customTextStyle,
  customUnderlineStyle,
  fontSize,
  textColor,
  underlineBottomPos,
  underlineColor,
  underlineOpacity,
  underlineThickness,
  textAs,
}: PropsWithChildren<UnderlineTextProps>) => {
  return (
    <Styled.Wrapper>
      <Styled.Text as={textAs} textColor={textColor} fontSize={fontSize} css={customTextStyle}>
        {children}
      </Styled.Text>
      <Styled.Underline
        css={customUnderlineStyle}
        fontSize={fontSize}
        underlineBottomPos={underlineBottomPos}
        underlineColor={underlineColor}
        underlineOpacity={underlineOpacity}
        underlineThickness={underlineThickness}
      />
    </Styled.Wrapper>
  );
};

export default UnderlineText;
