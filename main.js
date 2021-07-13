let url = 'https://jsonplaceholder.typicode.com/users';

async function getUsers() {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    let users = await getUsers();
    let div = document.getElementById('users')
    users.forEach(user => {
        let general_div = document.createElement('div')
        general_div.className += 'gen_div'

        let div_users_photo = document.createElement('img')
        div_users_photo.className += 'img'
        div_users_photo.src = 'fav.png'
        general_div.append(div_users_photo)

        let div_users_names = document.createElement('h2')
        div_users_names.innerHTML = user.name
        general_div.append(div_users_names)
        
        let div_users_emails = document.createElement('h4')
        div_users_emails.innerHTML = user.email
        general_div.append(div_users_emails)

        let div_button = document.createElement('div')
        let btn = document.createElement('button')
        btn.className += 'btn-class'
        btn.innerHTML = "Get User Post"
        btn.onclick = function hello() {
            let post_url = 'https://jsonplaceholder.typicode.com/users/' + user.id + '/posts'
            
            var request = new XMLHttpRequest()
            request.open('GET', post_url, true)
            request.onload = function () {
                var data = JSON.parse(this.response)
                data.forEach((UserPost) => {
                    alert(
                        'CURRENT POSTS FOR  ' + user.name + '\n\n' +
                        'User ID: ' + UserPost.userId + '\n' +
                        'Post ID: ' + UserPost.id + '\n' +
                        'Title: '  + ' ' + UserPost.title + '\n' +
                        'Body:  '  + ' ' + UserPost.body + '\n\n' +
                        'Please Press "OK" to go to the Next Post'

                        )
                    
                })

            }

            request.send()
            
        }
        div_button.append(btn)

        general_div.append(div_button)
        
        div.append(general_div)
        
    });


    
}

renderUsers();

