var timeBlock = document.querySelector('.time-block');
var saveBtn = document.querySelector('.saveBtn');
var textArea= document.querySelector('.textarea');


function storedata(key, data){
    localStorage.setItem (key, data);
};

function saveBtnHandler(){
    console.log ('save button pressed');

}

saveBtn.addEventListener('click', function(event) {
    event.preventDefault();  
    // var data = event.target.previousElementSibling.children[0].value

    // var data = event.target.previousElementSibling.children[1].value
    // var time = event.target.previousElementSibling.previousElementSibling.children[0].innerHTML
    // var time = event.target.previousElementSibling.previousElementSibling.children[1].innerHTML
    // storedata(time, data)
    console.log(event)
});

document.getElementById("9am").value = localStorage.getItem("9am");
document.getElementById("10am").value = localStorage.getItem("10am");
document.getElementById("11am").value = localStorage.getItem("11am");
document.getElementById("12pm").value = localStorage.getItem("12pm");
document.getElementById("1pm").value = localStorage.getItem("1pm");
document.getElementById("2pm").value = localStorage.getItem("2pm");
document.getElementById("3pm").value = localStorage.getItem("3pm");
document.getElementById("4pm").value = localStorage.getItem("4pm");
document.getElementById("5pm").value = localStorage.getItem("5pm");
