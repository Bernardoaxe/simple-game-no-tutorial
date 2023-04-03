let door1 = document.getElementById('d-1');
let door2 = document.getElementById('d-2');
let door3 = document.getElementById('d-3');
let p = document.getElementById('h1-tag');

function randomNumber () {
 let x = Math.floor(Math.random() * 3) + 1;
 return x;
}
x = randomNumber();

function choice1() {
if (x == 1) {
    door1.style.backgroundColor = "green" ;
    door2.style.backgroundColor = "red" ;
    door3.style.backgroundColor = "red" ;
    p.innerHTML = "Congratiulations you got it right";
    
}else if (x == 2){
    door1.style.backgroundColor = "red"
    door2.style.backgroundColor = "green"
    door3.style.backgroundColor = "red"
    p.innerHTML = 'Wrong!';
}else {
    door1.style.backgroundColor = "red"
    door2.style.backgroundColor = "red"
    door3.style.backgroundColor = "green"
    p.innerHTML = 'Wrong!';
} 
}

function choice2() {
    if (x == 1) {
        door1.style.backgroundColor = "green"
        door2.style.backgroundColor = "red"
        door3.style.backgroundColor = "red"
        p.innerHTML = 'Wrong!';
    }else if (x == 2){
        door1.style.backgroundColor = "red"
        door2.style.backgroundColor = "green"
        door3.style.backgroundColor = "red"
        p.innerHTML = "Congratiulations you got it right";
    }else {
        door1.style.backgroundColor = "red"
        door2.style.backgroundColor = "red"
        door3.style.backgroundColor = "green"
        p.innerHTML = 'Wrong!';
    } 
    }

    function choice3() {
        if (x == 1) {
            door1.style.backgroundColor = "green"
            door2.style.backgroundColor = "red"
            door3.style.backgroundColor = "red"
            p.innerHTML = 'Wrong!';
        }else if (x == 2){
            door1.style.backgroundColor = "red"
            door2.style.backgroundColor = "green"
            door3.style.backgroundColor = "red"
            p.innerHTML = 'Wrong!';
        }else {
            door1.style.backgroundColor = "red"
            door2.style.backgroundColor = "red"
            door3.style.backgroundColor = "green"
            p.innerHTML = "Congratiulations you got it right";
        } 
        }

function reload() {
    window.location.reload();
}




