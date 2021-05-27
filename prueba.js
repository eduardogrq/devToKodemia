
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

let nada = getPosts()

// Imprimir posts
const printPosts = postCollection => {

    // $(".pets-wrapper").empty()
    postCollection.forEach( post => {
        // let { postId, userId, content, title, createdDate, imageUrl, likes, key} = post
        // const numComments = getReplies(postId)
        // const image = index === array.length-1 ? `<img class="mw-100 border-radius-0" src="${imageUrl}">` : "" ;
        for (key in post){
            console.log(post)
        }

            let postCard  = ` 
            <div class="item col-12 p-0 pl-md-2 pr-md-2 pb-2">
                <div class="card d-flex w-100">
                    
                    <div class="card-body">
                        
                        <div class="media mb-2">
                            <img src="" class="mr-2" alt="Generic placeholder image" style="width: 35px; height: 35px; border-radius: 50%;">
                            <div class="media-body">
                                <span style=" font-size: 0.8rem; display: block; margin-bottom: 4px;"><b></b></span>
                                <span class="gray-text" style=" font-size: 0.7rem; display: block; margin-bottom: 5px;"></span>
                            </div>
                        </div>

                        <a href="post.html?postKey="> <h5 class="card-title pl-5" style="font-size: 1.7rem;"><b class="title"></b></h5> </a>
                            <p class="card-text gray-text pl-5" style="font-size: 0.9rem;">#Javascript #SQL #Technology #JS #CSS</p>
                            <div class="col-12 d-flex">
                                
                            <div class="col-4 col-md-8 d-flex align-items-center">
                                <i class="gray-text far fa-heart pl-4"></i><span class="d-none d-md-block pl-2 gray-text" style="font-size: 0.85rem;">reactions</span>
                                <i class="gray-text far fa-comment pl-4"></i><span class="d-none d-md-block pl-2 gray-text" style="font-size: 0.85rem;"> comments</span>
                            </div>
                            <div class="col-8 col-md-4 d-flex justify-content-end align-items-center">
                                <span class="gray-text pr-2" style="font-size: 0.7rem;">4 min read</span>
                                <button class="btn-save">Save</button>
                            </div>
                        </div> 
                        
                    </div>
                </div>
            </div>
        `

        $("#postsContainer").prepend(postCard)   
        
    }) 
    
    
    // $('.btn-save-replie').click(saveReplie);

}

printPosts(nada)



// console.log(getPosts())

