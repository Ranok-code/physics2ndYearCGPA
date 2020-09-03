let subject = document.querySelectorAll(".sub");
let credit = document.querySelectorAll(".credit");
const btn = document.querySelector(".btn");
const cross = document.querySelector(".cross");
const resultPage = document.querySelector(".result");

btn.addEventListener("click", () => {
    let addedCGPA = 0;
    let addedCredit = 0;
    for (let i = 0; i < subject.length; i++) {
        if (subject[i].value == "") {
            alert("fill up the form first!");
            return false;
        }
        else {
            addedCGPA = addedCGPA + subject[i].value * credit[i].value;
            addedCredit += credit[i].value*1;
        }
    }
    let cgpa = Math.round((addedCGPA/addedCredit) * 100) / 100;
    resultPage.classList.add("result-open");
    document.querySelector(".cgpa").innerHTML = cgpa;

})

cross.addEventListener("click",()=>{
    resultPage.classList.remove("result-open");
})