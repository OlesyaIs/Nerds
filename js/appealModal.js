const openAppealButton = document.querySelector('.contacts-button');
const appealModal = document.querySelector('.modal.appeal');
const appealForm = appealModal.querySelector('.appeal-form');
const appealName = appealForm.querySelector('[name="appeal-name"]');
const appealEmail = appealForm.querySelector('[name="appeal-email"]');
const appealText = appealForm.querySelector('[name="appeal-text"]');
const closeAppealButton = appealModal.querySelector('.appeal-close');

let isStorageSupport = true;
let nameFromStorage = "";
let emailFromStorage = "";

try {
  nameFromStorage = localStorage.getItem('name');
  emailFromStorage = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

openAppealButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  appealModal.classList.add('modal-show');
  if (nameFromStorage) {
    appealName.value = localStorage.getItem('name');
    if (emailFromStorage) {
      appealEmail.value = localStorage.getItem('email');
      appealText.focus();
    } else {
      appealEmail.focus();
    }
  } else {
    appealName.focus();
  }
});

appealForm.addEventListener('submit', function(evt) {
  if (!appealName.value || !appealEmail.value || !appealText.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', appealName.value);
      localStorage.setItem('email', appealEmail.value);
    }
  }
});

closeAppealButton.addEventListener('click', function() {
  appealModal.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.code === 'Escape') {
    appealModal.classList.remove('modal-show');
  }
});
