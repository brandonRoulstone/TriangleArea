let btn = document.getElementById("btnCalc");

function baseAreaHeight(){
    let result = document.getElementById("result");
    let input = document.getElementById("calculate").value;
    let input2 = document.getElementById("calculateTwo").value;
    // let area = base * height
    let finalRes = 0.5 * input * input2;
    console.log(finalRes)
    result.innerHTML= `
    Area of the traingle is: ${finalRes}
    `;
}

baseAreaHeight()
btn.addEventListener("click", baseAreaHeight);

// function ageToDays(){
//     let response = document.getElementById("response");
//     let age = document.getElementById("age").value;
//     let result = age * 365.25;
//     response.innerHTML =`<p>your age in days are:<br>${result.toFixed(0)}</p>`
//     console.log(result.toFixed(0));

// }
// ageToDays();

// age.addEventListener("input", ageToDays);