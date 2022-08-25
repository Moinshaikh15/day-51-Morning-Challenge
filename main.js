let notification = document.querySelector(".notification");
let timer;
let show = () => {
  notification.style.display = "block";
  timer = setTimeout(() => {
    notification.style.display = "none";
  }, 20000);
};

let out = () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    notification.style.display = "none";
  }, 20000);
};
