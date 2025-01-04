let b = 0;
let move=() => {
    b++;
    b2.style.position="absolute";
    if(b==1){
        b2.style.top="5%";
        b2.style.right="5%";
    } else if(b==2){
        b2.style.top="10%";
        b2.style.right="50%";
    }
    else if(b==3){
        b2.style.top="80%";
        b2.style.right="70%";
    }
     else if(b==4){
        b2.style.top="85%";
        b2.style.right="10%";
    }
     else if(b==5){
        b2.style.top="50%";
        b2.style.right="80%";
    }
     else if(b==6){
        b2.style.top="5%";
        b2.style.right="20%";
    }
     else {
        b2.style.top="85%";
        b2.style.right="15%";
        b = 0;
    }
}

let yes = () => {
    win.innerHTML = `<h1>I knew it ;)<h1>`
    win.style.height = "80px"
}