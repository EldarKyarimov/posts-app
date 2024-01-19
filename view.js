export class View {
    constructor() {
        this.mainContainer = document.querySelector('.main-container');
        this.posts = document.querySelector('.posts');
        this.createBtn = document.getElementsByClassName('create-btn');
        this.header = document.querySelector('.header');
        this.postContent = document.querySelector('.post-content');
        this.postBody = document.querySelector(".post-body");
        this.postComments = document.querySelector(".post-comments");
        this.postTitle = document.querySelector(".title");
        this.selectedPost = document.querySelector(".selected-post");
    }

    listenCreateBtn(callback) {
        Array.from(this.createBtn).forEach(btn => {
            btn.addEventListener('click', callback);
        });
    }

    changeWindow() {
        this.mainContainer.classList.remove("hidden");
        this.selectedPost.classList.add("hidden");
    }

    createPost(post, postId) {
        const titleWords = post?.split(" ");
        const editedTitle = `${titleWords.slice(0, 5).join(" ")}...`;
        this.posts.innerHTML += `
                  <div class="post"  data-post-id="${postId}">
                  <p>${editedTitle}<p>
                  <button class = 'delete-post-btn' data-post-id="${postId}">X</button>
                  </div>
                  `;
    }

    deletePost(postId) {
        const deleteBtns = document.querySelectorAll('.delete-post-btn');

        deleteBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const postId = btn.getAttribute('data-post-id');
                callback(postId);
            });
        });
    }



}