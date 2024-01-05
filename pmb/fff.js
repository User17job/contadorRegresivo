
// constantes para el cambio del  color del 
// background, bordes y letras.
const whiteBk = document.getElementById('color--w');
const blackBk = document.getElementById("color--B");//////////
const blueBk = document.getElementById('color--b');
const pinkBk = document.getElementById('color--p');
//
//
//
const whiteB = document.getElementById('color-w');
const greenB = document.getElementById('color-v');
const blueB = document.getElementById('color-b');
const pinkB = document.getElementById('color-p');



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
            <div class="completed">${task.completed ? `<span id="don" class="done">Done</span>` : `<button id="stt" class="start-button" data-id="${task.id}">Start</button>`}</div>
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
    time = 25 * 60;
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
    time = 5 * 60;
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

function blanco(){
    var Body = document.querySelector('body');//
    Body.style.background='white';
    Body.style.color='black';

    var app =  document.querySelector('#app');//
    app.style.border= '3px solid black';
    app.style.color= 'black';

    var bAdd =document.querySelector("#bAdd");//
    bAdd.style.border='3px solid black';
    bAdd.style.color='black';

    var itTask = document.querySelector("#itTask");//
    itTask.style.border=' 3px solid black';
    itTask.style.color='black';

    var taskName = document.querySelector('#taskName'); //
    taskName.style.border='3px solid black'; 
    taskName.style.color=' black';

    var contenedorDeTareas = document.querySelector("#tasks");
    contenedorDeTareas.style.border='3px solid black'; // 
    contenedorDeTareas.style.color='black'; 

    var valorN = document.querySelector('#value');//
    valorN.style.color='black';
    valorN.style.border=' 3px solid black';

    var botons = document.getElementById('minu1');//
    botons.style.border='3px solid black';
    botons.style.color='black';

    var boton = document.getElementById('minu2');//
    boton.style.border  ='3px solid black';
    boton.style.color ='black';

    var lista = document.getElementById('color-w');//
    lista.style.color = 'white';
    var lista = document.getElementById('color-B');//
    lista.style.color = 'white';
    var lista = document.getElementById('color-b');//
    lista.style.color = 'white';
    var lista = document.getElementById('color-p');//
    lista.style.color = 'white';

    var lista = document.getElementById('color--w');//
    lista.style.color = 'white';
    var lista = document.getElementById('color--B');//
    lista.style.color = 'white';
    var lista = document.getElementById('color--b');//
    lista.style.color = 'white';
    var lista = document.getElementById('color--p');//
    lista.style.color = 'white';

    var start = document.querySelector('#stt');
    start.style.border='3px solid black';
    start.style.color='black';
    start.style.boxShadow='none';
}
function negro(){
    var Body = document.querySelector('body');//
     Body.style.background='black';
     Body.style.color='white';

    var app =  document.querySelector('#app');//
     app.style.border= '3px solid white';
     app.style.color= 'white';

    var bAdd =document.querySelector("#bAdd");//
     bAdd.style.border='3px solid white';
     bAdd.style.color='white';

    var itTask = document.querySelector("#itTask");//
     itTask.style.border=' 3px solid white';
     itTask.style.color='white';

    var taskName = document.querySelector('#taskName'); //
     taskName.style.border='3px solid white'; 
     taskName.style.color=' white';

    var contenedorDeTareas = document.querySelector("#tasks");
     contenedorDeTareas.style.border='3px solid white'; // 
     contenedorDeTareas.style.color='white'; 

    var valorN = document.querySelector('#value');//
     valorN.style.color='white';
     valorN.style.border=' 3px solid white';

    var botons = document.getElementById('minu1');//
     botons.style.border='3px solid white';
     botons.style.color='white';

    var boton = document.getElementById('minu2');//
     boton.style.border  ='3px solid white';
     boton.style.color ='white';

    var lista = document.getElementById('color-w');//
     lista.style.color = 'white';
    var lista = document.getElementById('color-B');//
     lista.style.color = 'white';
    var lista = document.getElementById('color-b');//
     lista.style.color = 'white';
    var lista = document.getElementById('color-p');//
     lista.style.color = 'white';

    var lista = document.getElementById('color--w');//
     lista.style.color = 'white';
    var lista = document.getElementById('color--B');//
     lista.style.color = 'white';
    var lista = document.getElementById('color--b');//
     lista.style.color = 'white';
    var lista = document.getElementById('color--p');//
     lista.style.color = 'white';

     
    var start = document.querySelector('#stt');
    start.style.border='3px solid white';
    start.style.color='white';
    start.style.boxShadow='none';
}
function azul(){
    var Body = document.querySelector('body');//
    Body.style.background='blue';
    Body.style.color='green';

    var app =  document.querySelector('#app');//
    app.style.border= '3px solid green';
    app.style.color= 'green';

    var bAdd =document.querySelector("#bAdd");//
    bAdd.style.border='3px solid green';
    bAdd.style.color='green';

    var itTask = document.querySelector("#itTask");//
    itTask.style.border=' 3px solid green';
    itTask.style.color='green';

    var taskName = document.querySelector('#taskName'); //
    taskName.style.border='3px solid green'; 
    taskName.style.color='green';

    var contenedorDeTareas = document.querySelector("#tasks");
    contenedorDeTareas.style.border='3px solid green'; // 
    contenedorDeTareas.style.color='green'; 

    var valorN = document.querySelector('#value');//
    valorN.style.color='green';
    valorN.style.border=' 3px solid green';

    var botons = document.getElementById('minu1');//
    botons.style.border='3px solid green';
    botons.style.color='green';

    var boton = document.getElementById('minu2');//
    boton.style.border  ='3px solid green';
    boton.style.color ='green';

    var lista = document.getElementById('color-w');//
    lista.style.color = 'green';
    var lista = document.getElementById('color-B');//
    lista.style.color = 'green';
    var lista = document.getElementById('color-b');//
    lista.style.color = 'green';
    var lista = document.getElementById('color-p');//
    lista.style.color = 'green';

    var lista = document.getElementById('color--w');//
    lista.style.color = 'green';
    var lista = document.getElementById('color--B');//
    lista.style.color = 'green';
    var lista = document.getElementById('color--b');//
    lista.style.color = 'green';
    var lista = document.getElementById('color--p');//
    lista.style.color = 'green';
    
    var start = document.querySelector('#stt');
    start.style.border='3px solid green';
    start.style.color='green';
    start.style.boxShadow='none';
}
function rosa(){
    var Body = document.querySelector('body');//
    Body.style.background='pink';
    Body.style.color='white';

    var app =  document.querySelector('#app');//
    app.style.border= '3px solid bisque';
    app.style.color= 'bisque';

    var bAdd =document.querySelector("#bAdd");//
    bAdd.style.border='3px solid bisque';
    bAdd.style.color='bisque';

    var itTask = document.querySelector("#itTask");//
    itTask.style.border=' 3px solid bisque';
    itTask.style.color='bisque';

    var taskName = document.querySelector('#taskName'); //
    taskName.style.border='3px solid bisque'; 
    taskName.style.color=' bisque';

    var contenedorDeTareas = document.querySelector("#tasks");
    contenedorDeTareas.style.border='3px solid bisque'; // 
    contenedorDeTareas.style.color='bisque'; 

    var valorN = document.querySelector('#value');//
    valorN.style.color='bisque';
    valorN.style.border=' 3px solid bisque';

    var botons = document.getElementById('minu1');//
    botons.style.border='3px solid bisque';
    botons.style.color='bisque';

    var boton = document.getElementById('minu2');//
    boton.style.border  ='3px solid bisque';
    boton.style.color ='bisque';

    var lista = document.getElementById('color-w');//
    lista.style.color = 'bisque';
    var lista = document.getElementById('color-B');//
    lista.style.color = 'bisque';
    var lista = document.getElementById('color-b');//
    lista.style.color = 'bisque';
    var lista = document.getElementById('color-p');//
    lista.style.color = 'bisque';

    var lista = document.getElementById('color--w');//
    lista.style.color = 'bisque';
    var lista = document.getElementById('color--B');//
    lista.style.color = 'bisque';
    var lista = document.getElementById('color--b');//
    lista.style.color = 'bisque';
    var lista = document.getElementById('color--p');//
    lista.style.color = 'bisque';
    
    var start = document.querySelector('#stt');
    start.style.border='3px solid bisque';
    start.style.color='bisque';
    start.style.boxShadow='none';    
}




