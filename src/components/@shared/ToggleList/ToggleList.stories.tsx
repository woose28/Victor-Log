import ToggleList from 'components/@shared/ToggleList/ToggleList';
import { ToggleListProps } from 'components/@shared/ToggleList/ToggleList.type';

export default {
  title: '@shared/ToggleList',
  component: ToggleList,
};

export const DefaultToggleList = (args: ToggleListProps) => (
  <ToggleList {...args}>
    <span>안녕하세요! 이것은 접는글입니다.</span>
  </ToggleList>
);

DefaultToggleList.args = {
  summary: '상세보기',
};
