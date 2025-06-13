self.addEventListener(`install`, function (event) {
    self.skipWaiting()
})
self.addEventListener(`message`, function (event) {
    if (event.data.type == `showNotification`) {
        self.registration.showNotification(`NotificationTest`, {
            body: event.data.body,
            icon: `https://via.placeholder.com/96`
        })
    }
})