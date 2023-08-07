function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 

let rancolor = document.querySelectorAll('.rancolor');


rancolor.forEach((item) => {
    item.addEventListener('mouseover', event => {
          event.target.style.color = randomColor();
    });
    item.addEventListener('mouseout', event => {
          event.target.style.color = "white";
    });
})