{
const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

// para el menú
const contenedor = document.querySelectorAll('.conC');
//constantes para el contador
const form = document.querySelector("#form");

// principales funciones
renderTime();
renderTasks();
form.addEventListener('submit', e => {
    e.preventDefault();
    if (itTask.value != '') {
        createTask(itTask.value);
        itTask.value = '';
        renderTasks();
    };
});

//primera función
function createTask(value) {
    // id: (math.random() * 100).toString(36).slice(3),  
    const newTask = {
        id: (Math.random() * 100).toString(36).slice(3),
        title: value,
        completed: false,
    };

    tasks.unshift(newTask);

}

//segunda función; para generar elementos para html las cuales van a mostrar la tarea y avisar si ya terminaste la tarea 

function renderTasks() {
    const html = tasks.map(task => {
        return `
        <div class="task">
            <div class="completed">${task.completed ? `<span class="done">Done</span>` : `<button class="start-button" data-id="${task.id}">Start</button>`}</div>
            <div class="title">${task.title}</div>
        </div>
        `;
    });

    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.innerHTML = html.join("");

    const startButtons = document.querySelectorAll('.task .start-button');
    startButtons.forEach(button => {
        button.addEventListener('click', e => {
            if (!timer) {
                const id = button.getAttribute('data-id');
                startButtonHandler(id);
                button.textContent = 'In progress'
            }
        });
    });
}
// estas dos funciones son para hacer los efectos de alerta a la
// hora de terminar x tarea 
function playi() {
    let audio = new Audio('sonido.mp3');
    audio.play();
}
function playi2() {
    let audi = new Audio('sonido2.mp3');
    audi.play();
}
// tercera funcion para empezar a contar 
function startButtonHandler(id) {
    time = 30 * 60;
    current = id;
    const taskIndex = tasks.findIndex(task => task.id === id);
    taskName.textContent = tasks[taskIndex].title;
    timer = setInterval(() => {
        timerHandler(id);
    }, 1000);
}
// cuarta funcion para la cuenta regresiva
function timerHandler(id) {
    time--;
    renderTime();

    if (time === 0) {
        clearInterval(timer);
        markCompleted(id);
        timer = null;
        renderTasks();
        startBreak();
    }
}
// quinta MUESTRA tiempo de descanso 
function startBreak() {
    time = 10 * 60;
    taskName.textContent = 'Break';
    timerBreak = setInterval(() => {
        timerBreakHandler();
    }, 1000);
    

}
// sexta funcion contador del break timer
function timerBreakHandler() {
    time--;
    renderTime();

    if (time === 0) {
        clearInterval(timerBreak);
        current = null;
        timerBreak = null;
        taskName.textContent = '';
        renderTasks();
        playi2();
    }
}
// septima funcion para calcular el intervalo de tiempo
function renderTime() {
    const timeDiv = document.querySelector('#time #value');
    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);

    timeDiv.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
// octava funcion  marcar completa  la tarea 
function markCompleted(id) {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    tasks[taskIndex].completed = true;
    playi();
} 
}


 
 





// constantes para el cambio del  color del 
// background, bordes y letras.
const toggleb = document.getElementById('color--w');
const greenBk = document.getElementById('color--v');//////////
const blueBk = document.getElementById('color--b');
const pinkBk = document.getElementById('color--p');
//
//
//
const whiteB = document.getElementById('color-w');
const greenB = document.getElementById('color-v');
const blueB = document.getElementById('color-b');
const pinkB = document.getElementById('color-p');



// las constantes de lo que se cambiara 
const Body = document.querySelector('* body');
const App = document.querySelector('#app');
const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const taskName = document.querySelector('#time #taskName');
const contenedorDeTareas = document.querySelector('#tasks');
const valorN = document.querySelector('#value');
const boton = document.querySelector('.minu');
const boton2 = document.querySelector('.minu2');
const start = document.querySelectorAll('.task .start-button');
const ul = document.querySelectorAll('ul');







function blanco(){
            Body.style.background='white';
             Body.style.color='black';
             //        
             App.style.border='3px solid black';
             App.style.background='white';
             App.style.color='black';
             //
             valorN.style.border='3px solid black';      
             valorN.style.background='white';   
             valorN.style.color='black';   
             //
             bAdd.style.border='3px solid black'
             bAdd.style.color='black'
             //  
             itTask.style.border='3px solid black';
             itTask.style.color='black';
             //
             taskName.style.border='3px solid black';
             taskName.style.color='black';
             //
             contenedorDeTareas.style.border='3px solid black';
             contenedorDeTareas.style.color='black';
             //
             boton.style.border='3px solid black';
             boton.style.color='black';
             //
             boton2.style.border='3px solid black';
             boton2.style.color='black';
             //
             start.style.border='3px solid black';
             start.style.color='black';
             //
             ul.style.border='3px solid blac';
             ul.style.color='black';

             style.transition='2s'
}


