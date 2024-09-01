function openPDF() {
  window.open('/material/Vishal Sain Resume.pdf', '_blank');
}

const mouseCursor = document.querySelector(".cursor-outline");
const mouseCursorInner = document.querySelector(".cursor-dot");

function scaleCursor(scale) {
  mouseCursor.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

function addCursorEffects(selector, hoverScale) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(element => {
    element.addEventListener('mouseover', () => {
      scaleCursor(hoverScale);
      mouseCursor.classList.add("cursorAnim");
      element.classList.add('hoverColor');
      mouseCursorInner.classList.add('hidden-cursor');
    });
    
    element.addEventListener('mouseleave', () => {
      scaleCursor(1);
      mouseCursor.classList.remove("cursorAnim");
     element.classList.remove('hoverColor');
      mouseCursorInner.classList.remove('hidden-cursor');
    });
  });
}

addCursorEffects('.navlinks div, .navlinks li, .navlinks li img, .underline-animation, .sun, .moon, .menu li a', 2,);

document.addEventListener('click', (e) => {
  if (!e.target.closest('.navlinks div, .navlinks li, .navlinks li img, .underline-animation, .sun, .moon, .menu li a')) {
    scaleCursor(2);
    setTimeout(() => {
      scaleCursor(1);
    }, 200);
  } 
});

window.addEventListener('mousemove', (e) => {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
  mouseCursorInner.style.top = e.pageY + "px";
  mouseCursorInner.style.left = e.pageX + "px";
});

document.addEventListener('mouseleave', () => {
  mouseCursorInner.classList.add('hidden-cursor');
  mouseCursor.classList.add('hidden-cursor');
});

document.addEventListener('mouseenter', () => {
  mouseCursorInner.classList.remove('hidden-cursor');
  mouseCursor.classList.remove('hidden-cursor');
});

const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const applyTheme = (theme) => {
  if (theme === 'dark') {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }
};

const themeCheck = () => {
  if (userTheme) {
    applyTheme(userTheme);
  } else if (systemTheme) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
};

const themeSwitch = (e) => {
  e.stopPropagation();
  const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};

[sunIcon, moonIcon].forEach(icon => {
  icon.addEventListener('click', themeSwitch);
});
themeCheck();

// box animation rotation menupage
const listItems = document.querySelectorAll('#Menu li');

listItems.forEach(item => {
  const anchorElement = item.querySelector('a'); 
  const svgElement = item.querySelector('svg');

    anchorElement.addEventListener('mouseenter', () => {
        gsap.to(svgElement, { rotation: 180+45,
                              duration: 1, 
                              transformOrigin: '50% 50%', 
                              ease:"power1.inout",
                               scale: 1.5
         });
    });

    anchorElement.addEventListener('mouseleave', () => {
        gsap.to(svgElement, { rotation: 0,
                              duration: 1,
                              transformOrigin: '50% ,50%',
                              ease:"power1.inout",
                              scale: 1,
}); });
});