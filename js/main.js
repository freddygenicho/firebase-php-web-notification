var config = {
    apiKey: "AIzaSyDls2l1t2y1UMU9bKQpdZEoNstNJYmY8sU",
    authDomain: "fire-chat-93370.firebaseapp.com",
    databaseURL: "https://fire-chat-93370.firebaseio.com",
    projectId: "fire-chat-93370",
    storageBucket: "fire-chat-93370.appspot.com",
    messagingSenderId: "168789917062"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.requestPermission()
    .then(function () {
        console.log('Notification permission granted.');
        return messaging.getToken();
    })
    .then(function (token) {
        //todo send token to server
        console.log(token); // Display user token
    })
    .catch(function (err) {
        //happens when user denies the permission
        console.log('Unable to get permission to notify.', err);
    });

messaging.onMessage(function (payload) {
    console.log('onMessage', payload);
    alert(payload.notification.title)
});
