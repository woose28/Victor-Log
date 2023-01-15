import React, { PropsWithChildren } from 'react';
import { FullLayoutProps } from './FullLayout.type';
import * as Styled from './FullLayout.style';
import { Header, Footer } from 'components';

const FullLayout = ({
  children,
  headerBackgroundColor,
  mainBackgroundColor,
}: PropsWithChildren<FullLayoutProps>) => {
  return (
    <>
      <Header backgroundColor={headerBackgroundColor} />
      <Styled.Main style={{ backgroundColor: mainBackgroundColor }}>{children}</Styled.Main>
      <Footer />
    </>
  );
};

export default FullLayout;
