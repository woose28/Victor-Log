import PostItem from 'pages/post/components/PostItem/PostItem';
import { PostItemProps } from 'pages/post/components/PostItem/PostItem.type';

export default {
  title: 'post/PostItem',
  component: PostItem,
};

export const DefaultPostItem = (args: PostItemProps) => <PostItem {...args} />;

DefaultPostItem.args = {
  title: '게시글 제목',
  date: '2022-01-01',
  tags: ['태그1', '아주 긴 태그', '태그3', '태그4'],
  excerpt:
    'CORS 정책 위배 이슈는 웹 개발자라면 한 번쯤 만나는 문제라고 합니다. 저 역시 최근 ‘Cookie에 저장된 정보를 요청 헤더에 넣어서 전달하는 과정’을 구현하기 위해 테스트 도중 CORS 정책 이슈를 만났습니다. 나중에 CORS 정책 이슈를…',
};
