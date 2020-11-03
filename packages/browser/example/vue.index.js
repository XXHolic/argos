// console.info('Argos',Argos)
const VueIntegration = Argos.VueIntegration;
Argos.init({
  url:'http://localhost:2233/',
  enableLog: true,
  integrations:[new VueIntegration({})]
})

// Sentry.init({
//   dsn: "https://1ea46c0309124094908fa0eb69e21afb@o366923.ingest.sentry.io/5169726",
// });

window.onload = function() {

  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    methods:{
      eventException:function() {
        a +1
      },
      regularException:function() {
        throw new Error(`Regular exception no. ${Date.now()}`);
      }
    }
  })
}