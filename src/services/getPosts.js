function api(postid) {
    const url = 
            postid 
                ? `https://dummyjson.com/posts/${postid}` 
                : 'https://dummyjson.com/posts';
    return fetch(url).then(response => response.json())
}

export { api };