function negro(){
    Body.style.background='black';
     Body.style.color='white';
     //        
     App.style.border='3px solid white';
     App.style.background='black';
     App.style.color='white';
     //
     valorN.style.border='3px solid white';      
     valorN.style.background='black';   
     valorN.style.color='white';   
     //
     bAdd.style.border='3px solid white'
     bAdd.style.color='white'
     //  
     itTask.style.border='3px solid white';
     itTask.style.color='white';
     //
     taskName.style.border='3px solid white';
     taskName.style.color='white';
     //
     contenedorDeTareas.style.border='3px solid white';
     contenedorDeTareas.style.color='white';
     //
     boton.style.border='3px solid white';
     boton.style.color='white';
     //
     boton2.style.border='3px solid white';
     boton2.style.color='white';
     //
     start.style.border='3px solid white';
     start.style.color='white';
     //
     ul.style.border='3px solid white';
     ul.style.color='white';
}

function azul(){
    Body.style.background='blue';
     Body.style.color='white';
     //        
     App.style.border='3px solid white';
     App.style.background='blue';
     App.style.color='white';
     //
     valorN.style.border='3px solid white';      
     valorN.style.background='blue';   
     valorN.style.color='white';   
     //
     bAdd.style.border='3px solid white'
     bAdd.style.color='white'
     //  
     itTask.style.border='3px solid white';
     itTask.style.color='white';
     //
     taskName.style.border='3px solid white';
     taskName.style.color='white';
     //
     contenedorDeTareas.style.border='3px solid white';
     contenedorDeTareas.style.color='white';
     //
     boton.style.border='3px solid white';
     boton.style.color='white';
     //
     boton2.style.border='3px solid white';
     boton2.style.color='white';
     //
     start.style.border='3px solid white';
     start.style.color='white';
     //
     ul.style.border='3px solid white';
     ul.style.color='white';
}

function rosa(){
    Body.style.background='pink';
     Body.style.color='white';
     //        
     App.style.border='3px solid white';
     App.style.background='pink';
     App.style.color='white';
     //
     valorN.style.border='3px solid white';      
     valorN.style.background='pink';   
     valorN.style.color='white';   
     //
     bAdd.style.border='3px solid white'
     bAdd.style.color='white'
     //  
     itTask.style.border='3px solid white';
     itTask.style.color='white';
     //
     taskName.style.border='3px solid white';
     taskName.style.color='white';
     //
     contenedorDeTareas.style.border='3px solid white';
     contenedorDeTareas.style.color='white';
     //
     boton.style.border='3px solid white';
     boton.style.color='white';
     //
     boton2.style.border='3px solid white';
     boton2.style.color='white';
     //
     start.style.border='3px solid white';
     start.style.color='white';
     //
     ul.style.border='3px solid white';
     ul.style.color='white';
}




























// toggleb.addEventListener('click',  function(){
//     if(this.classList.toggle('white')){
//         //
//         Body.style.background='black';
//         Body.style.color='white';
//         Body.style.transition='2s';
//         //
//         App.style.border='3px solid white';
//         App.style.background='black';
//         App.style.color='white';
//         App.style.transition='2s';
//         //
//         valorN.style.border='3px solid white';  
//         valorN.style.background='black';    
//         valorN.style.color='white';
//         valorN.style.transition='2s';    
//         //
//         bAdd.style.border='3px solid white';
//         bAdd.style.color='white';
//         bAdd.style.transition='2s';
//         //
//         itTask.style.border='3px solid white';
//         itTask.style.color='white';
//         itTask.style.transition='2s';
//         //
//         taskName.style.border='3px solid white';
//         taskName.style.color='white';
//         taskName.style.transition='2s';
//         //
//         contenedorDeTareas.style.border='3px solid white';
//         contenedorDeTareas.style.color='white';
//         contenedorDeTareas.style.transition='2s';
//         //
//         boton.style.border='3px solid white';
//         boton.style.color='white';
//         boton.style.transition='2s';
//         //
//         boton2.style.border='3px solid white';
//         boton2.style.color='white';
//         boton2.style.transition='2s';
//         //
//         start.style.border='3px solid white';
//         start.style.color='white';
//         start.style.transition='2s';
//         // 
//         ul.style.border='3px solid white';
//         ul.style.color='white';
//         ul.style.transition='2s';
//         //
// }else{
//         Body.style.background='white';
//         Body.style.color='black';
//         //        
//         App.style.border='3px solid black';
//         App.style.background='white';
//         App.style.color='black';
//         //
//         valorN.style.border='3px solid black';      
//         valorN.style.background='white';   
//         valorN.style.color='black';   
//         //
//         bAdd.style.border='3px solid black'
//         bAdd.style.color='black'
//         //  
//         itTask.style.border='3px solid black';
//         itTask.style.color='black';
//         //
//         taskName.style.border='3px solid black';
//         taskName.style.color='black';
//         //
//         contenedorDeTareas.style.border='3px solid black';
//         contenedorDeTareas.style.color='black';
//         //
//         boton.style.border='3px solid black';
//         boton.style.color='black';
//         //
//         boton2.style.border='3px solid black';
//         boton2.style.color='black';
//         //
//         start.style.border='3px solid black';
//         start.style.color='black';
//         //
//         ul.style.border='3px solid blac';
//         ul.style.color='black';
//         //
//     }
// });




