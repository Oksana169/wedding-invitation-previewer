// Botton declarations
const flowersBtn = document.getElementById("flowers-btn");
const classicalBtn = document.getElementById("classical-btn");
const bohoBtn = document.getElementById("boho-btn");
const gridContainer = document.getElementById("grid-container");
flowersBtn.style.backgroundColor = "rgb(49,57,71)";
flowersBtn.style.color = "white";

// Input & Output declarations
const lettersOutput = document.getElementById("letters-output");
const firstNameInp = document.getElementById("first-name-input");
const secondNameInp = document.getElementById("second-name-input");
const namesOutElem = document.getElementById("names-output");
const lastNameInp = document.getElementById("last-name-input");
const lastNameOut = document.getElementById("last-name-output");
const phraseOutput = document.getElementById("phrase-output");
phraseOutput.innerHTML = "You are cordially invited to the wedding of";
const dateInp = document.getElementById("date-input");
const dateOut = document.getElementById("date-output");
const locationInp = document.getElementById("location-input");
const locationOut = document.getElementById("location-output");

// Flowers style button function & event
function flowersTextFormat() {
    const changeToUbuntu = [lettersOutput, namesOutElem, lastNameOut];
    const changeToHelvetica = [dateOut, locationOut];
    
    for (let i = 0; i < changeToUbuntu.length; i++) {
      changeToUbuntu[i].style.fontFamily = "Ubuntu";
      changeToUbuntu[i].style.color = "white";
    };

    for (let i = 0; i < changeToHelvetica.length; i++) {
       changeToHelvetica[i].style.fontFamily = "Helvetica Neue";
       changeToHelvetica[i].style.color = "white";
    };
};


flowersBtn.addEventListener("click", function() {
    flowersTextFormat();
    gridContainer.style.backgroundImage = "url('/Images/Flowers.png')";
    flowersBtn.style.backgroundColor = "rgb(49,57,71)";
    flowersBtn.style.color = "white";
    classicalBtn.style.backgroundColor = "transparent";
    classicalBtn.style.color = "white";
    bohoBtn.style.backgroundColor = "transparent";
    bohoBtn.style.color = "white";
    phraseOutput.style.color = "white";
    phraseOutput.style.fontFamily = "Open Sans";
});


// Classic style button function & event
function classicalTextFormat() {
    const allClassicText = [lettersOutput, namesOutElem, lastNameOut, dateOut, locationOut, phraseOutput]; 

    for (let i = 0; i < allClassicText.length; i++) {
        allClassicText[i].style.fontFamily = "STSong";
        allClassicText[i].style.color = "rgb(49,57,71)";
    };
};

classicalBtn.addEventListener("click", function() {
    classicalTextFormat();
    gridContainer.style.backgroundImage = "url('/Images/Classic.png')";
    flowersBtn.style.backgroundColor = "transparent";
    flowersBtn.style.color = "white";
    classicalBtn.style.backgroundColor = "rgb(199,199,199)";
    classicalBtn.style.color = "black";
    bohoBtn.style.backgroundColor = "transparent";
    bohoBtn.style.color = "white";
    phraseOutput.style.color = "rgb(49,57,71)";
});


// Boho style button function & event
function bohoTextFormat() {
    const allBohoText = [lettersOutput, namesOutElem, lastNameOut, dateOut, locationOut, phraseOutput ]; 

    for (let i = 0; i < allBohoText.length; i++) {
        allBohoText[i].style.fontFamily = "Chilanka";
        allBohoText[i].style.color = "rgb(175,135,65)";
    };
};
  
bohoBtn.addEventListener("click", function() {
    bohoTextFormat();
    gridContainer.style.backgroundImage = "url('/Images/Boho.png')";
    flowersBtn.style.backgroundColor = "transparent";
    flowersBtn.style.color = "white";
    classicalBtn.style.backgroundColor = "transparent";
    classicalBtn.style.color = "white";
    bohoBtn.style.backgroundColor = "rgb(88,172,191)";
    bohoBtn.style.color = "black";
    phraseOutput.style.color = "rgb(175,135,65)";
});


// Names function & event
function namesLettersOutput() {

    const str1 = firstNameInp.value ? firstNameInp.value : " ";
    const str2 = str1.charAt(0).toUpperCase() + str1.slice(1)
    const str3 = secondNameInp.value ? secondNameInp.value: " ";
    const str4 = str3.charAt(0).toUpperCase() + str3.slice(1)
    const and = str1 || str3 ? "&" : " ";
    lettersOutput.innerHTML = `${str1[0].toUpperCase()} ${and} ${str3[0].toUpperCase()}`;
    namesOutElem.innerHTML = `${str2} ${and} ${str4}`;
};

firstNameInp.addEventListener("keyup", function() {
    namesLettersOutput();
    let firstName = firstNameInp.value;
    return firstName;

});

secondNameInp.addEventListener("keyup", function() {
    namesLettersOutput();
    let secondName = secondNameInp.value;
    return secondName;  
});


// Last name event
lastNameInp.addEventListener("keyup", function() {
    let lastName = lastNameInp.value;
    lastNameOut.innerHTML = lastName.charAt(0).toUpperCase()+ lastName.slice(1);
    return lastName;
});

// Date event
dateInp.addEventListener("change", function() {

    var today = new Date(dateInp.value);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = `${dd}/${mm}/${yyyy}`;
    dateOut.innerHTML = today;
});

// Location event
locationInp.addEventListener("keyup", function() {
    let location = locationInp.value;
    locationOut.innerHTML = location.charAt(0).toUpperCase() + location.slice(1);
    return location;
});



