// let htmlProgress = document.querySelector(".html-css"),
//   htmlValue = document.querySelector(".html-progress");

// let htmlStartValue = 0,
//   htmlEndValue = 90,
//   htmlspeed = 30;

// let progresshtml = setInterval(() => {
//   htmlStartValue++;

//   htmlValue.textContent = `${htmlStartValue}%`;
//   htmlProgress.style.background = `conic-gradient(#fca61f ${
//     htmlStartValue * 3.6
//   }deg, #ededed 0deg)`;

//   if (htmlStartValue == htmlEndValue) {
//     clearInterval(progresshtml);
//   }
// }, htmlspeed);

// let javascriptProgress = document.querySelector(".javascript"),
//   javascriptValue = document.querySelector(".javascript-progress");

// let javascriptStartValue = 0,
//   javascriptEndValue = 75,
//   jsspeed = 30;

// let progressjs = setInterval(() => {
//   javascriptStartValue++;

//   javascriptValue.textContent = `${javascriptStartValue}%`;
//   javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
//     javascriptStartValue * 3.6
//   }deg, #ededed 0deg)`;

//   if (javascriptStartValue == javascriptEndValue) {
//     clearInterval(progressjs);
//   }
// }, jsspeed);

// let phpProgress = document.querySelector(".php"),
//   phpValue = document.querySelector(".php-progress");

// let phpStartValue = 0,
//   phpEndValue = 80,
//   phpspeed = 30;

// let progressphp = setInterval(() => {
//   phpStartValue++;

//   phpValue.textContent = `${phpStartValue}%`;
//   phpProgress.style.background = `conic-gradient(#20c997 ${
//     phpStartValue * 3.6
//   }deg, #ededed 0deg)`;

//   if (phpStartValue == phpEndValue) {
//     clearInterval(progressphp);
//   }
// }, phpspeed);

// let reactProgress = document.querySelector(".reactjs"),
//   reactValue = document.querySelector(".reactjs-progress");

// let reactStartValue = 0,
//   reactEndValue = 30,
//   rjsspeed = 30;

// let progressreact = setInterval(() => {
//   reactStartValue++;

//   reactValue.textContent = `${reactStartValue}%`;
//   reactProgress.style.background = `conic-gradient(#3f396d ${
//     reactStartValue * 3.6
//   }deg, #ededed 0deg)`;

//   if (reactStartValue == reactEndValue) {
//     clearInterval(progressreact);
//   }
// }, rjsspeed);






// $(document).ready(function () {
//   $(".filter-item").click(function () {
//     const value = $(this).attr("data-filter");
//     if (value == "all") {
//       $(".post").show("1000");
//     } else {
//       $(".post")
//         .not("." + value)
//         .hide("1000");
//       $(".post")
//         .filter("." + value)
//         .show("1000");
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function(){
//   window.addEventListener('scroll', function() {
//       if (window.scrollY > 50) {
//         document.getElementById('navbar-top').classList.add('fixed-top');
//         // add padding top to show content behind navbar
//         navbar_height = document.querySelector('.navbar').offsetHeight;
//         document.body.style.paddingTop = navbar_height + 'px';
//       } else {
//         document.getElementById('navbar-top').classList.remove('fixed-top');
//          // remove padding top from body
//         document.body.style.paddingTop = '0';
//       } 
//   });
// }); 


let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('sendButton');

function validateForm() {
    const isPhoneValid = phoneInput.value.trim().length > 0;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
    const isNameValid = nameInput.value.trim().length > 0;

    if (isEmailValid) {
        sendButton.classList.remove('inactive', 'btn');
        sendButton.classList.add('btn-primary');
        sendButton.removeAttribute('disabled'); // Enable the button
    } else {
        sendButton.classList.remove('btn-primary');
        sendButton.classList.add('inactive', 'btn');
        sendButton.setAttribute('disabled', true); // Disable the button
    }
}

function clearForm() {
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    messageInput.value = '';
    validateForm();
}

// Validate form fields on input
[nameInput, emailInput, phoneInput].forEach(input => input.addEventListener('input', validateForm));

document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = {
        to_name: 'yantra world',
        from_name: nameInput.value || 'Anonymous',
        phone_number: phoneInput.value,
        emailInput: emailInput.value,
        message: messageInput.value || 'Details btayi nhi inhone.',
    };

    console.log("Form Data:", formData); // For debugging

    emailjs.init('agTctjTFOnEnXcgOK');

    emailjs.send('service_0kvs63g', 'template_d0mho5f', formData).then(
        function (response) {
            alert('Thanks for informing! We will get in touch with you shortly.');
            clearForm();
        },
        function (err) {
            console.error('FAILED...', err);
        }
    );
});
