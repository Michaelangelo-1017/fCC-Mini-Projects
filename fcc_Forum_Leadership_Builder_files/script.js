//Variables
const forumLatest = 'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';
const postsContainer = document.getElementById("posts-container");

const allCategories = {
    299: { category: 'Career Advice', className: 'career' },
    409: { category: 'Project Feedback', className: 'feedback' },
    417: { category: 'freeCodeCamp Support', className: 'support' },
    421: { category: 'JavaScript', className: 'javascript' },
    423: { category: 'HTML - CSS', className: 'html-css' },
    424: { category: 'Python', className: 'python' },
    432: { category: 'You Can Do This!', className: 'motivation' },
    560: { category: 'Backend Development', className: 'backend' }
};

//Functions
const timeAgo = (time) =>{
    const timeInput = new Date(`${time}`);
    const currentTime = new Date();
    const diffMs = currentTime - timeInput;
    if(Math.floor(diffMs / (1000 * 60)) < 60){
        return `${Math.floor(diffMs / (1000 * 60))}m ago`
    }
    if(Math.floor(diffMs / (1000 * 60 * 60)) < 24){
        return `${Math.floor(diffMs / (1000 * 60 * 60))}h ago`
    }
    return `${Math.floor(diffMs / (1000 * 60 * 60 * 24))}d ago`
}

const viewCount = (views) =>{
    const viewsStr = `${views}`
    const viewsInt = parseInt(views);
    if(Number.isNaN(viewsInt) || viewsStr.includes("e")){
        console.log("Must be a number")
        return;
    }
    if(viewsInt >= 1000){
        return `${Math.floor(viewsInt / 1000)}k`
    }
    return viewsInt;
}

const forumCategory = (id) => {
    if(allCategories.hasOwnProperty(id)){
        return `<a class="category ${allCategories[id].className}" href="${forumCategoryUrl}${allCategories[id].className}/${id}">${allCategories[id].category}</a>`
    }
    else{
        return `<a class="category general" href="${forumCategoryUrl}general/${id}">General</a>`
    }
}

function avatars(postersArr,usersArr){
    let imgString = "";
    postersArr.forEach((item)=>{
        const {user_id} = item;
        const user = usersArr.find((item1)=>item1.id === user_id);
        const avatarTemplate = user["avatar_template"];
        const avatarTemplate1 = avatarTemplate.replace("{size}",30);
        let srcValue = ""
        if(avatarTemplate1.startsWith("http://") || avatarTemplate1.startsWith("https://")){
        srcValue = avatarTemplate1
        }else{
        srcValue = `${avatarUrl}${avatarTemplate1}`
        }
        imgString += `<img alt="${user.name}" src="${srcValue}">`
    })
    return imgString;
}

const showLatestPosts = (obj) =>{
    const users = obj["users"];
    const topicList = obj["topic_list"];
    const topics = topicList["topics"]
    postsContainer.innerHTML = ``
    topics.forEach((item)=>{
        const {id, title, views, posts_count, slug, posters, category_id, bumped_at} = item;
        postsContainer.innerHTML += 
        `<tr>
        <td>
            <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
            ${forumCategory(category_id)}
        </td>
        <td>
            <div class="avatar-container">${avatars(posters,users)}</div>
        </td>
        <td>${posts_count - 1}</td>
        <td>${viewCount(views)}</td>
        <td>${timeAgo(`${bumped_at}`)}</td>
        </tr>`
    })
}

async function fetchData(){
    try{
        let response = await fetch(forumLatest);
        let data = await response.json();
        showLatestPosts(data)
    } catch(error){
        console.log(error)
    }
    
}



//Testing block
fetch(forumLatest)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    }).
    catch(error=>{
        console.log(error)
    })