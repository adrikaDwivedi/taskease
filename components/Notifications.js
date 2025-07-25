
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function registerForPushNotificationsAsync() {
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Permission for notifications not granted!');
      return;
    }
  } else {
    alert('Must use physical device for notifications');
  }
}

export async function scheduleNotification(seconds = 5) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "📣 Reminder!",
      body: `This is a local notification after ${seconds} seconds.`,
      sound: 'default',
    },
    trigger: { seconds },
  });
}

export function addNotificationListeners(setNotifData = () => {}) {
  const notifListener = Notifications.addNotificationReceivedListener(notification => {
    console.log("Notification received:", notification);
    setNotifData(notification);
  });

  const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
    console.log("Notification response:", response);
  });

  return () => {
    Notifications.removeNotificationSubscription(notifListener);
    Notifications.removeNotificationSubscription(responseListener);
  };
}
