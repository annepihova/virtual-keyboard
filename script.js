// animation
document.addEventListener('keydown', (event) => {
  const keys = document.querySelectorAll('.key');
  const keysUp = document.querySelectorAll('.case-up');
  const keysDown = document.querySelectorAll('.case-down');
  for (const key of keys) {
    if (key.classList.contains(event.code)) {
      key.classList.add('active');
    }
  }
  document.addEventListener('keyup', () => {
    for (const key of keys) {
      if (key.classList.contains(event.code)) {
        key.classList.remove('active');
      }
    }
  });

  if (event.code === 'CapsLock') {
    for (const keyUp of keysUp) {
      keyUp.classList.toggle('hidden');
    }
    for (const keyDown of keysDown) {
      keyDown.classList.toggle('hidden');
    }
  }

  if (event.code === 'ShiftLeft') {
    for (const keyUp of keysUp) {
      keyUp.classList.add('hidden');
    }
    for (const keyDown of keysDown) {
      keyDown.classList.remove('hidden');
    }

    document.addEventListener('keyup', () => {
      if (event.code === 'ShiftLeft') {
        for (const keyUp of keysUp) {
          keyUp.classList.remove('hidden');
        }
        for (const keyDown of keysDown) {
          keyDown.classList.add('hidden');
        }
      }
    });
  }

  if (event.code === 'ShiftRight') {
    for (const keyUp of keysUp) {
      keyUp.classList.add('hidden');
    }
    for (const keyDown of keysDown) {
      keyDown.classList.remove('hidden');
    }

    document.addEventListener('keyup', () => {
      if (event.code === 'ShiftRight') {
        for (const keyUp of keysUp) {
          keyUp.classList.remove('hidden');
        }
        for (const keyDown of keysDown) {
          keyDown.classList.add('hidden');
        }
      }
    });
  }

  if (event.code === 'Tab') {
    const textarea = document.querySelector('.textarea');
    textarea.textContent += '    ';
  }
});

// click on virtual keyboard
const clickOnVirtualKeyboard = () => {
  const keys = document.querySelectorAll('.key');
  const textarea = document.querySelector('.textarea');
  const tab = document.querySelector('.Tab');
  for (const key of keys) {
    key.addEventListener('click', () => {
      for (const child of key.children) {
        if (!(child.classList.contains('hidden'))) {
          for (const kid of child.children) {
            if (!(kid.classList.contains('hidden'))) {
              textarea.textContent += kid.textContent;
            }
          }
        }
      }
    });
  }

  const capsLock = document.querySelector('.CapsLock');
  capsLock.addEventListener('click', () => {
    const keysUp = document.querySelectorAll('.case-up');
    const keysDown = document.querySelectorAll('.case-down');
    for (const keyUp of keysUp) {
      keyUp.classList.toggle('hidden');
    }
    for (const keyDown of keysDown) {
      keyDown.classList.toggle('hidden');
    }
  });

  tab.addEventListener('click', () => {
    textarea.textContent += '    ';
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
      for (const child of keys) {
        for (const kid of child.children) {
          kid.classList.toggle('hidden');
          const keyAlways = document.querySelectorAll('.always');
          for (const key of keyAlways) {
            key.classList.remove('hidden');
          }
        }
      }
    }
  });
};
changeLanguages();
clickOnVirtualKeyboard();
