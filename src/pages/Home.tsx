import { PostType } from "../types";

import Feed from "../components/layout/Feed";
import Header from "../components/layout/Header";
import Menu from "../components/layout/Menu";
import Footer from "../components/layout/Footer";

function Home() {
    const postExample: PostType[] = [{
        id: 1,
        title: 'Post example',
        content: 'This is a post example',
        createdAt: '2021-09-01T12:00:00',
        author: 'John Doe',
        likes: 10,
        dislikes: 1,
        comments: 5,
        reposts: 2
    },
    {
        id: 2,
        title: 'Post example 2',
        content: 'This is a post example 2',
        createdAt: '2021-09-01T12:00:00',
        author: 'Edward Doe',
        likes: 15,
        dislikes: 2,
        comments: 7,
        reposts: 3
    },
    {
        id: 3,
        title: 'Post example 3',
        content: 'This is a post example 3',
        createdAt: '2021-09-01T12:00:00',
        author: 'Jane Doe',
        likes: 20,
        dislikes: 3,
        comments: 10,
        reposts: 5
    },
    {
        id: 4,
        title: 'Post example',
        content: 'This is a post example',
        createdAt: '2021-09-01T12:00:00',
        author: 'John Doe',
        likes: 10,
        dislikes: 1,
        comments: 5,
        reposts: 2
    },
    {
        id: 5,
        title: 'Post example 2',
        content: 'This is a post example 2',
        createdAt: '2021-09-01T12:00:00',
        author: 'Edward Doe',
        likes: 15,
        dislikes: 2,
        comments: 7,
        reposts: 3
    },
    {
        id: 6,
        title: 'Post example 3',
        content: 'This is a post example 3',
        createdAt: '2021-09-01T12:00:00',
        author: 'Jane Doe',
        likes: 20,
        dislikes: 3,
        comments: 10,
        reposts: 5,
        image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/300`
    }];

    return (
        <div 
            className={`
                bg-gray-600
                w-full
                min-h-svh
            `}
        >
            <Header />
            <Feed posts={postExample} />
            <Menu />
            <Footer />
        </div>
    );
}

export default Home;