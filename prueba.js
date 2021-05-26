
// fetch('http://localhost:8080/posts')
//   .then(response => response.json())
//   .then(data => console.log(data));


// const getPosts = () => {
//     $.ajax({
//         method:"GET",
//         url:"http://localhost:8080/posts",
//         success: response => {
//             let  postArray= Object.keys(response.data).map( post =>{
//                 return {
//                     ...response[post],
//                 }
                
//             })
//         },
//         error: error => {
//             console.log( error )
//         }
//     })
// }

// getPosts()

// document.body.innerHTML = `<h1>Time right now is:`

async function getText() {
    let myObject = await fetch("http://localhost:8080/posts");
    let myText = await myObject.text();
  }