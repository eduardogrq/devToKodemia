const queryString = window.location.search;
const postKey = new URLSearchParams(queryString).get('postKey');

let fakeUser = {
    userId: 1,
    name: "Israel Salinas",
    imageUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQEKN_uf1kAPMw/profile-displayphoto-shrink_800_800/0/1550176229405?e=1624492800&v=beta&t=eP2Y1gyCpHtVPoB8Gz8lW8IO6G5ZKzSuyORxqB0EKxU",
    email: "israel@kodemia.mx"
}

const getInnerPost = (key) => {
    let dbPosts = [];
    $.ajax({
      method: "GET",
      url: `https://kodemiaproobs-default-rtdb.firebaseio.com/posts/${key}.json`,
      success: (response) => {
        console.log(response);
        dbPosts = response;
      },
      error: (error) => {
        console.log(error);
      },
      async: false,
    });
    return dbPosts;
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
                <img src="https://picsum.photos/seed/picsum/200/300" class="mr-2" alt="Generic placeholder image" style="width: 35px; height: 35px; border-radius: 50%;">
                <div class="media-body">
                    <span style=" font-size: 0.8rem;; margin-bottom: 4px;"><b>Israel Salinas</b></span>
                    <span class="gray-text ml-1" style=" font-size: 0.7rem;  margin-bottom: 5px;">March 15 2021</span>

                    <p class="mt-5 d-flex text-justify">
                        ${content}
                    </p>
                    
                    
                </div>
            </div>

        </div>     
    </div> `

    $("#postInnerContainer").append(postHtml)
}
printInnerPost()
                            
// Función para el dropdown de la imagen del usuario
$(document).ready(function(){
    $("#user-nav-img").hover(function(){
    $(".newDropdown").slideToggle();
    });
});