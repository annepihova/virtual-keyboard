// animation
document.addEventListener('keydown', (event) => {
  const keys = document.querySelectorAll('.key');
  const keysUp = document.querySelectorAll('.case-up');
  const keysDown = document.querySelectorAll('.case-down');
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].classList.contains(event.code)) {
      keys[i].classList.add('active');
    }
  }
  document.addEventListener('keyup', () => {
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].classList.contains(event.code)) {
        keys[i].classList.remove('active');
      }
    }
  });

  if (event.code === 'CapsLock') {
    for (let i = 0; i < keysUp.length; i += 1) {
      keysUp[i].classList.toggle('hidden');
    }
    for (let i = 0; i < keysDown.length; i += 1) {
      keysDown[i].classList.toggle('hidden');
    }
  }

  if (event.code === 'ShiftLeft') {
    for (let i = 0; i < keysUp.length; i += 1) {
      keysUp[i].classList.add('hidden');
    }
    for (let i = 0; i < keysDown.length; i += 1) {
      keysDown[i].classList.remove('hidden');
    }

    document.addEventListener('keyup', () => {
      if (event.code === 'ShiftLeft') {
        for (let i = 0; i < keysUp.length; i += 1) {
          keysUp[i].classList.remove('hidden');
        }
        for (let i = 0; i < keysDown.length; i += 1) {
          keysDown[i].classList.add('hidden');
        }
      }
    });
  }

  if (event.code === 'ShiftRight') {
    for (let i = 0; i < keysUp.length; i += 1) {
      keysUp[i].classList.add('hidden');
    }
    for (let i = 0; i < keysDown.length; i += 1) {
      keysDown[i].classList.remove('hidden');
    }

    document.addEventListener('keyup', () => {
      if (event.code === 'ShiftRight') {
        for (let i = 0; i < keysUp.length; i += 1) {
          keysUp[i].classList.remove('hidden');
        }
        for (let i = 0; i < keysDown.length; i += 1) {
          keysDown[i].classList.add('hidden');
        }
      }
    });
  }

  const textarea = document.querySelector('.textarea');
  textarea.focus();

  if (event.code === 'Tab') {
    textarea.value += '    ';
  }

  let arrow;
  if (event.code === 'ArrowUp') {
    arrow = document.querySelector('.ArrowUp');
    textarea.value += arrow.innerText;
  } else if (event.code === 'ArrowDown') {
    arrow = document.querySelector('.ArrowDown');
    textarea.value += arrow.innerText;
  } else if (event.code === 'ArrowLeft') {
    arrow = document.querySelector('.ArrowLeft');
    textarea.value += arrow.innerText;
  } else if (event.code === 'ArrowRight') {
    arrow = document.querySelector('.ArrowRight');
    textarea.value += arrow.innerText;
  }
});

// click on virtual keyboard
const clickOnVirtualKeyboard = () => {
  const keys = document.querySelectorAll('.key');
  const textarea = document.querySelector('.textarea');
  const tab = document.querySelector('.Tab');
  const space = document.querySelector('.Space');
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].addEventListener('click', () => {
      for (let j = 0; j < keys[i].children.length; j += 1) {
        if (!(keys[i].children[j].classList.contains('hidden'))) {
          for (let k = 0; k < keys[i].children[j].children.length; k += 1) {
            if (!(keys[i].children[j].children[k].classList.contains('hidden'))) {
              textarea.value += keys[i].children[j].children[k].textContent;
            }
          }
        }
      }
    });
  }

  const capsLock = document.querySelector('.CapsLock');
  const arrows = document.querySelectorAll('.arrow');
  capsLock.addEventListener('click', () => {
    const keysUp = document.querySelectorAll('.case-up');
    const keysDown = document.querySelectorAll('.case-down');
    for (let i = 0; i < keysUp.length; i += 1) {
      keysUp[i].classList.toggle('hidden');
    }
    for (let i = 0; i < keysDown.length; i += 1) {
      keysDown[i].classList.toggle('hidden');
    }
  });

  tab.addEventListener('click', () => {
    textarea.value += '    ';
  });

  space.addEventListener('click', () => {
    textarea.value += ' ';
  });

  for (let i = 0; i < arrows.length; i += 1) {
    arrows[i].addEventListener('click', () => {
      textarea.value += arrows[i].textContent;
    });
  }

  const enter = document.querySelector('.Enter');
  enter.addEventListener('click', () => {
    textarea.value += '\n';
  });

  const backspace = document.querySelector('.Backspace');
  backspace.addEventListener('click', () => {
    const cursorPosition = textarea.selectionStart;
    const textBeforeCursor = textarea.value.slice(0, cursorPosition);
    const textAfterCursor = textarea.value.slice(cursorPosition, textarea.value.length);
    textarea.value = `${textBeforeCursor.slice(0, -1)}${textAfterCursor}`;
    textarea.selectionStart = cursorPosition + 1;
    textarea.selectionEnd = cursorPosition + 1;
  });
};

// change languages

const changeLanguages = () => {
  let flag = false;
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ControlLeft') {
      flag = true;
    }

    if (event.code === 'AltLeft' && flag) {
      const keys = document.querySelectorAll('.key');
      flag = false;
      for (let i = 0; i < keys.length; i += 1) {
        for (let j = 0; j < keys[i].children.length; j += 1) {
          keys[i].children[j].classList.toggle('hidden');
          const keyAlways = document.querySelectorAll('.always');
          for (let k = 0; k < keyAlways.length; k += 1) {
            keyAlways[k].classList.remove('hidden');
          }
        }
      }
    }
  });
};
changeLanguages();
clickOnVirtualKeyboard();
