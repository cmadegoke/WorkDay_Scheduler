var timeBlock = document.querySelector('.time-block');

var saveBtn = document.querySelector('.saveBtn');

var textArea= document.querySelector('.textarea');







function storedata(key, data){
    localStorage.setItem (key,data);
}



function saveBtnHandler(){
    console.log ('save button pressed');

}

saveBtn.addEventListener('click', function(event) {
    event.preventDefault();  
    const data = event.target.previousElementSibling.children[0].value
    const time = event.target.previousElementSibling.previousElementSibling.children[0].innerHTML
    storedata(time, data)
    // console.log(event, data)
});

document.getElementById("12am").value = localStorage.getItem("12am")
