export default function updateCounters(
  allCounter, pendingCounter, completedCounter,
  allTasks = document.getElementsByClassName('task-item').length,
  completedTasks = document.getElementsByClassName('completed-container').length,
) {
  allCounter.innerHTML = allTasks;
  pendingCounter.innerHTML = allTasks - completedTasks;
  completedCounter.innerHTML = completedTasks;
}