import CommentItem from './CommentItem';

function CommentList({ comments }: { comments: {
        id: number;
        text: string;
        user: string;
        user_id: number;
    }[]
}) {
  return (
    <div>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;