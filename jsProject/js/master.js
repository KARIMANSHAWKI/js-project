window.addEventListener('load', function () {

    let intervalBackground;
    let backgriundOption = true;
    let maincolor = localStorage.getItem('color-option');
    if (maincolor != null) {
        document.documentElement.style.setProperty('--main--color', localStorage.getItem('color-option'));
        document.querySelectorAll('.list-color li').forEach(function (ele) {
            ele.classList.remove('active');
            if (ele.dataset.color === maincolor) {
                ele.classList.add('active');
            }
        });
    }

    let mainbackground = localStorage.getItem('background-option');


    if (mainbackground != null) {

        if (mainbackground == 'true') {
            backgriundOption = true;
            randomizeImage();
        } else {
            backgriundOption = false;
        }
        document.querySelectorAll('.sittings-container span').forEach(function (ele) {
            ele.classList.remove('active');
            console.log(ele.dataset.background)
            if (mainbackground == 'true') {
                document.querySelector('.yes').classList.add('active');
            } else if (mainbackground == 'false') {
                document.querySelector('.no').classList.add('active');
            }
        });



    }
    ////Gear Icon Toggle
    let gearIcon = document.querySelector(".fa-cog");

    let gearbox = document.querySelector(".sittings-box");
    gearIcon.addEventListener('click', function () {
        this.classList.toggle("fa-spin");
        gearbox.classList.toggle('open');
    });
    ////Switch Colors
    let colorLis = document.querySelectorAll('.list-color li');
    colorLis.forEach(function (li) {
        li.addEventListener('click', function (e) {
            document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
            localStorage.setItem('color-option', e.target.dataset.color);

            e.target.parentElement.querySelectorAll('.active').forEach(function (ele) {
                ele.classList.remove('active');
            });

            e.target.classList.add('active');
        });
    });

    ////Switch background

    let backspan = document.querySelectorAll('.option2 span');
    backspan.forEach(function (span) {
        span.addEventListener('click', function (e) {
            e.target.parentElement.querySelectorAll('.active').forEach(function (ele) {
                ele.classList.remove('active');
            });

            e.target.classList.add('active');


            if (e.target.dataset.background === 'yes') {
                backgriundOption = true;
                randomizeImage();
                localStorage.setItem('background-option', true);
            } else {
                backgriundOption = false;
                clearInterval(intervalBackground);
                localStorage.setItem('background-option', false);
            }


        });

    });

    ////Page landing backgriund
    let landingPage = document.querySelector('.landing-bage');
    let imgsarray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

    function randomizeImage() {
        if (backgriundOption === true) {
            intervalBackground = setInterval(function () {
                let randomImge = Math.floor(Math.random() * imgsarray.length);
                landingPage.style.backgroundImage = `url("images/${imgsarray[randomImge]}")`;
            }, 8000);
        }
    }

    /////////////////Our Gallary/////////////
    ourGallary = document.querySelectorAll('.gallary .image-box .row .img-over i');


    ourGallary.forEach(function (img) {
        myimg = document.querySelector('.gallary .image-box .row div>img')
        img.addEventListener('click', function (e) {
            popupoverlay = document.createElement('div');
            popupoverlay.classList.add('popup');
            document.body.append(popupoverlay);
            popBox = document.createElement('div');
            popBox.classList.add('popBox');
            popUpImage = document.createElement('img');
            popUpImage.classList.add('popUpImage');
            popUpImage.src=myimg.src;
            popBox.append(popUpImage);
            popupoverlay.append(popBox);

            let closeButton = document.createElement('span');
            let closeButtonText = document.createTextNode('X');
            closeButton.appendChild(closeButtonText);
            closeButton.classList.add('closeButton');
            popBox.appendChild(closeButton);
        });
    });

    document.addEventListener('click',function(e){
        if(e.target.className == 'closeButton') {
            document.querySelector(".popup").remove();
        }
    });


});
