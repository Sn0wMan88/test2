function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("dark").style.display = "none";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("dark").style.display = "block";
}
function focus () {
    document.querySelectorAll(".item").backgroundColor = "#E31E25";
}