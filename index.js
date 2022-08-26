
const selectFontSize =document.getElementById("selectFontSize");
const selectBgColor =document.getElementById("selectBgColor");
const resetBtn =document.getElementById("resetBtn");
const mainElement =document.querySelector("main");

//load LocalStorage value
 const initialSetup = () =>{
    const bgColor = localStorage.getItem("bgColor");
    const fontSize = localStorage.getItem("fontSize");

    if( bgColor && fontSize){
        selectFontSize.value = fontSize;
        selectBgColor.value = bgColor ;
        mainElement.style.fontSize = fontSize;
        mainElement.style.backgroundColor = bgColor;

    }
    if( !bgColor && !fontSize){
        selectFontSize.value = "16px";
        selectBgColor.value = "aqua" ;
        mainElement.style.fontSize = fontSize;
        mainElement.style.backgroundColor = bgColor;

    }
    
 }


// changeFontSize
const changeFontSize = (event) => {
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize" , selectedFontSize)
};


// clearLocalStore
const clearLocalStorage = () => {
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
    
};

// changeBgColor
const changeBgColor = (event) => {
    const selectedBgColor = event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem("bgColor" , selectedBgColor);
};

//add event listeners

selectFontSize.addEventListener("change" , changeFontSize);
selectBgColor.addEventListener("change" , changeBgColor);
resetBtn.addEventListener("click" , clearLocalStorage);
initialSetup();


