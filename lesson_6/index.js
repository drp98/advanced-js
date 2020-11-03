const URL = 'https://jsonplaceholder.typicode.com/';
const container = document.querySelector('#container');

Promise.all([
    queryApi('posts'),
    queryApi('users'),
]).then(([posts, users]) => {
    render(posts, users)
}).catch(error => container.innerHTML = error)

function queryApi(endPoint) {
    return fetch(URL + endPoint)
    .then(response => response.ok ? response.json() : Promise.reject('unsuccesfull response'))
}

function render(posts, users) {
    posts.forEach(post => {
        container.innerHTML += convertToHtml(post)
        users.forEach(user => {
            if(user.id == post.userId) {
                const innerId = `card-${post.id}`
                const card = document.getElementById(innerId);
                card.innerHTML = convertUserToHtml(user);
            }
        })
    })
}

function convertToHtml({title, body, id}) {
    return `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${body}</p>
            <p>
                <a class="btn btn-primary" data-toggle="collapse" href="#collapse-сard-${id}" role="button" aria-expanded="false" aria-controls="collapse-сard-${id}">
                    User
                </a>
            </p>
            <div class="collapse" id="collapse-сard-${id}">
                <div class="card card-body" id="card-${id}"></div>
            </div>
        </div>
    </div>`
}

function convertUserToHtml({name, username, email}) {
    return `<p>Name: ${name}</p>
    <p>Username: ${username}</p>
    <p>Email: ${email}</p>`
}