function color1(){
     app.style.border= '3px solid white';
    app.style.color= 'white';

    var bAdd =document.querySelector("#bAdd");//
    bAdd.style.border='3px solid white';
    bAdd.style.color='white';

    var itTask = document.querySelector("#itTask");//
    itTask.style.border=' 3px solid white';
    itTask.style.color='white';

    var taskName = document.querySelector('#taskName'); //
    taskName.style.border='3px solid white'; 
    taskName.style.color='white';

    var contenedorDeTareas = document.querySelector("#tasks");
    contenedorDeTareas.style.border='3px solid white'; // 
    contenedorDeTareas.style.color='white'; 

    var valorN = document.querySelector('#value');//
    valorN.style.color='white';
    valorN.style.border=' 3px solid white';

    var botons = document.getElementById('minu1');//
    botons.style.border='3px solid white';
    botons.style.color='white';

    var boton = document.getElementById('minu2');//
    boton.style.border  ='3px solid white';
    boton.style.color ='white';

    var lista = document.getElementById('color-w');//
    lista.style.color = 'white';
    var lista = document.getElementById('color-B');//
    lista.style.color = 'white';
    var lista = document.getElementById('color-b');//
    lista.style.color = 'white';
    var lista = document.getElementById('color-p');//
    lista.style.color = 'white';

    var lista = document.getElementById('color--w');//
    lista.style.color = 'white';
    var lista = document.getElementById('color--B');//
    lista.style.color = 'white';
    var lista = document.getElementById('color--b');//
    lista.style.color = 'white';
    var lista = document.getElementById('color--p');//
    lista.style.color = 'white';

    
    var start = document.querySelector('#stt');
    start.style.border='3px solid white';
    start.style.color='white';
    start.style.boxShadow=' 0px 0px 9px white';
}
function color2(){
    app.style.border= '3px solid #DC416D';
    app.style.color= '#DC416D';

    var bAdd =document.querySelector("#bAdd");//
    bAdd.style.border='3px solid #DC416D';
    bAdd.style.color='#DC416D';

    var itTask = document.querySelector("#itTask");//
    itTask.style.border=' 3px solid #DC416D';
    itTask.style.color='#DC416D';

    var taskName = document.querySelector('#taskName'); //
    taskName.style.border='3px solid #DC416D'; 
    taskName.style.color='#DC416D';

    var contenedorDeTareas = document.querySelector("#tasks");
    contenedorDeTareas.style.border='3px solid #DC416D'; // 
    contenedorDeTareas.style.color='#DC416D'; 

    var valorN = document.querySelector('#value');//
    valorN.style.color='#DC416D';
    valorN.style.border=' 3px solid #DC416D';

    var botons = document.getElementById('minu1');//
    botons.style.border='3px solid #DC416D';
    botons.style.color='#DC416D';

    var boton = document.getElementById('minu2');//
    boton.style.border  ='3px solid #DC416D';
    boton.style.color ='#DC416D';

    var lista = document.getElementById('color-w');//
    lista.style.color = '#DC416D';
    var lista = document.getElementById('color-B');//
    lista.style.color = '#DC416D';
    var lista = document.getElementById('color-b');//
    lista.style.color = '#DC416D';
    var lista = document.getElementById('color-p');//
    lista.style.color = '#DC416D';

    var lista = document.getElementById('color--w');//
    lista.style.color = '#DC416D';
    var lista = document.getElementById('color--B');//
    lista.style.color = '#DC416D';
    var lista = document.getElementById('color--b');//
    lista.style.color = '#DC416D';
    var lista = document.getElementById('color--p');//
    lista.style.color = '#DC416D';

    
    var start = document.querySelector('#stt');
    start.style.border='3px solid #DC416D';
    start.style.color='#DC416D';
    start.style.boxShadow=' 0px 0px 9px #DC416D';
}
function color3(){
     app.style.border= '3px solid #2E3669';
    app.style.color= '#2E3669';

    var bAdd =document.querySelector("#bAdd");//
    bAdd.style.border='3px solid #2E3669';
    bAdd.style.color='#2E3669';

    var itTask = document.querySelector("#itTask");//
    itTask.style.border=' 3px solid #2E3669';
    itTask.style.color='#2E3669';

    var taskName = document.querySelector('#taskName'); //
    taskName.style.border='3px solid #2E3669'; 
    taskName.style.color='#2E3669';

    var contenedorDeTareas = document.querySelector("#tasks");
    contenedorDeTareas.style.border='3px solid #2E3669'; // 
    contenedorDeTareas.style.color='#2E3669'; 

    var valorN = document.querySelector('#value');//
    valorN.style.color='#2E3669';
    valorN.style.border=' 3px solid #2E3669';

    var botons = document.getElementById('minu1');//
    botons.style.border='3px solid #2E3669';
    botons.style.color='#2E3669';

    var boton = document.getElementById('minu2');//
    boton.style.border  ='3px solid #2E3669';
    boton.style.color ='#2E3669';

    var lista = document.getElementById('color-w');//
    lista.style.color = '#2E3669';
    var lista = document.getElementById('color-B');//
    lista.style.color = '#2E3669';
    var lista = document.getElementById('color-b');//
    lista.style.color = '#2E3669';
    var lista = document.getElementById('color-p');//
    lista.style.color = '#2E3669';

    var lista = document.getElementById('color--w');//
    lista.style.color = '#2E3669';
    var lista = document.getElementById('color--B');//
    lista.style.color = '#2E3669';
    var lista = document.getElementById('color--b');//
    lista.style.color = '#2E3669';
    var lista = document.getElementById('color--p');//
    lista.style.color = '#2E3669';

    
    var start = document.querySelector('#stt');
    start.style.border='3px solid #2E3669';
    start.style.color='#2E3669';
    start.style.boxShadow=' 0px 0px 9px #2E3669';


}
function color4(){
        app.style.border= '3px solid #43E5E9';
        app.style.color= '#43E5E9';
        
        var bAdd =document.querySelector("#bAdd");//
        bAdd.style.border='3px solid #43E5E9';
        bAdd.style.color='#43E5E9';
    
        var itTask = document.querySelector("#itTask");//
        itTask.style.border=' 3px solid #43E5E9';
        itTask.style.color='#43E5E9';
    
        var taskName = document.querySelector('#taskName'); //
        taskName.style.border='3px solid  #43E5E9'; 
        taskName.style.color=' #43E5E9';
    
        var contenedorDeTareas = document.querySelector("#tasks");
        contenedorDeTareas.style.border='3px solid #43E5E9'; // 
        contenedorDeTareas.style.color='#43E5E9'; 
    
        var valorN = document.querySelector('#value');//
        valorN.style.color='#43E5E9';
        valorN.style.border=' 3px solid #43E5E9';
    
        var botons = document.getElementById('minu1');//
        botons.style.border='3px solid #43E5E9';
        botons.style.color='#43E5E9';
    
        var boton = document.getElementById('minu2');//
        boton.style.border  ='3px solid #43E5E9';
        boton.style.color ='#43E5E9';
    
        var lista = document.getElementById('color-w');//
        lista.style.color = '#43E5E9';
        var lista = document.getElementById('color-B');//
        lista.style.color = '#43E5E9';
        var lista = document.getElementById('color-b');//
        lista.style.color = '#43E5E9';
        var lista = document.getElementById('color-p');//
        lista.style.color = '#43E5E9';
    
        var lista = document.getElementById('color--w');//
        lista.style.color = '#43E5E9';
        var lista = document.getElementById('color--B');//
        lista.style.color = '#43E5E9';
        var lista = document.getElementById('color--b');//
        lista.style.color = '#43E5E9';
        var lista = document.getElementById('color--p');//
        lista.style.color = '#43E5E9';
    
        var start = document.querySelector('#stt');
        start.style.border='3px solid #43E5E9';
        start.style.color='#43E5E9';
        start.style.boxShadow=' 0px 0px 9px #43E5E9';
}