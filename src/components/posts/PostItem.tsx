import { useState } from 'react';
import { PostType } from '../../types';

import { LucideRepeat, LucideThumbsDown, LucideThumbsUp, MessageCircleMore } from 'lucide-react';
import CommentSession from '../layout/CommentSession';

function PostItem ({ post }: { post: PostType }) {
    const [isLiked, setIsLiked] = useState(post.isLiked);
    const [isDisliked, setIsDisliked] = useState(post.isDisliked);
    const [isReposted, setIsReposted] = useState(post.isReposted);
    const [likes, setLikes] = useState(post.likes);
    const [dislikes, setDislikes] = useState(post.dislikes);
    const [reposts, setReposts] = useState(post.reposts);
    const [comments, setComments] = useState(post.comments);
    const [showComments, setShowComments] = useState(false);

    const createdAtDate = new Date(post.createdAt);
    const formattedDate = createdAtDate.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className={`
                rounded-lg 
                shadow 
                bg-gray-800 
                h-fit
                w-full
                md:w-[calc(50%-0.5rem)] 
                lg:p-4
            `}
        >
            <div className="flex items-center p-4 lg:p-6">
                <img
                    src={post.authorAvatar || 'https://i.pravatar.cc/100?img=' + post.id}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full"
                />
                <div className="flex justify-between w-full ml-4 font-mono">
                    <span className="font-semibold">{post.author}</span>
                    <span className="text-xs text-gray-500">{formattedDate}</span>
                </div>
            </div>
            <div className="px-4 py-2">
                <h2 className="text-sm font-semibold text-gray-600 mb-2">{post.title}</h2>
                <p className="text-gray-400">{post.content}</p>
                {post.image && (
                    <img
                        src={post.image}
                        alt="Post"
                        className="w-full h-64 object-cover rounded-lg mt-4 cursor-pointer"
                        onClick={() => {
                            window.open(post.image, '_blank');
                        }}
                    />
                )}
            </div>
            <div className="flex justify-between items-center p-4 border-t border-gray-700">
                <div className="flex items-center space-x-4">
                    <button
                        className="flex items-center space-x-1"
                        onClick={() => {
                            if (isLiked) {
                                setLikes(likes - 1);
                            } else {
                                setLikes(likes + 1);
                            }
                            setIsLiked(!isLiked);
                        }}
                    >
                        <LucideThumbsUp
                            size={24}
                            className={`
                                ${isLiked ? 'text-blue-500' : 'text-gray-500'}
                                transition
                            `}
                        />
                        <span>{likes}</span>
                    </button>
                    <button
                        className="flex items-center space-x-1"
                        onClick={() => {
                            if (isDisliked) {
                                setDislikes(dislikes - 1);
                            } else {
                                setDislikes(dislikes + 1);
                            }
                            setIsDisliked(!isDisliked);
                        }}
                    >
                        <LucideThumbsDown
                            size={24}
                            className={`
                                ${isDisliked ? 'text-red-500' : 'text-gray-500'}
                                transition
                            `}
                        />
                        <span>{dislikes}</span>
                    </button>
                    <button
                        className="flex items-center space-x-1"
                        onClick={() => {
                            if (isReposted) {
                                setReposts(reposts - 1);
                            } else {
                                setReposts(reposts + 1);
                            }
                            setIsReposted(!isReposted);
                        }}
                    >
                        <LucideRepeat
                            size={24}
                            className={`
                                ${isReposted ? 'text-green-500' : 'text-gray-500'}
                                transition
                            `}
                        />
                        <span>{reposts}</span>
                    </button>
                </div>
                <button
                    className="flex items-center space-x-1"
                    onClick={() => {
                        setShowComments(!showComments);
                    }}
                >
                    <MessageCircleMore size={24} />
                    <span>{comments}</span>
                </button>
            </div>
            {showComments && (
                <CommentSession 
                    postId={post.id} 
                    setComments={setComments}
                />
            )}
        </div>
    )
}

export default PostItem;