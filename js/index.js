document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector("#github-form [name='submit']");
    const userForm = document.getElementById("github-form");

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById("search").value;

        fetch(`https://api.github.com/users/${username}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById('user-list');
            userList.innerHTML = `
                <li><img src ='${data.avatar_url}'/></li>
                <li>User Name: ${data.login}</li>
                <li>Bio: ${data.bio}</li>
                <li>Followers: ${data.followers}</li>
                <li>Public Repositories: ${data.public_repos}</li>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Please try again!');
        });
    });
});