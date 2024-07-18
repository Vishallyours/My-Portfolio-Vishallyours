function openPDF() {
  window.open('/material/Vishal sain 2024.pdf', '_blank');
}

const mouseCursor = document.querySelector(".cursor-outline");
const mouseCursorInner = document.querySelector(".cursor-dot");

function scaleCursor(scale) {
  mouseCursor.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

function addCursorEffects(selector, hoverScale, clickScale) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(element => {
    element.addEventListener('mouseover', () => {
      scaleCursor(hoverScale);
      mouseCursor.classList.add("cursorAnim");
      mouseCursorInner.classList.add('hidden-cursor');
    });

    element.addEventListener('mouseleave', () => {
      scaleCursor(1);
      mouseCursor.classList.remove("cursorAnim");
      mouseCursorInner.classList.remove('hidden-cursor');
    });

    element.addEventListener('click', (e) => {
      e.stopPropagation();
      scaleCursor(clickScale);
      setTimeout(() => {
        scaleCursor(hoverScale);
      }, 200);
    });
  });
}

addCursorEffects('.navlinks div, .navlinks li, .navlinks li img, .underline-animation, .sun, .moon', 2, 4);

document.addEventListener('click', (e) => {
  if (!e.target.closest('.navlinks div, .navlinks li, .navlinks li img, .underline-animation, .sun, .moon')) {
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

const themeSwitchANDScale4x = () => {
  const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);

  // Scale the cursor to 4x then back to 2x
  scaleCursor(4);
  setTimeout(() => {
    scaleCursor(2);
  }, 200);
};

[sunIcon, moonIcon].forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

themeCheck();
