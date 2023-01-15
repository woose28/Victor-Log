import { PropsWithChildren } from 'react';
import ToggleList from './ToggleList';
import { ToggleListProps } from './ToggleList.type';

export default {
  title: 'MDX/ToggleList',
  component: ToggleList,
};

export const DefaultToggleList = ({
  children,
  ...toggleListProps
}: PropsWithChildren<ToggleListProps>) => (
  <ToggleList {...toggleListProps}>
    <span>{children}</span>
  </ToggleList>
);

DefaultToggleList.args = {
  summary: '상세보기',
  children: '안녕하세요! 이것은 접는글입니다.',
};
