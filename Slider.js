let Slider = {
    imageUrl: [],
    array: 0,
    butontheright: document.getElementById('onbutton'),
    butontheleft: document.getElementById('onbutton2'),
    picture: document.getElementById('urlimg'),

    start: function (d) {
        var that = this;
        this.butontheright.addEventListener('click', function(e) {
        that.onbutclick1(e)
        });
        this.butontheleft.addEventListener('click', function(e) {
            that.onbutclick2(e)
        });

        this.imageUrl.push('http://otzyvy-avtovladelcev.ru/img/auto-body-image/901/9875.jpg');
        this.imageUrl.push('https://vignette.wikia.nocookie.net/gran-turismo/images/3/38/Alfa_Romeo_Brera_Sky_Window_3.2_JTS_Q4_%2706.jpg/revision/latest?cb=20190201100050');
        this.imageUrl.push('https://barnaul.b-kredit.ru/used/img.php?p=data/d69b87fe4f4efc36136b8aa90d7f71b8/photo/common/thumbnail/1200x1200/e3c4465e87c04ea5e9e1044e995f539c.jpg');
        this.imageUrl.push('https://cartuning.ws/uploads/posts/2016-11/1478016584_-cok5d2wtt0.jpg');

        let array = 0;
        this.picture.src = this.imageUrl[array];
    },


    onbutclick1: function (e) {
        this.array--;
        this.picture.src = this.imageUrl[array];
        this.butontheleft.disabled = false;
        if (array === 0) {
            this.butontheright.disabled = true;
        }

    },

    onbutclick2: function (e) {
        this.array++;
        this.picture.src = this.imageUrl[array];
        this.butontheright.disabled = false;
        if (this.array === (this.imageUrl.length - 1)) {
            this.butontheleft.disabled = true;
        }
    }
}

