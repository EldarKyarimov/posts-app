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



        this.view.listenDeleteBtn();
        this.model.showComments(7);

    }

}




