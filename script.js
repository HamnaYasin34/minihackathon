let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

// form

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    let data;
    if (!name && !email && !subject && !message) {
        // form validation through js
        alert("please fill Out the form");
    } else {
        !name
            ? alert("Name is required")
            : !email
                ? alert("Email is required")
                : !subject
                    ? alert("Subject is required")
                    : !message
                        ? alert("Message is required")
                        : (data = { name, email, subject, message });
        console.log(data);
        resetForm();
    }

    function resetForm() {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
    }
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    // Process the form data here (e.g., send it to the server)

    alert('Form submitted successfully!');
});

// read more read les

// JavaScript function to toggle text content

const btn = document
    .querySelector('.read-more-btn');

const text = document
    .querySelector('.card__read-more');

const cardHolder = document
    .querySelector('.card-holder');

cardHolder
    .addEventListener('click', e => {

        const current = e.target;

        const isReadMoreBtn = current.className.includes('read-more-btn');

        if (!isReadMoreBtn)
            return;

        const currentText = e.target.parentNode.querySelector('.card__read-more');

        currentText.classList.toggle('card__read-more--open');

        current.textContent = current.textContent.includes('Read More...') ? 'Read Less...' : 'Read More...';

    });





