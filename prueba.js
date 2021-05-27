
let fakeUser = {
    userId: 1,
    name: "Israel Salinas",
    imageUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQEKN_uf1kAPMw/profile-displayphoto-shrink_800_800/0/1550176229405?e=1624492800&v=beta&t=eP2Y1gyCpHtVPoB8Gz8lW8IO6G5ZKzSuyORxqB0EKxU",
    email: "israel@kodemia.mx"
}

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

// _id: "60add7a2d0444e7694a3c74a", createdDate: "1987-09-28T00:00:00.000Z", content: "Este es mi primer post", imageUrl: "https://picsum.photos/200/300", likes: 3, …

// Imprimir posts
const printPosts = postCollection => {

    // $(".pets-wrapper").empty()
    postCollection.forEach( post => {
        // let { postId, userId, content, title, createdDate, imageUrl, likes, key} = post
        // const numComments = getReplies(postId)
        // const image = index === array.length-1 ? `<img class="mw-100 border-radius-0" src="${imageUrl}">` : "" ;

        const {_id: id, createdDate, title, content, imageUrl, likes} = post

            let postCard  = ` 
            <div class="item col-12 p-0 pl-md-2 pr-md-2 pb-2">
                <div class="card d-flex w-100">
                <img src="${imageUrl}" class="card-img-top" style="max-height: 350px;">
                    <div class="card-body">
                        
                        <div class="media mb-2">
                            <img src="${fakeUser.imageUrl}" class="mr-2" alt="Generic placeholder image" style="width: 35px; height: 35px; border-radius: 50%;">
                            <div class="media-body">
                                <span style=" font-size: 0.8rem; display: block; margin-bottom: 4px;"><b>${fakeUser.name}</b></span>
                                <span class="gray-text" style=" font-size: 0.7rem; display: block; margin-bottom: 5px;">${createdDate}</span>
                            </div>
                        </div>

                        <a href="post.html?postKey=${id}"> <h5 class="card-title pl-5" style="font-size: 1.7rem;"><b class="title">${title}</b></h5> </a>
                            <p class="card-text gray-text pl-5" style="font-size: 0.9rem;">#Javascript #SQL #Technology #JS #CSS</p>
                            <div class="col-12 d-flex">
                                
                            <div class="col-4 col-md-8 d-flex align-items-center">
                                <i class="gray-text far fa-heart pl-4"></i><span class="d-none d-md-block pl-2 gray-text" style="font-size: 0.85rem;">${likes} reactions</span>
                                <i class="gray-text far fa-comment pl-4"></i><span class="d-none d-md-block pl-2 gray-text" style="font-size: 0.85rem;">${likes} comments</span>
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

printPosts(allPosts)



// console.log(getPosts())

