const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//HTML elements
let pswdOne = document.getElementById("pswd-one");
let pswdTwo = document.getElementById("pswd-two");
let btnPswd = document.getElementById("btn-pswd");

btnPswd.addEventListener("click", function() {
    let pswdLength = parseInt(document.getElementById("pswd-length").value);
    for (let i = 0; i < pswdLength; i++)
    {
        pswdOne.textContent += characters[Math.floor(Math.random() * characters.length)];
        pswdTwo.textContent += characters[Math.floor(Math.random() * characters.length)];
    }
})