const notes = document.querySelectorAll('.note');
const notePopup = document.querySelector('.note-popup');
const popupTitle = document.querySelector('.popup-title');
const popupBody = document.querySelector('.popup-body');

notes.forEach((note, index) => {
    note.addEventListener('click', () => {
        popupTitle.textContent = note.querySelector('.note-title').textContent;
        popupBody.textContent = note.querySelector('.note-body').textContent;

        // Create and append the close button to the popup
        const closeButton = document.createElement('span');
        closeButton.textContent = 'X';
        closeButton.className = 'close-button';
        closeButton.addEventListener('click', () => {
            notePopup.style.display = 'none';
        });
        popupTitle.appendChild(closeButton);

        notePopup.style.display = 'block';
    });
});

function closeNotePopup() {
    notePopup.style.display = 'none';
}
