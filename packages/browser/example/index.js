Argos.init({
  url:'http://localhost:6677/',
  enableLog: true
})

// Sentry.init({
//   dsn: "https://1ea46c0309124094908fa0eb69e21afb@o366923.ingest.sentry.io/5169726",
// });

window.onload = function() {

  document.querySelector('#eventException').addEventListener('click', () => {
    a +1
  });

  document.querySelector('#regularException').addEventListener('click', () => {
    throw new Error(`Regular exception no. ${Date.now()}`);
  });
}