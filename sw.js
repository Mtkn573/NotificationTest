self.addEventListener('install', event => {
    console.log('Service Worker installed');
    self.skipWaiting(); // Activate immediately
});

self.addEventListener('activate', event => {
    console.log('Service Worker activated');
});

self.addEventListener('message', event => {
    if (event.data === 'show-notification') {
        self.registration.showNotification('Hello from Service Worker!', {
            body: 'This notification is from the background.',
            icon: 'https://via.placeholder.com/96',
            vibrate: [200, 100, 200],
            tag: 'demo'
        });
    }
});
