export default (text = "Hello world") => {
  const element = document.createElement("div");
  element.classList.add('item');
  element.innerHTML = text;

  return element;
};
