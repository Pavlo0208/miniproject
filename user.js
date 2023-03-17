var params = new URLSearchParams(window.location.search);

const id = params.get("id");

const USER_INFO = document.getElementById('user-info');


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((user) => {
        const userHTML = `
            <p class="">id: ${user.id}</p>
            <h4>name: ${user.name}</h4>
            <h4>username: ${user.username}</h4>
            <h4>email: ${user.email}</h4>
            <p>address:</p>
            <h4>street: ${user.address.street}</h4>
            <h4>suite: ${user.address.suite}</h4>
            <h4>city: ${user.address.city}</h4>
            <h4>zipcode: ${user.address.zipcode}</h4>        
            <p>geo:</p> 
            <h4>lat: ${user.address.geo.lat}</h4> 
            <h4>lng: ${user.address.geo.lng}</h4>
            <h4>phone: ${user.phone}</h4> 
            <h4>website: ${user.website}</h4> 
            <p>company:</p>
            <h4>name: ${user.company.name}</h4>
            <h4>catchPhrase: ${user.company.catchPhrase}</h4>
            <h4>bs: ${user.company.bs}</h4>
              
        `;
        USER_INFO.innerHTML = userHTML;

    });


const onPressPost = (postId) => {
    window.location.href = "./post.html?id=" + postId;
}
const postDiv = document.getElementById("post-info");


fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((response) => response.json())
    .then((posts) => {
        let postItem = '';
        posts.forEach((post) => {
            console.log(post);
            postItem += `
                <div class="post-item" id="${post.id}">
                   <p>${post.title}</p>                   
                   <button class="y" onclick="onPressPost(${post.id})">Read more</button>
                </div>
                `
        });
        postDiv.innerHTML = postItem;
    })
    .catch((error) => console.log(error));

const SHOW_BUTTON = document.getElementById("button-show");

SHOW_BUTTON.onclick = function (){
    postDiv.style.display = 'block';
}
function showPost() {
    console.log('hello')
}