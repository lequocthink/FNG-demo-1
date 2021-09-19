
// Biến đếm vị trí của slide
var slideIndex = 1;

//Chạy hàm auto liên tục trong 4s, cứ mỗi 4s là chuyển slide một lần
var time = setInterval(auto, 4000); 
function auto () {
	showSlides(slideIndex += 1);
}

// Sau khi chuyển slide bằng click phải đặt lại thời gian chuyển slide
function resTime() {
	clearInterval(time);
	time = setInterval(auto, 4000);
}

// sử dụng khi click vào nút next(+1) and prev(-1) để chuyển slide 
function plusSlides(n) {
	showSlides(slideIndex += n);
	resTime();
}

// Sử dụng khi click vào 5 nút chuyển slide
function currentSlide(n) {
	slideIndex = n;
	showSlides(slideIndex);
	resTime();
}

// Hàm tạo Slider
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);


const navClose = document.querySelector('#x');
const navMobile = document.querySelector('.js-nav-mobile');
const navContent = document.querySelector('.js-nav-container')

// Hàm bậc Navigation Mobile
function showNav() {
    navMobile.classList.add('open');
}

// Hàm Tắt Navigation Mobile
function hideNav() {
    navMobile.classList.remove('open');
}

// Bấm vào icon search sẽ bậc nav
const search = document.querySelector('.search-icon');
search.addEventListener('click', showNav);

// Bấm vào các element của nav để đến vị trí mong muốn và tắt nav
const nav = document.querySelectorAll('.nav-mb ul li a ');
// Lấy từng element trong nav và duyệt qua nó nếu element nào đc click sẽ đc kích hoạt
for (const buyBtn of nav) {
    buyBtn.addEventListener('click', hideNav);
}

// Bấm vào nav icon sẽ bậc nav
const navIcon = document.querySelector('.nav-icon');
navIcon.addEventListener('click', showNav)

// click vào dấu X sẽ đóng nav
navClose.addEventListener('click', hideNav);
// click vào bên ngoài nav sẽ đóng nav
navMobile.addEventListener('click', hideNav);

// Click vào bên trong nav sẽ không đóng nav
navContent.addEventListener('click', function (event) {
    event.stopPropagation();
})


