
const queryString = window.location.search;
const postKey = new URLSearchParams(queryString).get('postKey');

const getPosts = () => {
    let postsCollection;
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/posts",
      success: response => {
        postsCollection = response.data.posts;
      },
      error: (error) => {
        console.log(error);
      },
      async: false,
    });
    return postsCollection;
};

let allPosts = getPosts()

let postFinded = allPosts.find(post => postKey === post._id)

let printInnerPost = () => {

    let {content, createdDate, imageUrl, title, _id: id, likes } = postFinded;
    let postHtml = `
    <div class="card d-flex w-100">
        <img src="${imageUrl}" class="card-img-top" style="max-height: 350px;">
        <div class="card-body">
        
                
            
            <h5 class="card-title pl-5" style="font-size: 2rem;"><b class="title">${title}</b></h5>
            <p class="card-text gray-text pl-5" style="font-size: 0.9rem;"><span class="tag-button bg-danger">#Javascript</span> <span class="tag-button bg-dark">#SQL</span> <span class="tag-button bg-success">#Technology</span> <span class="tag-button bg-warning">#JS</span></p>

            <div class="media mb-2">
                <img src="https://picsum.photos/seed/picsum/200/300" class="mr-2" alt="Generic placeholder image" style="width: 35px; height: 35px; border-radius: 50%;">
                <div class="media-body">
                    <span style=" font-size: 0.8rem;; margin-bottom: 4px;"><b>Israel Salinas</b></span>
                    <span class="gray-text ml-1" style=" font-size: 0.7rem;  margin-bottom: 5px;">March 15 2021</span>

                    <p class="mt-5 d-flex text-justify pb-5" style="border-bottom: 1px solid lightgray">
                        ${content}
                    </p>
                    
                    <!--replies-->
                        <div class="reply-form mt-5 reply-comment-${id}">
                            <form action="">
                            
                                <div class="form-group d-flex m-3">
                                    <input type="text" class="form-control comment-input" placeholder="Escribe un comentario">
                                    <button type="button" class="btn btn-primary btn-save-replie" data-commentkey="${id}">Comentar</button>
                                </div>
                            </form>
                        </div>

                        <div class="col-12" id="repliesContainer">
                            

                        </div>
                    
                </div>
            </div>

        </div>     
    </div> `

    $("#postInnerContainer").append(postHtml)
}
printInnerPost()
