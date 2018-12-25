export default (text = "Hello world") => {
  const element = document.createElement("div");
  
  element.classList.add('display-1');
  element.innerHTML = text;
  
  return element;
};
