$(document).ready(function ($) {

  // MENU
  function fullNav(toggleBtn, navBlock) {
    $(toggleBtn).on('click', function() {
      scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      $(this).toggleClass('active')
      $(navBlock).toggleClass('active')
    })
  }
  fullNav('.header_burger_btn', '.header_full-nav')

  // Latest Jobs Slider

  const latestJobs = new Swiper('.latest-jobs_slider', {
    spaceBetween: 26,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.latest-jobs_slider-nav',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      1600: {
        slidesPerView: 3.4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      }
    }
  })

  // Testimonials Slider 
  
  const testimonials = new Swiper('.testimonials_slider', {
    spaceBetween: 40,
    slidesPerView: 1,
    loop: true,
    loopedSlides: 3,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  })

  function sectorPopup(open) {
    const openBtn = document.querySelectorAll(open)
    const popup = document.querySelector('.sector-popup')

    openBtn.forEach(btn => {
      $(btn).on('click', function() {
        popup.classList.add('active')
      })
    })
    $('.sector-popup_top .btn').on('click', function() {
      popup.classList.remove('active')
    })
  }

  sectorPopup('.sectors_card_wrapp .btn')


  // Insights Slider 
    
  const insights = new Swiper('.insights_slider', {
    spaceBetween: 40,
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      }
    }
  })
  
  const history = new Swiper('.history-slider', {
    spaceBetween: 40,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.history-pagination',
      type: 'bullets',
      clickable: true
    },
  }) 


  // let mql = window.matchMedia('(max-width: 1100px)');
  const sectors = new Swiper('.sectors_grid', {
    spaceBetween: 29,
    slidesPerView: 1,
    pagination: {
      el: '.sectors_grid-nav-block',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      1100: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      700: {
        slidesPerView: 2,
      }
    }
  })

  // Auto Grow Textarea in footer

  $('.contact_textarea').autogrow()



  // UPLOAD CV POPUP

  $('.candidate-hub-hero_desc .btn').click(function () {
    $('.upload-cv').addClass('active')
  })

  $('.upload-cv_bg').click(function () {
    $('.upload-cv').removeClass('active')
  })

  $('.partners_grid_card').click(function () {
    $('.partners-popup').addClass('active')
  })

  $('.partners-popup_top .btn').click(function () {
    $('.partners-popup').removeClass('active')
  })

  $('.partners-popup_bottom .btn').click(function () {
    $('.partners-popup').removeClass('active')
  })

  


  if ($('.search-job_box-form')) {
    $('.search-job_sector').select2({
      placeholder: 'Sector'
    });
    $('.search-job_location').select2({
      placeholder: 'Location'
    });
    $('.search-job_job-type').select2({
      placeholder: 'Job Type'
    });
    $('.search-job_min-salary').select2({
      placeholder: 'Min. Salary'
    });
    $('.search-job_max-salary').select2({
      placeholder: 'Max. Salary'
    });
  }

  if($('.jobs-top-sort')) {
    $('.jobs-top-sort').select2()
  }

  if($('.search-job_job-sector-interest')) {
    $('.search-job_job-sector-interest').select2({
      placeholder: 'Sector Interest In'
    })
  }

  if($('.search-job_job-location-preference')) {
    $('.search-job_job-location-preference').select2({
      placeholder: 'Location Preference'
    })
  }


}); // end of ready