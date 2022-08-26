const plus = document.getElementById('plus');
let list = document.querySelector('#list');
const colorList = ['crimson', 'darkcyan', 'powderblue', 'seagreen', 'tan', 'lightcoral'];
let items = document.querySelectorAll('.items');
let moins = document.querySelectorAll('.moins');
// let myTask =
// `<div class="items">
//     <div class="head">
//         <div class="cross" id="moins">
//         <div class="line"></div>
//         <div class="line"></div>
//     </div>
//     </div>
//         <div class="task">
//         <h3>${textToAdd.value}</h3>
//     </div>
// </div>`;

function addTask(){
    let textToAdd = document.getElementById('add').value;
    let rdmColor = colorList[Math.floor(Math.random()*colorList.length)];
    list.innerHTML += 
    `<div class="items" style="background: ${rdmColor}">
        <div class="head">
            <div class="cross moins">
            <div class="line"></div>
            <div class="line"></div>
        </div>
        </div>
            <div class="task">
            <h3>${textToAdd}</h3>
        </div>
    </div>`;
}

plus.addEventListener("click", addTask)
window.addEventListener("keydown", e => {
    if (e.code == "Enter" || e.code == 'NumpadEnter'){
        addTask()
    }
})

// if (items != 'undefined){
//     // console.log('ouai')
//     // moins.addEventListener('click', e => {
//     //     console.log(items)
//     // })
//     items.forEach(element => {
//         console.log(element)
//     });
// }
// addTask()
// console.log(items)

moins.addEventListener('click', function() {
    console.log('bien jouer')
})