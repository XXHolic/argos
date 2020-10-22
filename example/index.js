// console.info('Argos',Argos)
Argos.init({
  url:'http://localhost:2233/',
  enableLog: true
})

window.onload = function() {

  document.querySelector('#regularException').addEventListener('click', () => {
    throw new Error(`Regular exception no. ${Date.now()}`);
  });

  document.querySelector('#eventException').addEventListener('click', () => {
    throw new Error(`Regular exception no. ${Date.now()}`);
  });
}