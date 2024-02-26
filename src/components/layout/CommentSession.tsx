import CommentForm from "../common/CommentForm";
import CommentList from "../common/CommentList";

function CommentSession({ postId, setComments }: {
    postId: number;
    setComments: () => number;
}) {
  return (
    
    <div className="p-4 border-t border-gray-700">
        <h3 className="text-lg font-semibold text-gray-400 mb-2">Comentários</h3>
        <CommentForm
            postId={postId}
            setComments={setComments}
        />
        <CommentList
            comments={[
            { id: 1, text: "I love this!", user: "joseolinda", user_id: 1 },
            { id: 2, text: "I hate this!", user: "caio", user_id: 15  },
            { id: 3, text: "I don't care!", user: "luan", user_id: 12  },
            ]}
        />
    </div>
  );
}

export default CommentSession;