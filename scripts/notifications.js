function sendNotification() {

  var notification = Notification || mozNotification ||
    webkitNotification;
  if ('undefined' === typeof (notification)) {
    alert('Web notification not supported');
  } else {
    notification.requestPermission(function (permission) {
      if (Notification.permission === "granted") {
        new Notification('Hola');
      }
    });
  }
};

sendNotification();