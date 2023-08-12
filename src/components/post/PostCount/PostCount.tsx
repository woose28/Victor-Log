import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { FlexBox, Text } from 'components';

export type PostCountProps = {
  count: number;
  tag?: string;
};

const PostCount = ({ count, tag }: PostCountProps) => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Text as="span" fontWeight={700}>
        Total{' '}
        <Text as="span" color={theme.color.primary} fontWeight={700}>
          {count}
        </Text>{' '}
        Post
        {tag && <Text as="span" fontWeight={300}>{` #${tag}`}</Text>}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled(FlexBox)`
  align-self: flex-start;
`;

export default PostCount;
