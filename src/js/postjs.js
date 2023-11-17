import  { useEffect } from 'react';

const Postjs = () => {

  useEffect(() => {
    const allHoverImages = document.querySelectorAll('.hover-container div img');
    const imgContainer = document.querySelector('.img-container');
    const header = document.querySelector('header');

    allHoverImages[0].parentElement.classList.add('active');

    allHoverImages.forEach((image) => {
      image.addEventListener('mouseover', () => {
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
      });
    });

    function resetActiveImg() {
      allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
      });
    }

    const handleScroll = () => {
      header.classList.toggle('shadow', window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup event listeners when the component is unmounted
      allHoverImages.forEach((image) => {
        image.removeEventListener('mouseover', () => {
          // handle mouseover event
        });
      });

      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

};

export default Postjs;
