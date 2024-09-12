var over_lay=document.querySelector(".overlay");
var pop_up=document.querySelector(".popup-box");
var add_popup=document.getElementById("add-popup");

add_popup.addEventListener("click",function(){
    over_lay.style.display="block";
    pop_up.style.display="block";
});
var cancel_btn=document.getElementById("cancel-book");
cancel_btn.addEventListener("click",function(event){
    event.preventDefault();
    over_lay.style.display="none";
    pop_up.style.display="none";

    console.log("Popup and overlay are hidden.");
    
    // Clear all input fields within the popup form
    var inputFields = pop_up.querySelectorAll("input, textarea");
    
    inputFields.forEach(function(input) {
        input.value = ""; 
    });
});

var container=document.querySelector(".container");
var add_book=document.getElementById("add-book");
var book_title=document.getElementById("book-title-input");
var book_author=document.getElementById("book-author-input");
var bookdescription=document.getElementById("book-description-input");
var deletbtn=document.getElementById("btn");

add_book.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${book_title.value}</h2>
    <h5>${book_author.value}</h2>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">DELETE</button>`
    container.append(div);
    over_lay.style.display="none";
    pop_up.style.display="none";
})

function deletebook(event){
    event.target.parentElement.remove();
}

