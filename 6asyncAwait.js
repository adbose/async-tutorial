const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two'}
];

console.log('1. number of posts: ', posts.length);

function getPosts() {
    console.log('entered getPosts');
    console.log('2. number of posts: ', posts.length);
    setTimeout(() => {
        console.log('getting posts...');
        console.log('3. number of posts: ', posts.length);
        let output = '';
        let ul = document.getElementById('uolist');
        posts.forEach((post, index) => {
            let li = document.createElement('li');
            li.innerHTML = post.title
            ul.appendChild(li);
        });
    }, 2000);
}

function createPost(post) {
    console.log('entered createPosts');
    console.log('4. number of posts: ', posts.length);
    setTimeout(() => {
        console.log('waiting for createPosts to finish...');
        posts.push(post);
        console.log('5. number of posts: ', posts.length);
    }, 5000);
}

async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three'});
    getPosts();
}

init();
console.log('6. number of posts: ', posts.length);
console.log('fin');
// console.log(posts);
// in this method, the getPost method is passed to create post as a callback
// which gets called after we have added the third post to posts