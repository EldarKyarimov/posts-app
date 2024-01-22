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
        this.display = document.querySelectorAll('.posts-info-display');
    }

    listenBackClick() {
        const back = this.display;
        Array.from(back).forEach(btn => {
            btn.addEventListener('click', () => {
                console.log('hello')
                this.mainContainer.classList.remove("hidden");
                this.selectedPost.classList.add("hidden");
            })
        })
    }

    changeWindow() {
        this.mainContainer.classList.remove("hidden");
        this.selectedPost.classList.add("hidden");
    }

    createPost(post, postId) {
        // console.log(post, postId)
        const titleWords = post.split(" ");
        const editedTitle = `${titleWords.slice(0, 5).join(" ")}...`;
        this.posts.innerHTML += `
                  <div class="post"  data-post-id="${postId}">
                  <p class="txt">${editedTitle}<p>
                  <button class = 'delete-post-btn' data-post-id="${postId}">X</button>
                  </div>
                  `;
    }

    listenCreateBtn(callback) {
        Array.from(this.createBtn).forEach(btn => {
            btn.addEventListener('click', callback);
        });
    }

    listenPostClick(callback) {
        this.posts.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-post-btn')) {
                return;
            }
            const postElement = e.target.closest('.post');
            if (postElement) {
                const postId = postElement.dataset.postId;
                if (postId) {
                    this.mainContainer.classList.add('hidden');
                    this.selectedPost.classList.remove('hidden');
                    callback(postId);
                }
            }
        });
    }

    getPostData(title, body) {
        this.postTitle.innerHTML = title;
        this.postBody.innerHTML = body;
    }


    listenDeleteBtn(callback) {
        const deleteBtns = document.querySelector('.posts');
        deleteBtns.addEventListener('click', (e) => {
            const deleteBtn = e.target.closest('.delete-post-btn');
            if (!deleteBtn) return;
            if (deleteBtn) {
                const postId = e.target.closest(".post").getAttribute("data-post-id");
                callback(postId);
            }
        })
    }

    deletePost(postId) {
        const deletedPost = document.querySelector(`[data-post-id="${postId}"]`);
        if (deletedPost) {
            deletedPost.remove();
        }
    }

    // addComment(name, email, comment) {
    //     const data = `
    //     <div class = 'comment'> 
    //     <p>${name} /  ${email}</p>
    //     <p>${comment}</p>
    //     </div>
    //     `

    //     this.postComments.insertAdjacentHTML("beforeend", data);
    // }

    addComment(name, email, comment) {
        const data = `
        <div class='comment'> 
            <p>${name} / ${email}</p>
            <p>${comment}</p>
        </div>
        `;
        this.postComments.insertAdjacentHTML("beforeend", data);
    }




}