

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

// Function to check if all required fields in the current page are filled
function checkRequiredFields(page) {
  const fields = page.querySelectorAll('input[required], select[required]');
  for (let field of fields) {
    if (!field.value.trim()) {
      return false;
    }
  }
  return true;
}

// Function to communicate with the database (simulated with a console log)
function submitFormData(formData) {
  // Simulated database communication
  console.log("Sending data to the database:", formData);
}

nextBtnFirst.addEventListener("click", function(event) {
  event.preventDefault();
  if (checkRequiredFields(document.querySelector(".slide-page"))) {
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  } else {
    alert("Please fill in all required fields.");
  }
});

// Add similar validation checks for other next buttons

submitBtn.addEventListener("click", function() {
  if (checkRequiredFields(document.querySelector(".slide-page:last-of-type"))) {
    // If all required fields are filled, submit the form
    
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        setTimeout(function(){
          alert("Your Form Successfully Signed up");
          location.reload();
        },800);
  }else {
    alert("Please fill in all required fields.");
  }


  const password = document.querySelector("input[name='password']");
  const confirmPassword = document.querySelector("input[name='confirmPassword']");
  
  // Check if passwords match
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match. Please re-enter.");
    return;
  }

  // Check if all required fields are filled
  if (checkRequiredFields(document.querySelector(".slide-page:last-of-type"))) {
    // If all required fields are filled, submit the form
    submitFormData(new FormData(document.querySelector("form")));
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    setTimeout(function() {
      alert("Your Form Successfully Signed up");
      location.reload();
    }, 800);
  } else {
    alert("Please fill in all required fields.");
  }
});

// Add event listeners for previous buttons similarly with validation checks
