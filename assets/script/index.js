const button = document.querySelector('.input__button');
const container = document.querySelector('.posts');

function createPost(post) {
    return `
        <div class="posts__post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        </div>
    `;
}

//Создаем функцию, которая будет очищать поле ввода
function cleanInputs() {
    document.querySelector('.input__text').value = '';
    document.querySelector('.input__header').value = '';
}

function sendPost() {
    const header = document.querySelector('.input__header').value;
    console.log(header);
    const text = document.querySelector('.input__text').value;
    console.log(text);

    const postData = {
        title: `${header}`,
        body: `${text}`,
        userId: 1,
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(postData),
    })
        .then(response => response.json())
        .then(data => createPost(data))
        .catch(error => console.log(error));
}

button.addEventListener('click', sendPost);