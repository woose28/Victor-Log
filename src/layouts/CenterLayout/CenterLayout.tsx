import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CenterLayoutProps } from 'layouts/CenterLayout/CenterLayout.type';
import { DISPLAY } from 'styles/css';

const CenterLayout = ({ children, backgroundColor }: PropsWithChildren<CenterLayoutProps>) => {
  return <Wrapper style={{ backgroundColor }}>{children}</Wrapper>;
};

export default CenterLayout;

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    height: fit-content;
    min-height: calc(100vh - 64px); // 100vh - [height of Header]
    padding: 64px 50px 30px;
    background-color: ${theme.color.background};

    @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
      padding: 64px 20px 30px;
    }
  `}
`;
