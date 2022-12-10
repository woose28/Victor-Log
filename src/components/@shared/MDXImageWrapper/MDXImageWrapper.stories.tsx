import MDXImageWrapper from 'components/@shared/MDXImageWrapper/MDXImageWrapper';
import { MDXImageWrapperProps } from 'components/@shared/MDXImageWrapper/MDXImageWrapper.type';
import TestImage from 'images/테스트_이미지.jpeg';

export default {
  title: '@shared/MDXImageWrapper',
  component: MDXImageWrapper,
};

export const DefaultMDXImageWrapper = (args: MDXImageWrapperProps) => (
  <MDXImageWrapper {...args}>
    <img
      style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }}
      src={TestImage}
      alt="테스트 이미지"
    />
  </MDXImageWrapper>
);

DefaultMDXImageWrapper.args = {
  caption: '테스트 이미지',
};
