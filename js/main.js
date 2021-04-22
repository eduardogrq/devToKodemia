/* hola */
// https://kodemiaproobs-default-rtdb.firebaseio.com/.json

let post = {
    postId: 1,
    userId: 1,
    createdDate: moment().format('L'),
    content: "adfa asdf asdf asdf asdf",
    title: "primer post",
    imageUrl: "https://picsum.photos/50/50",
}

// save posts
const savePost = postData => {
    $.ajax({
        method:"POST",
        url:"https://kodemiaproobs-default-rtdb.firebaseio.com/posts/.json",
        data:JSON.stringify( postData ),
        success: response => {
            console.log( response )
        },
        error: error => {
            console.log( error )
        }
    })
}

// trae los datos de posts
const getPosts = () => {
    $.ajax({
        method:"GET",
        url:"https://kodemiaproobs-default-rtdb.firebaseio.com/posts/.json",
        success: response => {
            console.log( response )
            printPosts( response )
        },
        error: error => {
            console.log( error )
        }
    })
}

//imprimir los cards de posts
getPosts()

// Inprimir posts
const printPosts = postCollection => {

    // $(".pets-wrapper").empty()
    Object.keys( postCollection ).forEach( post => {
        let { postId, userId, content, title, createdDate, imageUrl } = postCollection[post]
        
        
            let postCard  = ` 
            <div class="col-12 d-flex p-0 pl-md-2 pr-md-2 pb-2">
                <div class="card d-flex w-100">
                    <div class="card-body" >

                        <div class="media mb-2">
                            <img src="${imageUrl}" class="mr-2" alt="Generic placeholder image" style="width: 35px; height: 35px; border-radius: 50%;">
                            <div class="media-body">
                                <span style=" font-size: 0.8rem; display: block; margin-bottom: 4px;"><b>Yogini Bende</b></span>
                                <span class="gray-text" style=" font-size: 0.7rem; display: block; margin-bottom: 5px;">${createdDate}</span>
                            </div>
                        </div>

                        <h5 class="card-title pl-5" style="font-size: 1.7rem;"><b>${title}</b></h5>
                            <p class="card-text gray-text pl-5" style="font-size: 0.9rem;">#Javascript #SQL #Technology #JS #CSS</p>
                            <div class="col-12 d-flex">
                                
                            <div class="col-4 col-md-8 d-flex align-items-center">
                                <i class="gray-text far fa-heart pl-4"></i><span class="d-none d-md-block pl-2 gray-text" style="font-size: 0.85rem;">25 reactions</span>
                                <i class="gray-text far fa-comment pl-4"></i><span class="d-none d-md-block pl-2 gray-text" style="font-size: 0.85rem;">4 comments</span>
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

        $("#postsContainer").append(postCard)
        
    })
}



                // <div class="media mb-2">
                //     <img src="https://picsum.photos/seed/picsum/200/300" class="mr-2" alt="Generic placeholder image" style="width: 35px; height: 35px; border-radius: 50%;">
                //     <div class="media-body">
                //         <span style=" font-size: 0.8rem; display: block; margin-bottom: 4px;"><b>Yogini Bende</b></span>
                //         <span class="gray-text" style=" font-size: 0.7rem; display: block; margin-bottom: 5px;">Media heading</span>
                //     </div>
                // </div>

                // <h5 class="card-title pl-5" style="font-size: 1.7rem;"><b>How to invalidate a JWT using a blacklist</b></h5>
                // <p class="card-text gray-text pl-5" style="font-size: 0.9rem;">#Javascript #SQL #Technology #JS #CSS</p>
                // <div class="col-12 d-flex">
                    
                //     <div class="col-4 col-md-8 d-flex align-items-center">
                //         <i class="gray-text far fa-heart pl-4"></i><span class="d-none d-md-block pl-2 gray-text" style="font-size: 0.85rem;">25 reactions</span>
                //         <i class="gray-text far fa-comment pl-4"></i><span class="d-none d-md-block pl-2 gray-text" style="font-size: 0.85rem;">4 comments</span>
                //     </div>
                //     <div class="col-8 col-md-4 d-flex justify-content-end align-items-center">
                //         <span class="gray-text pr-2" style="font-size: 0.7rem;">4 min read</span>
                //         <button class="btn-save">Save</button>
                //     </div>
                // </div>  