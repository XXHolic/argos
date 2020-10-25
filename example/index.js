// console.info('Argos',Argos)
// Argos.init({
//   // url:'http://localhost:2233/',
//   url:'https://1ea46c0309124094908fa0eb69e21afb@o366923.ingest.sentry.io/5169726',
//   enableLog: true
// })

Sentry.init({
  dsn: "https://1ea46c0309124094908fa0eb69e21afb@o366923.ingest.sentry.io/5169726",
});

function test2() {
  console.trace()
  console.info('dsd')
}

function test() {
  test2()
}

window.onload = function() {
  // window.onerror = function(message, source, lineno, colno, error) {
  //   console.info({message, source, lineno, colno, error})
  // }
  // window.addEventListener('error', function(event) {
    // console.info('event',event)
  // })



  document.querySelector('#eventException').addEventListener('click', () => {
    try {
      throw new Error(`Regular exception no. ${Date.now()}`);
    } catch (error) {
      throw error
    }
  });

  document.querySelector('#regularException').addEventListener('click', () => {
    throw new Error(`Regular exception no. ${Date.now()}`);

  });
}