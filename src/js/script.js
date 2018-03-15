
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {

  if (event.target.tagName.checked===false) {
    event.target.nextSibling.classList.remove('checked');
  }else{
    event.target.nextSibling.classList.toggle('checked');
  }
}, false);

function catShow() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// function category(){
//     var list1 = document.getElementById("list").firstChild;
//     document.getElementById("myDropdown").addEventListener("click", function( event ) {
//       if(event.target.id === 'home'){
//       list1.classList.toggle('home');
//     }else if (event.target.id === 'work') {
//       list1.classList.toggle('work');
//     }
//     console.log(list1);
//     },false);
// }

function checkbox() {
    var box1 = document.getElementById("red");
    var box2 = document.getElementById("yellow");
    var box3 = document.getElementById("green");
    var listitem = document.getElementById("list").firstChild;
    if (box1.checked){
      listitem.classList.toggle('red');
    }else if (box2.checked){
      listitem.classList.toggle('yellow');
    }else if (box3.checked){
      listitem.classList.toggle('green');
    }
}

function removeItem(){
    var item = this.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}

function editItem(){
    var edit = this.parentNode.firstChild.nextSibling;

    if (edit.contentEditable == "true") {
        edit.contentEditable = "false";
    } else {
        edit.contentEditable = "true";
    }
}

function addFunction() {
    var li = document.createElement("li");
    var p = document.createElement("p");
    var input = document.getElementById("todo").value;
    var t = document.createTextNode(input);
    var list = document.getElementById("list");

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "done"

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    var editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = "edit";

    if (input === '') {
      alert("Can't add nothing!");
    } else {

      p.className = "item";
      p.appendChild(t);
      list.insertBefore(li, list.childNodes[0]);
      li.appendChild(checkBox);
      li.appendChild(p);
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      checkbox();
    }

    deleteButton.addEventListener('click', removeItem);
    editButton.addEventListener('click', editItem);
}

function clearField(){
  document.getElementById("todo").value = "";
}