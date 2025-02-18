// Generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++)
    {
      color += hex[Math.floor(Math.random()*16)]
    }
    return color
  };
  // console.log(randomColor());
  
  let intervalID;
  const startChangingColor = function(){
    function changeBGcolor()
    {
      // to run continue , insert this into a setInterval function
    document.body.style.backgroundColor = randomColor();
    }
    if(!intervalID)
    {
      intervalID = setInterval(changeBGcolor,1000)
    }
    
  }
  const stopChangingColor = function(){
    clearInterval(intervalID)
    // refress the interval id
    intervalID =null
  }
  
  document.querySelector("#start").addEventListener('click',startChangingColor)
  document.querySelector("#stop").addEventListener('click',stopChangingColor)