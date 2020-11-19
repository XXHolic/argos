Argos.init({
  url:'http://localhost:6677/argos',
  enableLog: true
})

Sentry.init({
  dsn: "https://1ea46c0309124094908fa0eb69e21afb@o366923.ingest.sentry.io/5169726",
});

window.onload = function() {

  document.querySelector('#eventException').addEventListener('click', () => {
    a +1
  });

  document.querySelector('#regularException').addEventListener('click', () => {
    throw new Error(`Regular exception no. ${Date.now()}`);
  });

  // const arr = new Array(-10)
  // let a = undefinedVariable
  //   const a = 'hell';
  // a.fun();
  // decodeURIComponent('%')

//   Promise.any([
//   Promise.reject(new Error("some error")),
// ]).catch(e => {
//   // console.info({e})
//   throw e;
// });

var node = document.querySelector('#demo');
var refnode = node.nextSibling;
var newnode = document.createTextNode('这就是为何你挂了！');
node.insertBefore(newnode, refnode);

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "http://localhost:6677/fff");
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4) {
//     if (xhr.status == 200) {
//       console.info('success')
//     } else {
//       throw xhr;
//       // console.info('xhr error：',xhr)
//     }
//   }
// };
// xhr.send();

// fetch("http://localhost:6677/argos").then((res) => {
//   if (res.ok) {
//     throw res;
//   }
// }).catch((e) => {
//   throw(e)
//   // console.info('fetch error：',e);
// })

}