import { useTheme } from '@emotion/react';
import type { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { FlexBox, LoadingIcon } from 'components';
import { useUtterances } from './useUtterances';

type UtterancesProps = {
  customStyle?: SerializedStyles;
};

const Utterances = ({ customStyle }: UtterancesProps) => {
  const { isLoading, containerRef } = useUtterances();

  const theme = useTheme();

  return (
    <Wrapper ref={containerRef} css={customStyle} justify="center" align="center">
      {isLoading && <LoadingIcon fill={theme.color.primary} width={30} />}
    </Wrapper>
  );
};

const Wrapper = styled(FlexBox)`
  width: 100%;
`;

export default Utterances;
