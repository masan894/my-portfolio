//window.onload = function () {
  const title1 = document.getElementById("title1");
  let title1Lower = title1.textContent;
  let title1Upper = title1Lower.toUpperCase();
  let max = title1Upper.length + 10;
  for (let i = 0; i < title1Upper.length; i++) {
    document.write(
      '<span-style="font-size:' +
        max-- +
        'pt">' +
        title1Upper.charAt(i) +
        "</span>"
    );
  }
};
