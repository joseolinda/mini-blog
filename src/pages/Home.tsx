import { useEffect, useState } from "react";

import { PostType } from "../types";

import Feed from "../components/layout/Feed";
import Header from "../components/layout/Header";
import Menu from "../components/layout/Menu";
import Footer from "../components/layout/Footer";

import { api } from "../services/getPosts.js";

/*
{
        id: 1,
        title: 'Post example',
        content: 'This is a post example',
        createdAt: '2021-09-01T12:00:00',
        author: 'John Doe',
        likes: 10,
        dislikes: 1,
        comments: 5,
        reposts: 2
}
*/

function Home() {
    const [listPosts, setListPosts] = useState<PostType[]>([{
        id: 1,
        title: 'Post example',
        content: 'This is a post example',
        createdAt: '2021-09-01T12:00:00',
        author: 'John Doe',
        likes: 10,
        dislikes: 1,
        comments: 5,
        reposts: 2
    }]);

    useEffect(() => {
        api().then((response) => {
            setListPosts(response.posts);
        });
        
    }, []);

    return (
        <div 
            className={`
                bg-gray-600
                w-full
                min-h-svh
            `}
        >
            <Header />
            <Feed posts={listPosts} />
            <Menu />
            <Footer />
        </div>
    );
}

export default Home;