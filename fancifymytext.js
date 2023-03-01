function getBigger() {
    document.getElementById("textBox").style.fontSize = "4em";
}
function getFancy(){
    let textBox = document.getElementById('textBox');
    textBox.style.color = "magenta";
    textBox.style.fontStyle = "italic";
    textBox.style.fontWeight = "bold";
    textBox.style.textDecoration = "underline";
}
function getBoring(){
    let textBox = document.getElementById('textBox');
    textBox.style.fontWeight = "400";
    textBox.style.fontStyle = "normal";
    textBox.style.color = "black";
    textBox.style.textDecoration = "none";
}
function toUpper(){
    let textBox = document.getElementById('textBox');
    textBox.style.textTransform = "uppercase";
    var lines = textBox.value.split("\n");
    for(let i = 0; i < lines.length; i++) {
        lines[i] = lines[i] + "-Moo";
    }
    textBox.value = lines.join("\n");
}