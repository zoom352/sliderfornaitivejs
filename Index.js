Slider.start();


let butontheright = document.getElementById('onbutton');
let butontheleft = document.getElementById('onbutton2');
let picture = document.getElementById('urlimg');



let imageUrl = [];
imageUrl.push('http://otzyvy-avtovladelcev.ru/img/auto-body-image/901/9875.jpg');
imageUrl.push('https://vignette.wikia.nocookie.net/gran-turismo/images/3/38/Alfa_Romeo_Brera_Sky_Window_3.2_JTS_Q4_%2706.jpg/revision/latest?cb=20190201100050');
imageUrl.push('https://barnaul.b-kredit.ru/used/img.php?p=data/d69b87fe4f4efc36136b8aa90d7f71b8/photo/common/thumbnail/1200x1200/e3c4465e87c04ea5e9e1044e995f539c.jpg');
imageUrl.push('https://cartuning.ws/uploads/posts/2016-11/1478016584_-cok5d2wtt0.jpg');

let array = 0;
picture.src = imageUrl[array];

function onbutclick1 () {
    array--;
    picture.src = imageUrl[array];
    butontheleft.disabled = false;
    if (array === 0) {
        butontheright.disabled = true;
    }

}

function onbutclick2 () {
    array++;
    picture.src = imageUrl[array];
    butontheright.disabled = false;
    if (array === (imageUrl.length - 1)) {
        butontheleft.disabled = true;
    }
}

butontheright.addEventListener('click', onbutclick1);
butontheleft.addEventListener('click', onbutclick2);







