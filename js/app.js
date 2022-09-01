// START NAVBAR TOGGLER IN MOBILE VIEW 
const navbarblock = document.getElementById('navbarblocks');
const navbartoggler = document.querySelector('.nav-btns').addEventListener('click',()=>{
    navbarblock.classList.toggle('active');
});

const btnclose = document.querySelector('.btn-close').addEventListener('click',()=>{
    navbarblock.classList.toggle('active');
    
});
// END NAVBAR TOGGLER IN MOBILE VIEW 

// START FOOTER SECTION 
const year = document.getElementById('years');
var date = new Date().getUTCFullYear();
year.textContent = date;
// END FOOTER SECTION 