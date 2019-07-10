


 
import  jump  from './jump.module.js';

var bubbles = document.querySelectorAll(".bubble");
var cls = document.querySelector(".box-close");

var g;
var bodyworks;
var info = document.querySelector(".info");
var info_header = document.querySelector(".info-header");
var info_body = document.querySelector(".info-body");
var gallerycnt = 0;
var gallery;
var loadFunctions= [loadGallery,loadApps,loadVideos];
var isGalleryLoaded = false;
var firebaseConfig = {
    apiKey: "AIzaSyBxui6FverHy8SJVIEL5G0RSs33S2TbBD0",
    authDomain: "jairusportfolio-8e75d.firebaseapp.com",
    databaseURL: "https://jairusportfolio-8e75d.firebaseio.com",
    projectId: "jairusportfolio-8e75d",
    storageBucket: "jairusportfolio-8e75d.appspot.com",
    messagingSenderId: "963564017167",
    appId: "1:963564017167:web:7935b6c8942406cd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();



bubbles.forEach((b,i)=>{
    b.addEventListener("click",()=>{
        
        bodyworks = document.querySelector(".body-myworks")
        bodyworks.classList.toggle("active");
        var category =  b.querySelector(".bubble-header").textContent;
        console.log(category);
        document.getElementById("box-text").textContent = category;
        loadFunctions[i]();
        jump(".body-myworks",{offset:-100});
        // document.getElementsByTagName('h2')[3].scrollIntoView();
    });
});
cls.addEventListener("click",()=>{
    
     bodyworks = document.querySelector(".body-myworks")
        bodyworks.classList.toggle("active");
        jump(".content",{offset:-150});
    
    // g.classList.remove("active");
    // g.classList.remove("shrink");
    // toggleInfo();
    
})
function loadVideos(){

}
function loadApps(){

}
function wrapGallery(data){
    if(!isGalleryLoaded){
        var boxbody = bodyworks.querySelector(".box-body")
    var gallerycontainer = document.createElement("div");
    gallerycontainer.className = "gallery";
    data.forEach((image)=>{
        let i = document.createElement("div")
        i.className= "gallery-image";
        i.id = image.id;
        let v = document.createElement("img");
        
        let imgurl = $(image.data())[0].imgurl;
        
        v.src = imgurl;
        i.appendChild(v);
        gallerycontainer.appendChild(i);
    })
    boxbody.appendChild(gallerycontainer);
    isGalleryLoaded = true;
    }
    
}
function loadGallery(){

    if(!isGalleryLoaded){

    
    var loadgallerypromise = new Promise((resolve,reject)=>{
        db.collection("MyWorks").get().then((querySnapshot) => {
            resolve( querySnapshot);
            
        })});
    loadgallerypromise.then((r)=>{
        wrapGallery(r);
        gallery = document.querySelectorAll(".gallery-image");
        g = document.querySelector(".gallery");
        console.log(gallery);
        gallery.forEach((b,i)=>{
            
            b.addEventListener("click",()=>{
               
                
                
                g.classList.toggle("active");
                
                var loadinfopromise = new Promise((resolve,reject)=>{
                    db.collection("MyWorks").doc(b.id).get().then((data)=>{
                        resolve(data);
                    })
                })
                loadinfopromise.then((data)=>{
                    toggleInfo(data);
                    info.addEventListener('webkitTransitionEnd',()=>{
                    b.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"});
                    
                })
                })
                
                
            });
        });
        gallerycnt = getGallerycount();
            console.log(gallerycnt);
    
    });
    
    
    }    
}

function toggleInfo(data){
    
        info_header.textContent = $(data.data())[0].title;
        info_body.textContent = $(data.data())[0].description;

        
    
        info.classList.toggle("active");
        info_body.classList.toggle("active");
        info_header.classList.toggle("active");
        

   
    
    
}
function getGallerycount(){
    let x = document.querySelectorAll(".gallery-image").length;
    return x;

}