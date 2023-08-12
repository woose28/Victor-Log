import React, { PropsWithChildren } from 'react';
import { CenterLayoutProps } from './CenterLayout.type';
import * as Styled from './CenterLayout.style';
import { Header, Footer } from 'components';

const CenterLayout = ({
  children,
  headerBackgroundColor,
  mainBackgroundColor,
}: PropsWithChildren<CenterLayoutProps>) => {
  return (
    <>
      <Header backgroundColor={headerBackgroundColor} />
      <Styled.Main style={{ backgroundColor: mainBackgroundColor }}>{children}</Styled.Main>
      <Footer />
    </>
  );
};

export default CenterLayout;
