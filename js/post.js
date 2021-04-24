const queryString = window.location.search;
const postKey = new URLSearchParams(queryString).get('postKey');

let fakeUser = {
    userId: 1,
    name: "Israel Salinas",
    imageUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQEKN_uf1kAPMw/profile-displayphoto-shrink_800_800/0/1550176229405?e=1624492800&v=beta&t=eP2Y1gyCpHtVPoB8Gz8lW8IO6G5ZKzSuyORxqB0EKxU",
    email: "israel@kodemia.mx"
}


// se obtiene el post correspondiente a la página
const getInnerPost = (key) => {
    let dbPosts = [];
    $.ajax({
      method: "GET",
      url: `https://kodemiaproobs-default-rtdb.firebaseio.com/posts/${key}.json`,
      success: (response) => {
        // console.log(response);
        dbPosts = response;
      },
      error: (error) => {
        console.log(error);
      },
      async: false,
    });
    return dbPosts;
};

// obtener los comentarios

/*get Replies*/
const getReplies = () => {
    let dbReplies;
    $.ajax({
      method: "GET",
      url: "https://kodemiaproobs-default-rtdb.firebaseio.com/replies/.json",
      success: (response) => {
        // console.log("getReplies = ", response)
        filterPostId(response)
        dbReplies = response;
      },
      error: (error) => {
        console.log(error);
      },
      async: false,
    });
  
    // console.log( d bData )
    return dbReplies;
  };


//Variable que contiene el objeto con el id del post
let innerPostObject = getInnerPost(postKey)

let printInnerPost = () => {

    let {content, createdDate, imageUrl, postId, title, userId } = innerPostObject;
    let postHtml = `
    <div class="card d-flex w-100">
        <img src="${imageUrl}" class="card-img-top" style="max-height: 350px;">
        <div class="card-body">
        
                
            
            <h5 class="card-title pl-5" style="font-size: 2rem;"><b>${title}</b></h5>
            <p class="card-text gray-text pl-5" style="font-size: 0.9rem;"><span class="tag-button bg-danger">#Javascript</span> <span class="tag-button bg-dark">#SQL</span> <span class="tag-button bg-success">#Technology</span> <span class="tag-button bg-warning">#JS</span></p>

            <div class="media mb-2">
                <img src="${fakeUser.imageUrl}" class="mr-2" alt="Generic placeholder image" style="width: 35px; height: 35px; border-radius: 50%;">
                <div class="media-body">
                    <span style=" font-size: 0.8rem;; margin-bottom: 4px;"><b>Israel Salinas</b></span>
                    <span class="gray-text ml-1" style=" font-size: 0.7rem;  margin-bottom: 5px;">${createdDate}</span>

                    <p class="mt-5 d-flex text-justify pb-5" style="border-bottom: 1px solid lightgray">
                        ${content}
                    </p>
                    
                    <!--replies-->
                        <div class="reply-form mt-5 reply-comment-${postId}">
                            <form action="" class="reply-comment-${postId}" id="replyForm">
                            
                                <div class="form-group d-flex m-3">
                                    <input type="text" class="form-control comment-input" placeholder="Escribe un comentario">
                                    <button type="button" class="btn btn-primary " id="savePostBtn" data-commentkey="${postId}">Comentar</button>
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

getReplies()

//Función para guardar en nuestro arreglo de replies todos los replies que pertenecen a ese post

function filterPostId(replies) {
    
    // let replies = getReplies();
    $("#repliesContainer").empty()
    for(key in replies){
        if(replies[key].postId === innerPostObject.postId){
            // repliesArray.push(replies[key])
            printReplies(replies[key])
        }
    }
}

function printReplies(repliesArray){

    let repliesContainer = $("#repliesContainer");

    let {content} = repliesArray;

        let repliesContent = `
        <div class="d-flex nada mb-4">
            <img class=" rounded-circle" src="${fakeUser.imageUrl}"" style="width: 40px; height: 40px;">
            <div class="ml-2 pl-3 col-10" style="border: 0.5px solid lightgray; border-radius: 8px;">
                <span style="color: gray">${fakeUser.name}</span><br>
                <p>${content}</p>
            </div>
            
        </div>
        `
        $("#repliesContainer").append(repliesContent)
    
}

// Guardar replies

let saveReplie = (event) => {
    let postId = $(event.target).data("commentkey")
    let comment = $(`.reply-comment-${postId} form div input`).val();
    $.ajax({
        method: "POST",
        url: "https://kodemiaproobs-default-rtdb.firebaseio.com/replies/.json",
        data: JSON.stringify({
          content: comment,
          creationDate: moment().format("l"),
          creationTime: moment().format("LT"),
          postId: postId
        }),
        success: (response) => {
          getReplies();
          $(`.reply-comment-${postId} form`)[0].reset();
        },
        error: (error) => {
          console.log(error);
        },
      });
}

$("#savePostBtn").click(saveReplie)

// Función para el dropdown de la imagen del usuario
$(document).ready(function(){
    $("#user-nav-img").hover(function(){
    $(".newDropdown").slideToggle();
    });
});