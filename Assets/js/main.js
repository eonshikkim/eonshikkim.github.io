function changeImg() {
    const image = document.getElementById('myImg');
    if (image.src.match("Assets/img/dummy1.png")) {
        image.src = "Assets/img/dummy2.jpeg";
    }
    else {
        image.src = "Assets/img/dummy1.png";
    }
}