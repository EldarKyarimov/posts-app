export class Model {
    constructor() {
        this.URL = "https://jsonplaceholder.typicode.com/"
    }

    async getPosts(callback) {
        try {
            const api = await fetch(`${this.URL}posts`);
            const response = await api.json();
            const data = response.slice(0, 10);
            data.forEach(post => callback(post.title, post.id, false));

        } catch {
            callback(null, true);
            console.log('Error')
        }
    }

    async returnPostData(postId, callback) {
        try {
            const api = await fetch(`${this.URL}posts/${postId}`);
            const data = await api.json();
            console.log('check')
            callback(data.title, data.body);
        } catch {
            throw new Error('Unexpected error occured')
        }
    }

    async deletePost(postId, callback) {
        try {
            const api = await fetch(`${this.URL}post/${postId}`, {
                method: 'DELETE',
            });
            if (api.ok) {
                callback(postId)
            }
        } catch {
            throw new Error('Error')
        }
    }

    async showComments(postId,) {
        try {
            const api = await fetch(`${this.URL}posts/${postId}/comments`);
            const data = await api.json();
            // const postComment = data.filter((post) => {
            //     post.
            // })
            console.log(data)
        } catch {
            throw new Error('Error');
        }
    }



}