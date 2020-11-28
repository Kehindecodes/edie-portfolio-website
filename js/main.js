
// make the menu button work

const menuBtn = document.querySelector('.menuBtn');
const navItems =  document.querySelector('.mainNav');

menuBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    menuBtn.classList.toggle('active');
   
    if(menuBtn.classList.contains('active')){
        navItems.classList.add('active');
    }else{
        navItems.classList.remove('active')
    }

})