import styled from '@emotion/styled';
import { CLASS_NAME_FADE_IN } from 'components/@shared/ScrollFadeInAnimation/ScrollFadeInAnimation.constant';

const Wrapper = styled.div`
  transform: translateY(50%);
  opacity: 0;
  transition: 0.5s;

  &.${CLASS_NAME_FADE_IN} {
    transform: translateY(0);
    opacity: 1;
  }
`;

export { Wrapper };
