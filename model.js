export class Model {
    constructor() {
        this.URL = "https://jsonplaceholder.typicode.com/"
    }

    async getPosts(callback) {
        try {
            const api = await fetch(`${this.URL}posts`);
            const response = await api.json();
            const data = response.slice(0, 10);
            // console.log(data);
            data.forEach(post => callback(post.title, post.id));

        } catch {
            throw new Error('Error')
        }
    }

    async returnPostData(postId, callback) {
        try {
            const api = await fetch(`${this.URL}posts/${postId}`);
            const data = await api.json();
            // console.log('check')
            callback(data.title, data.body);
        } catch {
            throw new Error('Error')
        }
    }

    async deletePost(postId, callback) {
        try {
            const api = await fetch(`${this.URL}posts/${postId}`, {
                method: 'DELETE',
            });
            if (api.ok) {
                callback(postId)
            }
        } catch {
            throw new Error('Error')
        }
    }

    // async showComments(postId, callback) {
    //     try {
    //         const api = await fetch(`${this.URL}comments`);
    //         const data = await api.json();
    //         const postComments = data.filter((post) => post.postId === +postId)
    //         postComments.forEach((comment) =>
    //             callback(comment.name, comment.email, comment.body)
    //         );
    //     } catch {
    //         throw new Error('Error');
    //     }
    // }

    async showComments(postId, callback) {
        try {
            const api = await fetch(`${this.URL}posts/${postId}/comments`);
            const data = await api.json();
            const postComments = data.filter(comment => comment.postId === +postId);
            postComments.forEach(comment => callback(comment.name, comment.email, comment.body));
        } catch (error) {
            console.error('Error fetching comments:', error);
            throw new Error('Error fetching comments');
        }
    }


}