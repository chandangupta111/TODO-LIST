const workinfo = document.querySelector(".todo")
const textinput = document.querySelector("#item2>input")
const newadded = document.querySelector(".container1")

workinfo.addEventListener("submit", (e) => {
    e.preventDefault();
    const spanvalue = textinput.value;
    const newlist = document.createElement("ul");

    const newlistinnerHTML =
        `<li class="list">
            <span>${spanvalue}</span >
                <div class="button">

                    <button type="submit" class="btn1">Done</button>
                    <button type="submit" class="btn2">Remove</button>
                </div>
                </li>`;

    newlist.innerHTML = newlistinnerHTML;
    newadded.append(newlist)
    textinput.value = "";

 });
 newadded.addEventListener("click",(e)=>{
    //  console.log(e.target);
    if(e.target.classList.contains("btn1")){
        // console.log("you want to tick")
        const lispan=e.target.parentNode.previousElementSibling;
        // console.log(lispan)
        lispan.style.textDecoration="line-through";
        
    }
        if(e.target.classList.contains("btn2")){
            // console.log("you want to remove")
            const targetelement=e.target.parentNode.parentNode.parentNode;
            targetelement.remove();
        }

 })
 
 