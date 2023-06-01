let openAppealButton = document.querySelector('.contacts-button');
let appealModal = document.querySelector('.modal.appeal');
let closeAppealButton = appealModal.querySelector('.modal-close');

openAppealButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  appealModal.classList.add('modal-show');
});

closeAppealButton.addEventListener('click', function() {
  appealModal.classList.remove('modal-show');
});

document.addEventListener('keydown', function(evt) {
  if (evt.code === 'Escape') {
    appealModal.classList.remove('modal-show');
  }
});