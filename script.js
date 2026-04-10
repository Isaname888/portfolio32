const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("mousemove", (e) => {
  const bg = document.querySelector(".bg");
  if(bg){
    bg.style.transform =
      `translate(${e.clientX * 0.02}px, ${e.clientY * 0.02}px)`;
  }
});
