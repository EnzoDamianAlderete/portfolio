const openModalProyect1 = document.getElementById('openModalProyect1');
const modal1 = document.getElementById('modal1');
const closeModal1 = document.getElementById('closeModal1');
const openModalProyect2 = document.getElementById('openModalProyect2');
const modal2 = document.getElementById('modal2');
const closeModal2 = document.getElementById('closeModal2');
const openModalProyect3 = document.getElementById('openModalProyect3');
const modal3 = document.getElementById('modal3');
const closeModal3 = document.getElementById('closeModal3');
const openModalProyect4 = document.getElementById('openModalProyect4');
const modal4 = document.getElementById('modal4');
const closeModal4 = document.getElementById('closeModal4');
const openModalProyect5 = document.getElementById('openModalProyect5');
const modal5 = document.getElementById('modal5');
const closeModal5 = document.getElementById('closeModal5');

openModalProyect1.addEventListener('click',(e)=>{
    e.preventDefault();
    modal1.classList.add('modal--show');
});

closeModal1.addEventListener('click',(e)=>{
    e.preventDefault();
    modal1.classList.remove('modal--show');
});
openModalProyect2.addEventListener('click',(e)=>{
    e.preventDefault();
    modal2.classList.add('modal--show');
});

closeModal2.addEventListener('click',(e)=>{
    e.preventDefault();
    modal2.classList.remove('modal--show');
});
openModalProyect3.addEventListener('click',(e)=>{
    e.preventDefault();
    modal3.classList.add('modal--show');
});

closeModal3.addEventListener('click',(e)=>{
    e.preventDefault();
    modal3.classList.remove('modal--show');
});
openModalProyect4.addEventListener('click',(e)=>{
    e.preventDefault();
    modal4.classList.add('modal--show');
});

closeModal4.addEventListener('click',(e)=>{
    e.preventDefault();
    modal4.classList.remove('modal--show');
});

openModalProyect5.addEventListener('click',(e)=>{
    e.preventDefault();
    modal5.classList.add('modal--show');
});

closeModal5.addEventListener('click',(e)=>{
    e.preventDefault();
    modal5.classList.remove('modal--show');
});