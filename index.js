const onPressUser = (userId) => {
    window.location.href = "./user.html?id=" + userId;
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        const usersDiv = document.getElementById("users");
        let userItem = '';
        users.forEach((user) => {
            userItem+= `
                <div class="user-item" id="${user.id}">
                      <p>name:${user.name}</p>                      
                     <button class="button" onclick="onPressUser(${user.id})">UserDatails</button>
                </div>
            `
        });
        usersDiv.innerHTML = userItem;
    })
    .catch((error) => console.log(error));
