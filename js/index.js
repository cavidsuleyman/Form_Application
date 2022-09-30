window.addEventListener("load", () => {
  const input = document.querySelectorAll(".input-box input");
  const icon = document.querySelectorAll(".input-box i");
  const eye = document.querySelector(".eye i");
  const myInput = document.querySelector("#myInput");

  input.forEach((v, i) => {
    v.addEventListener("focus", () => {
      icon[i].classList.add("icon-color");
    });
    v.addEventListener("blur", () => {
      icon[i].classList.remove("icon-color");
    });
  });

  eye.addEventListener("click", () => {
    eye.classList =
      myInput.type === "password" ? "fas fa-eye" : "fas fa-eye-slash";
    myInput.type = myInput.type === "password" ? "text" : "password";
  });
});
