function toggleMenu() {
    const navbar = document.getElementById("navbar");
    const menuIcon = document.querySelector(".menu-icon");
  
    navbar.classList.toggle("active");
   
    menuIcon.innerHTML = navbar.classList.contains("active") ? '<span class="icon" style="color: white; font-size: 24px; ">&#10005;</span>' : '<span style="color: white;font-size:24px;">&#9776;</span>';

  }
  
  const solutionList = () => {
    const list = document.getElementById("solution-container");
    const solutionButton = document.querySelector(".solution");
  
    if (list.style.display === "none") {
      list.style.display = "block";
      solutionButton.classList.add("open");
      document.querySelector(".menu-icon").classList.add("invisble");
    } else {
      list.style.display = "none";
      solutionButton.classList.remove("open");
      document.querySelector(".menu-icon").classList.remove("invisble");
    }
  };

// ----------------------------------------------------------------section-2----------------------------




  // --------------------------------------------------------------section-3--------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  function showBuild(buildType) {
      var websiteElements = document.querySelector('.build-website');
      var mobileElements = document.querySelector('.build-mobile');
    
      if (buildType === 'build-website') {
        document.querySelector('.build-topic-website').style.backgroundColor = '#f8f8ff';
        document.querySelector('.build-topic-website').style.color= '#121212';
        document.querySelector('.build-topic-mobile').style.backgroundColor = '#121212';
        document.querySelector('.build-topic-mobile').style.color = '#f8f8ff';
          websiteElements.style.display = 'flex';
          mobileElements.style.display = 'none';
      } else if (buildType === 'build-mobile') {
        document.querySelector('.build-topic-mobile').style.backgroundColor = '#f8f8ff';
        document.querySelector('.build-topic-mobile').style.color = '#121212';
        document.querySelector('.build-topic-website').style.backgroundColor = '#121212';
        document.querySelector('.build-topic-website').style.color = '#f8f8ff';
          websiteElements.style.display = 'none';
          mobileElements.style.display = 'flex';
      }
  }

  // Set the default content to be the website
  showBuild('build-website');

  // Event listeners for the buttons
  document.querySelector('.build-topic-website').addEventListener('click', function() {
      showBuild('build-website');
  });

  document.querySelector('.build-topic-mobile').addEventListener('click', function() {
      showBuild('build-mobile');
  });


// =====================================================================section-4=================================================

function hideAll() {
  
  document.querySelectorAll(".grow-image img").forEach(image => image.classList.add("hidden"));
  document.querySelectorAll(".grow-content > div").forEach(content => content.classList.add("hidden"));
}
function hidecolorButton(hideButton) {
  document.querySelectorAll(".grow-dashboard li").forEach(button => {
    button.style.backgroundColor = '#121212';  // Reset background color
    button.style.borderRadius = '1px';  // Reset border radius
    button.style.color = '#f8f8ff';  // Reset text color
  });
}

function showGrow(growImage, growContent) {
  
  hideAll();
  document.querySelector(`.${growImage}`).classList.remove("hidden");
  document.querySelector(`.${growContent}`).classList.remove("hidden");
}

function showColorButton(growButton){
  document.querySelector(`.${growButton}`).style.backgroundColor='#f8f8ff';
  document.querySelector(`.${growButton}`).style.borderRadius = '4px';
  document.querySelector(`.${growButton}`).style.color='#121212';
}

showGrow('email-marketing-image', 'email-marketing-content');


document.querySelector('.email-marketing').addEventListener('click', function() {
  hidecolorButton('email-marketing');
  showGrow('email-marketing-image','email-marketing-content');
  showColorButton('email-marketing');
  
});

document.querySelector('.seo').addEventListener('click', function() {
  hidecolorButton('seo');
  showGrow('seo-image','seo-content');
  showColorButton('seo');
});

document.querySelector('.content-marketing').addEventListener('click', function() {
  hidecolorButton('content-marketing');
  showGrow('content-marketing-image','content-marketing-content');
  showColorButton('content-marketing');
});

document.querySelector('.sales').addEventListener('click', function() {
  hidecolorButton();
  showGrow('sales-image','sales-content');
  showColorButton('sales');
});

document.querySelector('.pay-per-click').addEventListener('click', function() {
  hidecolorButton();
  showGrow('pay-per-click-image', 'pay-per-click-content');  // Corrected class name
  showColorButton('pay-per-click');
});


document.querySelector('.social-media-marketing').addEventListener('click', function() {
  hidecolorButton();
  showGrow('social-media-marketing-image','social-media-marketing-content');
  showColorButton('social-media-marketing');
});

document.querySelector('.inbound-marketing').addEventListener('click', function() {
  hidecolorButton();
  showGrow('inbound-marketing-image','inbound-marketing-content');
  showColorButton('inbound-marketing');
});

document.querySelector('.search-engine-marketing').addEventListener('click', function() {
  hidecolorButton();
  showGrow('search-engine-marketing-image','search-engine-marketing-content');
  showColorButton('search-engine-marketing');
});


});

// --------------------------------------mobile view

document.addEventListener('DOMContentLoaded', function () {
  const listItems = document.querySelectorAll('.grow-dashboard-mobile li');
  let currentIndex = 0;

  // Function to show the current item and update button visibility
  function showCurrentItem() {
    listItems.forEach((item, index) => {
      if (index === currentIndex) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    // Get the corresponding image and content elements
    const growImage = document.querySelector(`.${listItems[currentIndex].classList[0]}-image`);
    const growContent = document.querySelector(`.${listItems[currentIndex].classList[0]}-content`);

    // Hide all images and content
    document.querySelectorAll(".grow-image img").forEach(image => image.classList.add("hidden"));
    document.querySelectorAll(".grow-content > div").forEach(content => content.classList.add("hidden"));

    // Show the current image and content
    growImage.classList.remove("hidden");
    growContent.classList.remove("hidden");

    // Update button visibility
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === listItems.length - 1 ? 'none' : 'block';
  }

  // Show the initial state
  showCurrentItem();

  // Function to show the previous item
  window.showPrevious = function () {
    if (currentIndex > 0) {
      currentIndex--;
      showCurrentItem();
    }
  };

  // Function to show the next item
  window.showNext = function () {
    if (currentIndex < listItems.length - 1) {
      currentIndex++;
      showCurrentItem();
    }
  };
});


/* ----------------------------------------------product-card section-------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  const courseSection = document.querySelector('.course-section');
  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');

  let scrollAmount = 0;

  rightButton.addEventListener('click', function () {
    scrollAmount += 600; 
    courseSection.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  leftButton.addEventListener('click', function () {
    scrollAmount -= 600;
    courseSection.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});