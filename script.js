

// let calculate = document.getElementById("")

const form = document.querySelector("form")

form.addEventListener("submit", function(e){
  e.preventDefault()

  let height = parseInt(document.getElementById("height").value)
  let weight = parseInt(document.getElementById("weight").value)
  let results = document.getElementById("results")
  let weightguide = document.getElementById("weight-guide")
  let under = document.getElementById("under")
  let overweight = document.getElementById("overweight")
  let normal = document.getElementById("normal")

  overweight.style.color="black"
  under.style.color="black"
  normal.style.color="black"

  if(height ==='' || height < 0 || isNaN(height)){
    results.innerHTML = "invalid height"
  }
  else if(weight ==='' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Invalid weight"
  }
else{
  let bmi = (weight/((height*height)/10000)).toFixed(2)
  results.innerHTML = bmi

  if(bmi < 18.6){
    under.style.color="red"
  }
  else if(bmi > 24.9){
    overweight.style.color="red"
  }
  else{
    normal.style.color="green"
  }

}
})




