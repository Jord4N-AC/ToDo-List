export default function showMessage(
  message, element, elementClass, titleAttribute, highlightClass, taskInput,
) {
  if (message.classList.contains('show')) {
    message.classList.toggle('show');
  }

  message.classList.toggle('show');
  element.classList.toggle(highlightClass);

  setTimeout(() => { message.classList.toggle('show'); }, 1000);

  if (document.getElementsByClassName(elementClass).length > 0) {
    document.getElementsByClassName(elementClass)[0].removeAttribute('title');
    document.getElementsByClassName(elementClass)[0].classList.toggle(elementClass);
  }

  element.classList.toggle(elementClass);
  element.title = titleAttribute;

  taskInput.blur();

  setTimeout(() => {
    element.scrollIntoView();
  }, 80);

  setTimeout(() => {
    element.classList.toggle(highlightClass);
    taskInput.focus();
    document.body.scrollTop = 0;
  }, 900);
}
