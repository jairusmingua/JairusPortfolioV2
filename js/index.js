const workprogbtn = document.querySelector("#works-programming-btn");
const workfilmbtn = document.querySelector("#works-film-btn");
const workgraphicsbtn = document.querySelector("#works-graphics-btn");

workprogbtn.addEventListener("click",()=>{
    document.querySelector(".gallery").removeChild(document.querySelector(".gallery").firstChild);
    $.get("https://cors-anywhere.herokuapp.com/https://evening-fortress-44812.herokuapp.com/works/programming",(data,status)=>{
        let root = document.createElement("DIV");
        root.className = "repo-root"
        data.forEach((repo)=>{
            let a = document.createElement("A");
            a.href = repo.repo_url;
            a.target = "_blank";
            let div = document.createElement("DIV");
            div.className = "repo-item";
            let repo_name= document.createElement("DIV");
            repo_name.className = "repo-name";
            repo_name.textContent = repo.name;
            let repo_description=document.createElement("DIV");
            repo_description.className ="repo-description";
            repo_description.textContent = repo.description;
            div.appendChild(repo_name);
            div.appendChild(repo_description);
            
            a.appendChild(div);
            
            root.appendChild(a);
        })
        document.querySelector(".gallery").appendChild(root);
    })
})
workgraphicsbtn.addEventListener("click",()=>{
    document.querySelector(".gallery").removeChild(document.querySelector(".gallery").firstChild);
    $.get("https://cors-anywhere.herokuapp.com/https://evening-fortress-44812.herokuapp.com/works/graphics",(data,status)=>{
        let root = document.createElement("DIV");
        root.className = "gallery-root"
        data.forEach((images)=>{
            let div = document.createElement("DIV");
            let img = document.createElement("IMG");
            img.src = images.imgurl;
            img.alt = images.description;
            div.title = images.title;
            div.appendChild(img);
            root.appendChild(div);
        })
        document.querySelector(".gallery").appendChild(root);
    })
})
workprogbtn.click();