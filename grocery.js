const searchBox = document.getElementById('search-box'); 
const listItems = document.getElementById('list-items');
const Notify = document.getElementById('notify');
// creating a function AddItem
function addItem(){
    if(searchBox.value === ''){
         document.getElementById("search-box").style.borderBlockColor = "red";
         Notify.textContent = 'Not a valid entry';
         document.getElementById("notify").style.Color = "red";
        
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = searchBox.value;
        listItems.appendChild(li);

        // we will create a cross that will allow us the remove the item once completed
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // we will clear the search box after the item is added
    searchBox.value = '';
    // calling the saveInfo function created below
    saveInfo();
}

/* adding an event listener for crossing and deleting 
if user clicks on the list items "LI", the item will
be crossed.

if user clicks on the span element or the cross sign
it will delete the item from the screen
*/
listItems.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed");
        saveInfo();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveInfo();
    }
}, false);
/*creating a function saveInfo to allow us to save 
info into the browser when we refresh it so we 
don't loose track of groceries already purchased
*/
function saveInfo(){
    localStorage.setItem("info", listItems.innerHTML);
}
/* creating a function to display our previous info
whenever we close and re-open the browser
*/
function displayInfo(){
    listItems.innerHTML = localStorage.getItem("info");
}
// calling the displayInfo created above
displayInfo(); 