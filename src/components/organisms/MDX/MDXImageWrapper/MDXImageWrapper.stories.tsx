import MDXImageWrapper from './MDXImageWrapper';
import { MDXImageWrapperProps } from './MDXImageWrapper.type';
import TestImage from 'assets/images/테스트_이미지.jpeg';

export default {
  title: 'MDX/MDXImageWrapper',
  component: MDXImageWrapper,
};

export const DefaultMDXImageWrapper = (args: MDXImageWrapperProps) => (
  <MDXImageWrapper {...args}>
    <img
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      src={TestImage}
      alt="테스트 이미지"
    />
  </MDXImageWrapper>
);

DefaultMDXImageWrapper.args = {
  caption: '테스트 이미지',
};
