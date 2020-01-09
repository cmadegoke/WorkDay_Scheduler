var timeBlock = document.querySelector('.time-block');
var saveBtn = document.querySelectorAll('.saveBtn');
var textArea= document.querySelector('.textarea');
var current_Day= document.querySelector ('#currentDay');
var current_Hour =document.querySelector('.present');


  console.log (moment());

 current_Day.innerHTML= moment().format('MMMM Do YYYY, h:mm:ss a'); 


function storedata(key, data){
    localStorage.setItem (key, data);
};

function saveBtnHandler(){
    console.log ('save button pressed');

}

saveBtn.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();  
        var data = event.target.previousElementSibling.children[0].value
        var time = event.target.previousElementSibling.previousElementSibling.children[0].innerHTML
        storedata(time, data)
    });
})

const test = document.getElementsByClassName('row')

const currentHour = moment().format('h-a')
let flag = false
Array.from(test).forEach(i => {
    if (!flag) {
        // add className past to the i element
        i.className += ' past'
        if (i.id === currentHour) {
            i.className += ' present'
            // add className present to the i element
            flag = true;
            // set flag to true
        }
    } else {
        // add className future to the i element
        i.className += ' future'
    }
    console.log(i)
})


document.getElementById("9am").value = localStorage.getItem("9am");
document.getElementById("10am").value = localStorage.getItem("10am");
document.getElementById("11am").value = localStorage.getItem("11am");
document.getElementById("12pm").value = localStorage.getItem("12pm");
document.getElementById("1pm").value = localStorage.getItem("1pm");
document.getElementById("2pm").value = localStorage.getItem("2pm");
document.getElementById("3pm").value = localStorage.getItem("3pm");
document.getElementById("4pm").value = localStorage.getItem("4pm");
document.getElementById("5pm").value = localStorage.getItem("5pm");
