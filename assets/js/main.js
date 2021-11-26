let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "    " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }
];

/* console.log(morseAlphabet[0].letter)
console.log(morseAlphabet[0].morseCode)

for (let i = 0; i < morseAlphabet.length; i++) { 
    console.log(morseAlphabet[i].letter)
    console.log(morseAlphabet[i].morseCode)
} */


morse = () => {
    let x = ""
    let input = document.getElementById("textInput").value
    let output = document.getElementById("morseOutput")
    let inputUp = input.toUpperCase().split("")
    
    for (let j = 0; j < inputUp.length; j++) {
        for (let i = 0; i < morseAlphabet.length; i++) { 
/*             console.log(morseAlphabet[i].letter)
            console.log(morseAlphabet[i].morseCode) */
            if (inputUp[j] == morseAlphabet[i].letter) {
                x += `${morseAlphabet[i].morseCode}`
                /* console.log(morseAlphabet[i].morseCode)  */
            }
        }
    }
    output.innerHTML = x
}

    
    


