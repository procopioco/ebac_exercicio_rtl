import styled from 'styled-components';
import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const PostCard = styled.section`
  background-color: #fff;
  padding: 16px;
  box-shadow: 1px 2px 6px rgba(51,51,51,0.4);
  border-radius: 16px;
  margin-bottom: 20px;
`;

const PostImage = styled.img`
  max-width: 100%;
  display: block;
  border-radius: 10px;
`;

const PostText = styled.p`
  color: #333;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 24px;
`;

const Post = ({ children, imageUrl }: Props) => (
    <PostCard>
        <PostImage src={imageUrl} alt="Post" />
        <PostText>{children}</PostText>
        <PostComments />
    </PostCard>
);

export default Post;