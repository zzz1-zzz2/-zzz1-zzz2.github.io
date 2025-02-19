const myImage = document.querySelector("img");
myImage.onclick = () => 
    {
        const mySrc = myImage.getAttribute("src");
        if (mySrc === "images/wxy.jpg") {
          myImage.setAttribute("src", "images/wxy1.jpg");
        } else {
          myImage.setAttribute("src", "images/wxy.jpg");
        }
}
let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `wxy喜欢,${myName}`;
    }
  }
  
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `wxy喜欢,${storedName}`;
  }
  myButton.onclick = function () {
    setUserName();
  };
  