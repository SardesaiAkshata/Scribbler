// sign up event

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

// create post event
function showcreatepost(){
    document.querySelector('.create-post-form').style.top = "50%";
    document.querySelector('.overlay').style.opacity = "1";
    document.querySelector('.overlay').style.zIndex = "1";

}

function closecreatepost(){
    document.querySelector('.create-post-form').style.top = "-50%";
    document.querySelector('.overlay').style.opacity = "0";
    document.querySelector('.overlay').style.zIndex = "-1";
}