const createbtn = document.querySelector('.btn');
const notescontainer = document.querySelector(".notes-container");
const notes = document.querySelectorAll(".input-box");


createbtn.addEventListener("click",()=>{
    const inputbox = document.createElement("p");
    const img = document.createElement("img");
    inputbox.classList.add("input-box");
    inputbox.setAttribute("contenteditable","true");
    img.src ="delete.png";
    // img.classList.add("dltbtn");
    notescontainer.appendChild(inputbox).appendChild(img); 
     
});

notescontainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "IMG")
    {
        e.target.parentElement.remove()
    }
})

