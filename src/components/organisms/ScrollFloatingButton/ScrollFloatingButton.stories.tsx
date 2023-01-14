import styled from '@emotion/styled';
import ScrollFloatingButton from './ScrollFloatingButton';

export default {
  title: 'organisms/ScrollFloatingButton',
  component: ScrollFloatingButton,
};

export const DefaultScrollFloatingButton = () => (
  <Wrapper>
    <ScrollFloatingButton />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  height: 400vh;
`;
