//put shadows on the title text and the listed items container | lines 2-27
let getTitleText = document.getElementsByClassName("title-text")[0];
let getItemsListContainer = document.getElementsByClassName("item-list-container")[0];
let renderShadow = function(numLayers) {
    let rule = "";
    for (let i = 1; i <= numLayers; i++) {
        if (i == numLayers) {
            rule += `${i}px ${i}px #4e6e58`;
            break;
        }
        rule += `${i}px ${i}px #4e6e58, `;
    }
    getTitleText.style.textShadow = rule;
}
renderShadow(10);
let renderShadowList = function(numLayers) {
    let rule = "";
    for (let i = 1; i <= numLayers; i++) {
        if (i == numLayers) {
            rule += `${i}px ${i}px #4c8577`;
            break;
        }
        rule += `${i}px ${i}px #4c8577, `;
    }
    getItemsListContainer.style.boxShadow = rule;
}
renderShadowList(10);

//creates animated effect on input placeholder text | lines 30-42
let getInputItems = document.getElementsByClassName("input-items")[0];
let getEnterItemLabel = document.getElementsByClassName("enter-item-label")[0];
document.addEventListener("click", function() {
    if (document.activeElement == getInputItems) {
        getEnterItemLabel.style.left = "0px";
        getEnterItemLabel.style.top = "0px";
        getEnterItemLabel.style.fontSize = ".75em";
    } else {
        getEnterItemLabel.style.left = "10px";
        getEnterItemLabel.style.top = "35px";
        getEnterItemLabel.style.fontSize = "1em";
    }
});

//adds item to list when add button is clicked 
//and removes them when remove button is clicked| lines 46-91
let getAddButton = document.getElementsByClassName("add-button")[0];
let getItemListContainer = document.getElementsByClassName("item-list-container")[0];
let getAllItemContainers = document.getElementsByClassName("item-container");
let getAllRemoveButtons = document.getElementsByClassName("remove-button");
let addItemToList = function(evt) {
    evt.preventDefault();
    if (getInputItems.value == "") {
        return;
    }
    let itemContainerNode = document.createElement("label");
    itemContainerNode.className = "item-container";
    let itemNode = document.createElement("span");
    itemNode.className = "item";
    let itemTextNode = document.createTextNode(getInputItems.value);
    let semanticCheckbox = document.createElement("input");
    semanticCheckbox.type = "checkbox";
    semanticCheckbox.className = "semantic-checkbox";
    let checkbox = document.createElement("span");
    checkbox.className = "checkbox";
    let removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    let removeButtonTextNode = document.createTextNode("remove");
    itemNode.appendChild(itemTextNode);
    removeButton.appendChild(removeButtonTextNode);
    itemContainerNode.appendChild(semanticCheckbox);
    itemContainerNode.appendChild(itemNode);
    itemContainerNode.appendChild(checkbox);
    itemContainerNode.appendChild(removeButton);
    getItemsListContainer.appendChild(itemContainerNode);
    getInputItems.value = "";
    let getGeneratedRemoveButtons = document.getElementsByClassName("remove-button");
    for (let i = 0; i < getGeneratedRemoveButtons.length; i++) {
        getGeneratedRemoveButtons[i].addEventListener("click", function() {
            let getParent = this.parentElement;
            getParent.remove();
        })
    }
}
getAddButton.addEventListener("click", addItemToList);
for (let i = 0; i < getAllRemoveButtons.length; i++) {
    getAllRemoveButtons[i].addEventListener("click", function() {
        let getParent = this.parentElement;
        getParent.remove();
    })
}