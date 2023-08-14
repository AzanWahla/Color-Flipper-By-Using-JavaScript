document.getElementById("button").addEventListener("click", function () {
    let random = Math.ceil(Math.random() * 7);

    switch (random) {
        case 1:
            document.getElementsByTagName("main")[0].style.backgroundColor = "red";
            document.getElementsByTagName("span")[0].textContent="#FF0000"
            break;
        case 2:
            document.getElementsByTagName("main")[0].style.backgroundColor = "blue";
            document.getElementsByTagName("span")[0].textContent="#0000FF"
            break;
        case 3:
            document.getElementsByTagName("main")[0].style.backgroundColor = "green";
            document.getElementsByTagName("span")[0].textContent="#00FF00"          
            break;
        case 4:
            document.getElementsByTagName("main")[0].style.backgroundColor = "yellow";
            document.getElementsByTagName("span")[0].textContent="#FFFF00"              
            break;
        case 5:
            document.getElementsByTagName("main")[0].style.backgroundColor = "purple";
            document.getElementsByTagName("span")[0].textContent="#800080"
            break;
        case 6:
            document.getElementsByTagName("main")[0].style.backgroundColor = "orange";
            document.getElementsByTagName("span")[0].textContent="#FFA500"
            break;
        case 7:
            document.getElementsByTagName("main")[0].style.backgroundColor = "pink";
            document.getElementsByTagName("span")[0].textContent="#FFC0CB"
            break;
        default:
            document.getElementsByTagName("main")[0].style.backgroundColor = "white";
            document.getElementsByTagName("span")[0].textContent="#FFFFFF"
            break;
    }
})