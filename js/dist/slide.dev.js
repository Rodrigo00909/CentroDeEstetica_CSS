"use strict";

var slides = document.querySelectorAll('.slide');
var next = document.querySelector('#next');
var prev = document.querySelector('#prev');
var auto = true; // Auto scroll

var intervalTime = 4500;
var slideInterval;

var nextSlide = function nextSlide() {
  var current = document.querySelector('.current');
  current.classList.remove('current');

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }

  setTimeout(function () {
    return current.classList.remove('current');
  });
};

var prevSlide = function prevSlide() {
  var current = document.querySelector('.current');
  current.classList.remove('current');

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }

  setTimeout(function () {
    return current.classList.remove('current');
  });
};

next.addEventListener('click', function (e) {
  nextSlide();

  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener('click', function (e) {
  prevSlide();

  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}