
const allHoverImages = document.querySelectorAll('.hover-container div img')
const imgContainer = document.querySelector('.img-container')

window.addEventListener('DOMContentLoaded', ()=>{
    allHoverImages[0],parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) =>{
    img.parentElement.classList.remove('active');
})
}

    let header = document.querySelector('header')
    
    window.addEventListener("scroll", () =>{
        header.classList.toggle("shadow", window.scrollY>0);
    });
