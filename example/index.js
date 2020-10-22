// console.info('Argos',Argos)
Argos.init({
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