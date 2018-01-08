// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
var config = {
    apiKey: "AIzaSyDls2l1t2y1UMU9bKQpdZEoNstNJYmY8sU",
    authDomain: "fire-chat-93370.firebaseapp.com",
    databaseURL: "https://fire-chat-93370.firebaseio.com",
    projectId: "fire-chat-93370",
    storageBucket: "fire-chat-93370.appspot.com",
    messagingSenderId: "168789917062"
};

firebase.initializeApp(config);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {

    const title = 'Firebase Web Notification';
    const options = {
        body: payload.data.body,
        icon: 'images/icon.png',
        badge: 'images/badge.png'
    };

    const notificationPromise = self.registration.showNotification(title, options);
    return event.waitUntil(notificationPromise);

});