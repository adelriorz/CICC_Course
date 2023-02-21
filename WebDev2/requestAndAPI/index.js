const listElement = document.querySelector(".posts")
const fetchButton = document.querySelector("#available-posts button")
const postTemplate = document.querySelector("template")
const createPostButton = document.querySelector("#new-post button")

async function sendHttpRequest(method, url, data) {
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const responseData = await response.json()
    return responseData
}

async function createPost() {
    const newPostData = {
        title: "New Post Title",
        body: "New Post Body",
        userId: 1
    }
    const responseData = await sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", newPostData)
    console.log(responseData)
}

async function fetchPosts() {
    const responseData = await sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts")

    console.log(responseData)
    if(responseData.length > 0){
        for(const post of responseData){
            const postElClone = document.importNode(postTemplate.content, true)
            postElClone.querySelector("h2").textContent = post.title
            postElClone.querySelector("p").textContent = post.body
            postElClone.querySelector("li").id = post.id
            listElement.appendChild(postElClone)
        }
    }
}

// CREATE/POST
createPostButton.addEventListener("click", createPost)

// READ/GET
fetchButton.addEventListener("click", fetchPosts)
