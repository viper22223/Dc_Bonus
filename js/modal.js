/*-----------
Save DOM Elements
-----------*/

const modalTriggers = document.querySelectorAll('.modal-trigger');

const modalClose = document.querySelectorAll('.modal-close');

/*-----------
Event Listeners
-----------*/

// Set click event handlers on each of the trigger links.

Array.from(modalTriggers).forEach(trigger => {
  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    // Grab the modal name that should be shown
    const modalName = trigger.dataset.modal;
    // Open that specific modal
    const modal = document.querySelector('.' + modalName);
    modal.classList.add('modal--is-open');
  });
});

// Set click event handlers on the different close modal triggers.

Array.from(modalClose).forEach(closeSymbol => {

  closeSymbol.addEventListener('click', function() {

    // Find the closest modal and close it.
    
    this.closest('.modal').classList.remove('modal--is-open');

  });

});