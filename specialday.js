// Function to update the checked state of a task and store it in local storage
function updateTaskState(taskId, isChecked) {
    localStorage.setItem(taskId, isChecked);
}

// Function to load and apply the saved checked state from local storage
function loadTaskState() {
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach(checkbox => {
        const taskId = checkbox.getAttribute('id');
        const isChecked = localStorage.getItem(taskId) === 'true';

        checkbox.checked = isChecked;
    });
}

// Add event listener to checkboxes
const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const taskId = this.getAttribute('id');
        const isChecked = this.checked;

        updateTaskState(taskId, isChecked);
    });
});

// Load and apply the saved checked state
loadTaskState();
