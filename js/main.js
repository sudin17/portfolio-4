let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle('move')
}

// Review Swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // email js
  function validate() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (name.value == "" || email.value == "" || msg.value == ""){
        emptyerror();
      } else  {
        sendmail(name.value, email.value, msg.value);
        success(); 
      }
    })
  }

  validate();

  function emptyerror() {
    swal({
      title: "error tolol!",
      text: "isi kolomnya bego! jangan dikosongkan taikk",
      icon: "anj lo",
    });
  }

  // Header Background Change On Scroll
  let header = document.querySelector('header')

  window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0);
  });