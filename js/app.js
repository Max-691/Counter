let body = document.getElementById('body');
let getmain = document.getElementById('main');

let addbutton = document.getElementById('add_button');
let removebutton = document.getElementById('remove_button');
let resetbutton = document.getElementById('reset_button');
let counter = document.getElementById('counter');

let counter_display = counter.innerHTML;


    //Add1 to counter
addbutton.addEventListener('click', function(){
    counter_display++;
    counter.innerHTML = counter_display;
})

    //Remove 1 to counter
removebutton.addEventListener('click', function(){
    counter_display--;
    counter.innerHTML = counter_display;
})

    //Reset counter
resetbutton.addEventListener('click', function(){
    counter_display = 0;
    counter.innerHTML = counter_display;
})