function CommentItem({ comment }: { comment: {
    text: string;
    user: string;
    user_id: number;
} }) {
  return (
    <div className="flex items-center space-x-4 space-y-6">
        <img
            src={`https://i.pravatar.cc/100?img=${comment.user_id}`}
            alt="Avatar"
            className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-col py-2 border-b border-gray-700 w-full">
            <span className="font-semibold font-mono text-sm">{ comment.user }</span>
            <p className="text-gray-400">{ comment.text }</p>
        </div>
    </div>
  );
}

export default CommentItem;