// greenBk.addEventListener('click',  function(){
//     if(this.idList.toggle('verde')){
//                 //
//                 Body.style.background='green';
//                 Body.style.color='white';
//                 Body.style.transition='2s';
//                 //
//                 App.style.border='3px solid white';
//                 App.style.background='green';
//                 App.style.color='white';
//                 App.style.transition='2s'
//                 //
//                 valorN.style.border='3px solid white';  
//                 valorN.style.background='green';    
//                 valorN.style.color='white';
//                 valorN.style.transition='2s';    
//                 //
//                 bAdd.style.border='3px solid white';
//                 bAdd.style.color='white';
//                 bAdd.style.transition='2s';
//                 //
//                 itTask.style.border='3px solid white';
//                 itTask.style.color='white';
//                 itTask.style.transition='2s';
//                 //
//                 taskName.style.border='3px solid white';
//                 taskName.style.color='white';
//                 taskName.style.transition='2s';
//                 //
//                 contenedorDeTareas.style.border='3px solid white';
//                 contenedorDeTareas.style.color='white';
//                 contenedorDeTareas.style.transition='2s';
//                 //
//                 boton.style.border='3px solid white';
//                 boton.style.color='white';
//                 boton.style.transition='2s';
//                 //
//                 boton2.style.border='3px solid white';
//                 boton2.style.color='white';
//                 boton2.style.transition='2s';
//                 //
//                 start.style.border='3px solid black';
//                 start.style.color='white';
//                 start.style.transition='2s';
//                 // 
//            }else{
//                 Body.style.background='white';
//                 Body.style.color='black';
//                 //        
//                 App.style.border='3px solid black';
//                 App.style.background='white';
//                 App.style.color='black';
//                 //
//                 valorN.style.border='3px solid black';      
//                 valorN.style.background='white';   
//                 valorN.style.color='black';   
//                 //
//                 bAdd.style.border='3px solid black'
//                 bAdd.style.color='black'
//                 //  
//                 itTask.style.border='3px solid black';
//                 itTask.style.color='black';
//                 //
//                 taskName.style.border='3px solid black';
//                 taskName.style.color='black';
//                 //
//                 contenedorDeTareas.style.border='3px solid black';
//                 contenedorDeTareas.style.color='black';
//                 //
//                 boton.style.border='3px solid black';
//                 boton.style.color='black';
//                 //
//                 boton2.style.border='3px solid black';
//                 boton2.style.color='black';
//                 //
//                 start.style.border='3px solid black';
//                 start.style.color='black';
//     }
// });
 









































/*
 Body.style.background='black';
    Body.style.color='white';
    Body.style.transition='2s';
//
    App.style.border='3px solid white';
    App.style.background='black';
    App.style.color='white';
    App.style.transition='2s'
//
    valorN.style.border='3px solid white';  
    valorN.style.background='black';    
    valorN.style.color='white';
    valorN.style.transition='2s';    
//
    bAdd.style.border='3px solid white';
    bAdd.style.color='white';
    bAdd.style.transition='2s';
//
    itTask.style.border='3px solid white';
    itTask.style.color='white';
    itTask.style.transition='2s';
//
    taskName.style.border='3px solid white';
    taskName.style.color='white';
    taskName.style.transition='2s';
//
    contenedorDeTareas.style.border='3px solid white';
    contenedorDeTareas.style.color='white';
    contenedorDeTareas.style.transition='2s';
//
    boton.style.border='3px solid white';
    boton.style.color='white';
    boton.style.transition='2s';
//
    boton2.style.border='3px solid white';
    boton2.style.color='white';
    boton2.style.transition='2s';
//
    start.style.border='3px solid white';/////
    start.style.color='white';
    start.style.transition='2s';
// 
}else{
    Body.style.background='white';
    Body.style.color='black';
//        
    App.style.border='3px solid black';
    App.style.background='white';
    App.style.color='black';
//
    valorN.style.border='3px solid black';      
    valorN.style.background='white';   
    valorN.style.color='black';   
//
    bAdd.style.border='3px solid black'
    bAdd.style.color='black'
//  
    itTask.style.border='3px solid black';
    itTask.style.color='black';
//
    taskName.style.border='3px solid black';
    taskName.style.color='black';
//
    contenedorDeTareas.style.border='3px solid black';
    contenedorDeTareas.style.color='black';
//
    boton.style.border='3px solid black';
    boton.style.color='black';
//
    boton2.style.border='3px solid black';
    boton2.style.color='black';
//
    start.style.border='3px solid black';
    start.style.color='black'; */