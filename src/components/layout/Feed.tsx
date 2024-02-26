import { NavLink } from 'react-router-dom';
import { PostType } from '../../types';
import { LucideSquarePen } from 'lucide-react';
import PostItem from '../posts/PostItem';

function Feed({ posts }: { posts: PostType[] }) {
    return (
        <div 
            className={`
                bg-gray-600
                text-gray-400
                border-t
                flex
                z-10
                max-w-7xl
                mx-auto
                relative
                h-full
                items-start
                mb-6
            `}
        >
            <NavLink 
                to={'/posts/new'}
                className={`
                    bg-red-600
                    text-white
                    border-t
                    border-red-800
                    flex
                    justify-between
                    z-10
                    max-w-7xl
                    mx-auto
                    p-4
                    rounded-full
                    gap-4
                    transition
                    scale-75
                    fixed
                    right-0
                    bottom-14
                    md:bottom-20
                    shadow
                `}
            >
                <LucideSquarePen size={24} /> 
                <span 
                    className='hidden md:block'
                >Novo Post</span>
            </NavLink>

            <div className={`
                    w-full
                    flex
                    flex-wrap
                    gap-2
                    p-2
                    mx-auto
                    content-stretch
                `}	
            >
                {posts.map((post) => (
                    <PostItem
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
        </div>
    );
}

export default Feed;