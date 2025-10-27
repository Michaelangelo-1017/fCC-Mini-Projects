//Variables
const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const orderNoInput = document.getElementById("order-no");
const productCodeInput = document.getElementById("product-code");
const quantityInput = document.getElementById("quantity");
const damagedProduct = document.getElementById("damaged-product");
const nonConformingProduct = document.getElementById("nonconforming-product");
const delayedDispatch = document.getElementById("delayed-dispatch");
const complaintDescription = document.getElementById("complaint-description");
const solutionDescription = document.getElementById("solution-description");
const otherComplaint = document.getElementById("other-complaint");
const complaintsGroup = document.getElementById("complaints-group");
const solutionsGroup = document.getElementById("solutions-group");
const complaintsCheckboxes = complaintsGroup.querySelectorAll('input[type="checkbox"]');
const solutionRadios = solutionsGroup.querySelectorAll('input[type="radio"]');
const otherSolution = document.getElementById("other-solution");
const formField = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn")
//console.log(complaintsGroup.innerHTML)

//Regexes

const emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const orderNoRegex = /^2024\d{6}$/;
const productCodeRegex = /^[a-zA-Z]{2}\d{2}[-][a-zA-Z]\d{3}[-][a-zA-Z]{2}\d$/;
const descriptionRegex = /.{20,}/s;
const quantityRegex = /^[+]?[1-9]\d*$/;

const emailTest = "g@l.km"
const orderNoTest = "pr00-g764-rh5"


//Functions
function validateForm(){
    const isFullNameValid = fullNameInput.value.trim() !== "" ? true : false;
    const isEmailValid = emailRegex.test(emailInput.value) ? true : false;
    const isOrderNoValid = orderNoRegex.test(orderNoInput.value) ? true : false;
    const isProductCodeValid = productCodeRegex.test(productCodeInput.value) ? true : false;
    const isQuantityValid = quantityRegex.test(quantityInput.value) ? true : false;
    const isComplaintsGroupValid = Array.from(complaintsCheckboxes).some(checkbox => checkbox.checked);
    const isSolutionsGroupValid = Array.from(solutionRadios).some(radio => radio.checked);
    let isComplaintDescriptionValid;
    let isSolutionDescriptionValid;
    if (otherComplaint.checked){
        isComplaintDescriptionValid = descriptionRegex.test(complaintDescription.value) ? true : false;
    }
    else{
        isComplaintDescriptionValid = true;
    }
    if (otherSolution.checked){
        isSolutionDescriptionValid = descriptionRegex.test(solutionDescription.value) ? true : false;
    }
    else{
        isSolutionDescriptionValid = true;
    }
    return {
        "full-name" : isFullNameValid,
        "email" : isEmailValid,
        "order-no" : isOrderNoValid,
        "product-code" : isProductCodeValid,
        "quantity" : isQuantityValid,
        "complaints-group" : isComplaintsGroupValid,
        "complaint-description" : isComplaintDescriptionValid,
        "solutions-group" : isSolutionsGroupValid,
        "solution-description" : isSolutionDescriptionValid
    }
};

function isObject(obj) {
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

function isValid(){
    let validityObject = validateForm()
    if (isObject(validityObject)){
        let checker = true;
        for (const prop in validityObject){
        //console.log(prop);
        if (validityObject[prop]){
        document.getElementById(prop).style.borderColor = "green";
        }
        else{
        document.getElementById(prop).style.borderColor = "red";
        }
        if (validityObject[prop] === false){
            //console.log(`The following property is invalid : ${prop}`);
            checker = false;
        }
        }
        return checker;
    }
}

//Event Listeners
formField.addEventListener("change", (event) => {
    const validateObject = validateForm(event);
    for (const prop in validateObject){
        if (validateObject[prop]){
        document.getElementById(prop).style.borderColor = "green";
        }
        else{
        document.getElementById(prop).style.borderColor = "red";
        } 
    }
}); 

formField.addEventListener("submit", (event) => {
    if (!isValid()) {
        event.preventDefault(); // Prevent actual submission if invalid
    }
});