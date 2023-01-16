//getting the requiered elements
const formInputs = document.querySelectorAll('.input-group input');
const nextBtn = document.querySelectorAll('#next-btn');
const backBtn = document.querySelectorAll('#back-btn');
const confirmBtn = document.getElementById('confirm-btn');
const multiSteps = document.querySelectorAll('.multi-step');
const plans = document.querySelectorAll('.plans');
const swithBtn = document.querySelector('.toggle');
const yearGroups = document.querySelectorAll('#year-group');
const monthGroups = document.querySelectorAll('#month-group');
const addOnsInputs = document.querySelectorAll('.add-ons input');
const circles = document.querySelectorAll('.circle');

let currentIndex = 0;

// checking the form inputs
function checkInputs(){
    for (let i = 0; i < formInputs.length; i++){
       const input = formInputs[i];
        const inputValue = input.value.trim();
        if (inputValue === ''){
            input.parentNode.classList.add('error')
        }else{
            input.parentNode.classList.add('success')
            updateStep(); // updating to the next step after checking the inputs
        }
    }
}

function updateStep(){
    multiSteps.forEach((multiStep) => {
        if (multiStep.classList.contains('active-step')){
            multiStep.classList.remove('active-step')
        }
    })
    multiSteps[currentIndex].classList.add('active-step');
    circles.forEach((circle) => {
        if (circle.classList.contains('circle-active')){
            circle.classList.remove('circle-active')
        }
    })
    circles[currentIndex].classList.add('circle-active')
}

nextBtn.forEach((btn) =>{
    btn.addEventListener('click', () => {
        currentIndex++
        checkInputs();
    })
})

backBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        currentIndex--;
        updateStep();
    })
})

confirmBtn.addEventListener('click', () => {
    currentIndex = multiSteps.length - 1;
    updateStep();
})

plans.forEach((plan) => {
    plan.addEventListener('click', () => {
        changePackage();
        plan.classList.add('active-package')
    })
})

//selecting a new package
function changePackage(){
    for (let i = 0; i < plans.length; i++){
        const plan = plans[i];
        if (plan.classList.contains('active-package')){
            plan.classList.remove('active-package')
        }
    }
}

addOnsInputs.forEach((input) => {
    input.addEventListener('click', (e) => {
        const checkedInputParent = e.target.parentNode.parentNode;
        checkedInputParent.classList.toggle('active-package')
    })
})

swithBtn.addEventListener('click', () => {
    monthGroups.forEach((group) => {
        group.classList.toggle('show-year-group');
    })
    yearGroups.forEach((group) => {
        group.classList.toggle('show-year-group');
    })
})