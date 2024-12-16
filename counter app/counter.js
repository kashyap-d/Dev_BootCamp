let count=0,checker=0;
let numb_thing = document.getElementById("numb");
let saveEl=document.getElementById("save-el");

function inc(){
    count+=1;
    console.log(count);
    console.log('clicked');
    numb_thing.textContent = count;
}
function reset(){
    count=0;
    console.log(count);
    numb_thing.textContent = count;
    console.log('reset');
}

function save(){
    if(checker==0){
        saveEl.textContent+=`${count}`;
    }
    else{
        saveEl.textContent+=` - ${count}`;
    }
    checker++;
    console.log(saveEl.textContent);
    reset();
}