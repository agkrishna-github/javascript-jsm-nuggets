console.log('heigh ', window.innerHeight)
console.log('width ', window.innerWidth)

const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener('click', ()=>{
    const dimension = box.getBoundingClientRect()
    console.log(dimension);
})