const postData = {
  id: "skd8opo",
  title: "Hello World",
  author: "Akira",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  imageUrl: "https://www.google.com/",
};

function post() {
  const btn = document.querySelector(".btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    console.log("click");
    const customEvent = new CustomEvent("post-event", {
      bubbles: true,
      detail: postData,
    });

    btn.dispatchEvent(customEvent);
  });
}

export default post;
