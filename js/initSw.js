 // Initialize the service worker
 if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('serviceworker.js', {
         scope: '.'
     }).then(function(registration) {
         // Registration was successful
         console.log('Registro exitoso: ', registration.scope);
     }, function(err) {
         // registration failed :(
         console.log('fallo del serviceWorkewr: ', err);
     });
 }