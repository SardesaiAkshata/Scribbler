
//  sign up event
function showsignup(){
    document.querySelector('.sign-up-form').style.top = "50%";
    document.querySelector('.sign-in-form').style.top = "-50%";
    document.querySelector('.overlay').style.opacity = "1";
    document.querySelector('.overlay').style.zIndex = "1";

}

function closesignup(){
    document.querySelector('.sign-up-form').style.top = "-50%";
    document.querySelector('.overlay').style.opacity = "0";
    document.querySelector('.overlay').style.zIndex = "-1";
}

// sign in event
function showsignin(){
    document.querySelector('.sign-up-form').style.top = "-50%";
    document.querySelector('.sign-in-form').style.top = "50%";
    document.querySelector('.overlay').style.opacity = "1";
    document.querySelector('.overlay').style.zIndex = "1";

}

function closesignin(){
    document.querySelector('.sign-in-form').style.top = "-50%";
    document.querySelector('.overlay').style.opacity = "0";
    document.querySelector('.overlay').style.zIndex = "-1";
}

// sign up hyperlink event

var hyper = document.querySelector('.hyper');
hyper.addEventListener('click',hyperl);

function hyperl(){
    document.querySelector('.sign-up-form').style.top = "50%";
    document.querySelector('.sign-in-form').style.top = "-50%";
    document.querySelector('.overlay').style.opacity = "1";
    document.querySelector('.overlay').style.zIndex = "1";
}

// delete funtionality

var item1 = document.querySelector('.item-a');
var item2 = document.querySelector('.item-b');
var item3 = document.querySelector('.item-c');
var item4 = document.querySelector('.item-d');
var item5 = document.querySelector('.item-e');


function delpost1(){
    document.querySelector('.delete-post').style.top= "50%";
    item1.classList.add('remove');
    document.querySelector('.overlay').style.opacity = "1";
    document.querySelector('.overlay').style.zIndex = "1";

}

function delpost2(){
    document.querySelector('.delete-post').style.top= "50%";
    item2.classList.add('remove');
    document.querySelector('.overlay').style.opacity = "1";
    document.querySelector('.overlay').style.zIndex = "1";

}

function delpost3(){
    document.querySelector('.delete-post').style.top= "50%";
    item3.classList.add('remove');
    document.querySelector('.overlay').style.opacity = "1";
    document.querySelector('.overlay').style.zIndex = "1";

}
function delpost4(){
    document.querySelector('.delete-post').style.top= "50%";
    item4.classList.add('remove');
    document.querySelector('.overlay').style.opacity = "1";
    document.querySelector('.overlay').style.zIndex = "1";

}
function delpost5(){
    document.querySelector('.delete-post').style.top= "50%";
    item5.classList.add('remove');
    document.querySelector('.overlay').style.opacity = "1";
    document.querySelector('.overlay').style.zIndex = "1";

}

// delete modal functionality

// for no

function closedelpost(){
    document.querySelector('.delete-post').style.top = "-100%";
    item1.classList.remove('remove');
    item2.classList.remove('remove');
    item3.classList.remove('remove');
    item4.classList.remove('remove');
    item5.classList.remove('remove');
    document.querySelector('.overlay').style.opacity = "0";
    document.querySelector('.overlay').style.zIndex = "-1";
}

// for yes

function confirmdel(){
    document.querySelector('.remove').remove();
    document.querySelector('.delete-post').style.top = "-100%";
    document.querySelector('.overlay').style.opacity = "0";
    document.querySelector('.overlay').style.zIndex = "-1";
    lastChildLayout()
}

// Layout managmenet
var lastEl = true;
function lastChildLayout(){

var lastitem = document.querySelector('.list-items').lastElementChild;

if(lastEl){
   lastEl = false;
   lastitem.classList.remove('last');
}

else{
   lastitem.classList.add('last');
   lastEl = true;
}

}
