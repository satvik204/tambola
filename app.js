//variables

const board=  document.querySelector(".board")

var array =  Array.from(Array(91).keys());

array = array.slice(1,91)




for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }



let x = 0;

let clickSound = new Audio("./click.wav");
//initialize cells


for (let i = 1; i < 91; i++) {
    const element = document.createElement('div');
    element.classList.add("cell");
    element.id = i;
    element.innerHTML = i;
    board.appendChild(element);    
}

console.log(array);

function newNumber() {
     
    if (x === 90) {
        alert("Board full! Start new Game.")
        return;
    }

    clickSound.play();
    let number = array[x];
     const numberelem = document.getElementById(String(number));



     numberelem.style.backgroundColor = 'green';

     document.querySelector(".title").innerHTML = number;

   
     if (number<10) {
        number = 0 + String(number)
     }

     var ten=  Math.floor(number/10)
    var one = Math.floor(number%10)
     console.log(ten,one);
     
     speakText(`${String(ten)} ${String(one)} ${String(number)}`);

     x++;
}

// Function to speak the given text
function speakText(text) {
    // Create a new SpeechSynthesisUtterance object
    const speech = new SpeechSynthesisUtterance(text);
    
    // Set additional properties if needed (e.g., language, pitch, rate, volume)
    speech.lang = 'en-IN';  // Set the language
    speech.pitch = 1;       // Set the pitch (1 is the default)
    speech.rate = 1;        // Set the rate of speech (1 is the normal speed)
    speech.volume = 1;      // Set the volume (from 0 to 1)
    
    // Speak the text
    window.speechSynthesis.speak(speech);
}

// Example usage: Speak some text


function restart() {
    location.reload();
}