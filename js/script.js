'use strict'

function openBtn() { 
  document.getElementById('hamburger-menu').style.left = '0';
  document.getElementById('hero__contant').style.marginLeft = '300px'
  document.body.style.overflow = 'hidden';
}

function closeBtn() { 
  document.getElementById('hamburger-menu').style.left = '-100%';
  document.getElementById('hero__contant').style.marginLeft = '0'
  document.body.style.overflow = 'visible';
}