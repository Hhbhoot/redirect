let URL =
  "https://play.google.com/store/apps/details?id=net.apex_designs.payback2&hl=en_US";

function redirectToPlayStore() {
  setTimeout(() => {
    window.location.href = URL;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", redirectToPlayStore);
