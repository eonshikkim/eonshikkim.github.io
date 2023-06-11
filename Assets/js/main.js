function changeImg() {
    const image = document.getElementById('myImg');
    if (image.src.match("Assets/img/pic1.jpg")) {
        image.src = "Assets/img/pic2.jpg";
    }
    else {
        image.src = "Assets/img/pic1.jpg";
    }
}