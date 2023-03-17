var params = new URLSearchParams(window.location.search);
const id = params.get("id");


const POST_INFO = document.getElementById('post-container');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((post) => {
        POST_INFO.innerHTML = `
            <p>userId: ${post.userId}</p>
            <p>id:${post.id}</p>
            <p>title: ${post.title}</p> 
            <p>body: ${post.body}</p>
        `;
    });