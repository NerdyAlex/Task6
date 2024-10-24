// // let name1 = window.prompt(`enter your name: `)

// // console.log(`${name1} Welcome to the world`)


// let add = document.getElementById('add');
// let minus = document.getElementById('minus');
// let num = document.getElementById('num');
// let reset = document.getElementById('reset');

// let number = 0

// add.onclick = function(){
//     number++
//     num.textContent = number;

// }

// minus.onclick = function () {
//     number--
//     num.textContent = number;

// }
// reset.addEventListener("click", () => {
//     number = 0
//     num.textContent = number;})


let option = document.querySelector('select')
let box2 = document.getElementById("list-container")
let addbtn = document.getElementById("addbtn")
let amount = document.getElementById("amount")
let date = document.getElementById("date")
let total = document.getElementById("total")
let money = []

addbtn.onclick = function(){
    let info1 = option.value
    let info2 = amount.value
    let info3 = date.value
    // check if all fields are filled before adding to the list
    if(info1, info2, info3 === ""){
        alert("Please fill all fields")
        return  //exit the function if any field is empty
    }

    else{
        let sel_option = document.createElement("div")
        let new_amt = document.createElement("div")
        let new_date = document.createElement("div")
        let delbtn = document.createElement("button")
        let img = document.createElement("img")
        img.src = "trash.png"
        info2 = Number(info2)

   




        sel_option.textContent = info1;
        new_amt.textContent = `$${info2}`;
        new_date.textContent = info3;

        let div = document.createElement('div')
        div.appendChild(sel_option);
        div.appendChild(new_amt);
        div.appendChild(new_date);
        delbtn.appendChild(img);
        div.appendChild(delbtn);
        money.push(info2);
        
        let sum = 0;
        for(let i=0; i < money.length; i++){
            sum += money[i];
            total.textContent = `Total Amount: $${sum}`;
            total.style.display = 'block';
        }
        

        box2.appendChild(div)
        


        

        delbtn.onclick = function () {
            box2.removeChild(div)
            for (let i = 0; i < money.length; i++) {
                let minus = sum - money[i];
                total.textContent = `Total Amount: $${minus}`;
                total.style.display = 'block';
            }
        }
    }
    
}