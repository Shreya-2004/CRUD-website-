let addBtn = document.getElementById('add_btn')
addBtn.addEventListener('click', addChapter)
let parentList = document.getElementById('parentList')
function addChapter(e) {
    if (parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove()
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling
    let currentChapterName = currentInput.value


    let newLi = document.createElement('li')
    //newLi.classList.add('list-group-item')
    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.innerHTML = ` <h3 class="flex-grow-1">${currentChapterName}</h3> 
        <button class="btn btn-warning mx-3" onclick="editChapter(this)">Edit</button>
        <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`
    parentList.appendChild(newLi)

}
function removeChapter(currelement) {
    currelement.textContent = "Done"
    currelement.parentElement.remove()
    let parentList = document.getElementById('parentList')
    if (parentList.children.length <= 0) {
        let newEmptyMsg = document.createElement("h3")
        newEmptyMsg.classList.add("emptyMsg")
        newEmptyMsg.textContent = "Nothing is here. Please Add new Chapter!!"
        parentList.appendChild(newEmptyMsg)
    }

}
function editChapter(curreElement) {
    if (curreElement.textContent == "Done") {
        curreElement.textContent = "Edit"
        let currentChapterName = curreElement.previousElementSibling.value
        let curreHeading = document.createElement('h3')
        curreHeading.className = "flex-grow-1"
        curreHeading.textContent = currentChapterName
        curreElement.parentElement.replaceChild(curreHeading, curreElement.previousElementSibling)
    } else {
        curreElement.textContent = "Done"
        let currentChapterName = curreElement.previousElementSibling.textContent
        let curreInput = document.createElement('input')
        curreInput.type = "text"
        curreInput.placeholder = "Chapter Name"
        curreInput.className = "form-control"
        curreInput.value = currentChapterName

        curreElement.parentElement.replaceChild(curreInput, curreElement.previousElementSibling)
    }

}
