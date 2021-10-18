function check() {
    var email1 = document.getElementById("email_addr");
    var email2 = document.getElementById("email_repeat");
    if (email1.value != email2.value) {
        alert("The two emails must match!!");
        return false;
    }
}
function nickameFunction() {
    if (document.getElementById("yesNick").checked) {
        document.getElementById("nick").style.display = "inline";
        document.getElementById("nickname").setAttribute("required", true);
    } else {
        document.getElementById("nickname").removeAttribute("required");
        document.getElementById("nick").style.display = "none";
    }
}


// RegEx: /expression/flag(s)
let myString = "Almost before we knew it, we had left the ground.";
let regex = /almost/;
let result = regex.test(myString); // this should return false
console.log(result);
regex = /almost/i; // flag i: insensitive
result = regex.test(myString); // this should return true
console.log(result);
