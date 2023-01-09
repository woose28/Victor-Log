import styled from '@emotion/styled';
import FloatingScrollButton from 'components/@shared/FloatingScrollButton/FloatingScrollButton';

export default {
  title: '@shared/FloatingScrollButton',
  component: FloatingScrollButton,
};

export const DefaultFloatingScrollButton = () => (
  <Wrapper>
    <FloatingScrollButton />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  height: 400vh;
`;
