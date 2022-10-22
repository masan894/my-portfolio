window.onload = (event) => {
  const myH1 = document.getElementById("myh1");
  let upper = myH1.textContent.toUpperCase();
  let max = upper.length + 30;
  for (let i = 1; i < upper.length; i++) {
    myH1.textContent =
      '<span style="font-size:' +
      max-- +
      'pt; padding-top: 70px;">' +
      upper.charAt(i) +
      "</span>";
  }
};
