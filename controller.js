export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.view.listenCreateBtn(() => {
            this.view.create()
        });

        this.model.getPosts((post, postId) => {
            this.view.createPost(post, postId);
        });

        this.view.listenPostClick((postId) => {
            this.model.returnPostData(postId, this.view.getPostData.bind(this.view))
        })

        this.view.listenPostClick((postId) => {
            this.model.showComments(postId, (name, email, comment) => {
                this.view.addComment(name, email, comment);
            })
        });

        this.view.listenDeleteBtn((postId) => {
            this.model.deletePost(postId, this.view.deletePost.bind(this.view))
        })

        this.view.listenBackClick();
    }
}




