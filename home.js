function setTextContent(selector, text) {
  const element = document.querySelector(selector);
  element.textContent = text;
}

function home() {
  document.addEventListener("post-event", (e) => {
    setTextContent(".title", e.detail.title);
    setTextContent(".author", e.detail.author);
    setTextContent(".description", e.detail.description);
    setTextContent(".imageUrl", e.detail.imageUrl);
  });
}

export default home;
