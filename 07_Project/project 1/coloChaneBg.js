const button = document.querySelectorAll(".button");
const body = document.querySelector("body")

button.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === "grey")
    {
      body.style.backgroundColor = "gray"
    }
    else if(e.target.id === "white")
    {
      body.style.backgroundColor = "white"
    }
    else if(e.target.id === "blue")
    {
      body.style.backgroundColor = "blue"
    }
    else if(e.target.id === "yellow")
    {
      body.style.backgroundColor = "yellow"
    }
    else if(e.target.id === "purple")
    {
        body.style.backgroundColor = "purple"
    }
    
  })
})