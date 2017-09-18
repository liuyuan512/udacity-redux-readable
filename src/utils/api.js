const api = 'http://localhost:5001';


let token = localStorage.token;

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token,
    'Content-Type': 'application/json'
};

export const fetchCategories = () => fetch(`${api}/categories`,{headers})

export const fetchPost = () => fetch(`${api}/posts`,{headers})

export const fetchUpPostVote =(id) => fetch(`${api}/posts/${id}`,{
    headers,
    method:'POST',
    body:JSON.stringify({
        option:'upVote'
    })
})

export const fetchDownPostVote =(id) => fetch(`${api}/posts/${id}`,{
    headers,
    method:'POST',
    body:JSON.stringify({
        option:'downVote'
    })
})

export const fetchDeletePost = (id) => fetch(`${api}/posts/${id}`,{
    headers,
    method:'DELETE'
})

export const fetchGetCategoryPosts =(category) => fetch(`${api}/${category}/posts`,{headers})

export const fetchAddPost = (post) =>fetch(`${api}/posts`,{
    headers,
    method:'POST',
    body:JSON.stringify(post)
})

export const fetchGetPostByID = (id) => fetch(`${api}/posts/${id}`,{headers})

export const fetchPostCommentById = (id) => fetch(`${api}/posts/${id}/comments`,{headers})

export const fetchUpCommentVote =(id) => fetch(`${api}/comments/${id}`,{
    headers,
    method:'POST',
    body:JSON.stringify({
        option:'upVote'
    })
})

export const fetchDownCommentVote =(id) => fetch(`${api}/comments/${id}`,{
    headers,
    method:'POST',
    body:JSON.stringify({
        option:'downVote'
    })
})

export const fetchDeleteComment = (id) => fetch(`${api}/comments/${id}`,{
    headers,
    method:'DELETE'
})


export const fetchAddComment = (comment) =>fetch(`${api}/comments`,{
    headers,
    method:'POST',
    body:JSON.stringify(comment)
})

export const fetchUpdateComment = (id,comment) => fetch(`${api}/comments/${id}`,{
    headers,
    method:'PUT',
    body:JSON.stringify({
        timestamp:Date.now(),
        body:comment.body
    })
})

export const getUpdateComment = (id) => fetch(`${api}/comments/${id}`,{headers})

export const fetchUpdatePost = (id,post) => fetch(`${api}/posts/${id}`,{
    headers,
    method:'PUT',
    body:JSON.stringify({
        title:post.title,
        body:post.body
    })
})