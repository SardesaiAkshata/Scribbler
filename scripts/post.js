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




// like functionality

var count = 1;

function like(){
    let text = document.querySelector('.like');
    text.textContent = `${count} person like this`;
    count++;
}


//comment functionality

function comment(){
    let data = document.querySelector('.cmtbox').value;
    let list = document.querySelector('.ol');
    let item = document.createElement('li');
    let text = document.createElement('p');
    
    text.textContent = data;
    item.append(text);
    list.append(item);
    document.querySelector('.cmtbox').value = "";
}


// Edit functionality
    var edit = true;
    var editlogo = document.createElement('i');
    var editbtn =  document.querySelector('.editbutton');
    editbtn.append(editlogo);
    editlogo.classList.add("fa-solid");
    editlogo.classList.add("fa-pen-to-square");
   

function editb(){
    var head = document.querySelector('.head');
    var para = document.querySelector('.paragraph');
    console.log("hi");


    if(edit){
     
    
    head.style.border = "3px solid pink";
    para.style.border = "3px solid pink";
    
    document.querySelector('.head').setAttribute("contenteditable", "true"); 
    para.setAttribute("contenteditable","true");
    edit = false;
    document.querySelector('.editbutton').textContent = "Save";
    
    
    editbtn.append(editlogo);
    
    editlogo.classList.remove("fa-solid");
    editlogo.classList.remove("fa-pen-to-square");
    editlogo.classList.add("fa-solid");
    editlogo.classList.add("fa-floppy-disk");
   
    console.log("im working");
    
    }
    else{
    
    
        console.log("im in else")
        head.setAttribute("contenteditable","false");
        edit = true;
        document.querySelector('.editbutton').textContent = "Edit";  
        editlogo.classList.remove("fa-solid");
        editlogo.classList.remove("fa-floppy-disk");
        editbtn.append(editlogo);   
        editlogo.classList.add("fa-solid");
        editlogo.classList.add("fa-pen-to-square");
        head.style.border = "none";
        para.style.border = "none";
    
    }
}
