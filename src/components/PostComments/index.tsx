import { FormEvent, useState, ChangeEvent } from 'react';
import styled from 'styled-components';

import Comment from '../../models/Comment';

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CommentItem = styled.li`
  color: #444;
  font-size: 12px;
  line-height: 20px;
  background-color: #ffff9f;
  padding: 8px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const CommentContent = styled.p`
  font-style: italic;
  margin: 0;
`;

const CommentForm = styled.form`
  margin-top: 16px;
  text-align: right;
`;

const CommentTextarea = styled.textarea`
  display: block;
  resize: none;
  width: 100%;
  margin-bottom: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
`;

const CommentButton = styled.button`
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  background-color: #27ae60;
  color: #eee;
  cursor: pointer;
`;

const PostComments = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment]);
    }

    return (
        <div>
            <CommentList>
                {comments.map(({ comment, id }) => (
                    <CommentItem key={id}>
                        <CommentContent>{comment}</CommentContent>
                    </CommentItem>
                ))}
            </CommentList>
            <CommentForm onSubmit={handleAddComment}>
                <CommentTextarea
                    value={tempComment}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTempComment(e.target.value)}
                    required
                />
                <CommentButton type="submit">Comentar</CommentButton>
            </CommentForm>
        </div>
    );
}

export default PostComments;