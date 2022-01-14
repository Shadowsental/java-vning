const groceries = document.getElementsByClassName("groceries")[0];
const itemList = document.getElementById("itemList");
const submitItem = document.getElementById("subbtn");
const userInput = document.getElementById("userInput");


userInput.addEventListener("keydown", function(event) {
    if(event.key == "Enter")
    addItem();
})

submitItem.addEventListener("click", function() {
    addItem();
})

function addItem() {
    const item = document.createElement("h2");
    const dltbtn = document.createElement("button");
    item.innerHTML = "- " + userInput.value
    item.appendChild(dltbtn);
    dltbtn.innerHTML = "Ta bort?";
    dltbtn.style.width = "10%", dltbtn.style.height = "15%";
    dltbtn.style.fontSize = "10px";
    dltbtn.style.backgroundColor = "red"

    item.addEventListener("click", function() {
        if(item.style.backgroundColor != "darkgray") {
            item.style.textDecoration = "line-through"
            item.style.backgroundColor = "darkgray"

        }
        else {
            item.style.textDecoration = "none";
            item.style.backgroundColor = "whitesmoke";
        }
    })

    dltbtn.addEventListener("click", function() {
        item.remove();
    })

    itemList.insertAdjacentElement("beforeend", item)

    userInput.value = ""
}