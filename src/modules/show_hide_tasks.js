// Toggle fa-eye-slash class for icons that are different that the current clicked
function toggleEyeSlash(eyeIcons, event) {
  eyeIcons.forEach((icon) => {
    if (icon !== event.target && !icon.classList.contains('fa-eye-slash')) {
      icon.classList.toggle('fa-eye-slash');
    }
  });
}

// Set display propery for a group of tasks
function setDisplay(task, display) {
  task.forEach((task) => {
    task.style.display = display;
  });
}

// Show All Tasks when clicking eye icon
export function showAllTasks(
  event, eyeIcons,
  allTasks = document.querySelectorAll('.task-item'),
) {
  if (allTasks.length) {
    toggleEyeSlash(eyeIcons, event);

    event.target.classList.remove('fa-eye-slash');

    setDisplay(allTasks, 'flex');
  }
}

// Show Pending when clicking eye icon
export function showPendingTasks(
  event, eyeIcons,
  allTasks = document.querySelectorAll('.task-item'),
  completeTasks = document.querySelectorAll('.completed-container'),
) {
  if (
    allTasks.length - completeTasks.length > 0
    && allTasks.length !== completeTasks.length
  ) {
    toggleEyeSlash(eyeIcons, event);

    event.target.classList.toggle('fa-eye-slash');

    setDisplay(allTasks, 'flex');

    if (event.target.classList.contains('fa-eye-slash')) {
      setDisplay(completeTasks, 'flex');
      eyeIcons[0].classList.toggle('fa-eye-slash');
    } else {
      setDisplay(completeTasks, 'none');
    }
  }
}

// Show Complete Tasks when clicking eye icon
export function showCompleteTasks(
  event, eyeIcons,
  allTasks = document.querySelectorAll('.task-item'),
  completeTasks = document.querySelectorAll('.completed-container'),
) {
  if (completeTasks.length) {
    toggleEyeSlash(eyeIcons, event);

    event.target.classList.toggle('fa-eye-slash');

    setDisplay(allTasks, 'flex');

    if (event.target.classList.contains('fa-eye-slash')) {
      allTasks.forEach((task) => {
        if (!task.classList.contains('completed-container')) {
          task.style.display = 'flex';
        }
      });
      eyeIcons[0].classList.toggle('fa-eye-slash');
    } else {
      allTasks.forEach((task) => {
        if (!task.classList.contains('completed-container')) {
          task.style.display = 'none';
        }
      });
    }
  }
}