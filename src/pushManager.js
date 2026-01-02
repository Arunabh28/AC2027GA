// pushManager.js
// Small helper to request Notification permission and attempt push subscription.
// NOTE: For real push notifications you need a server that provides a VAPID key pair
// and endpoint. Replace VAPID_PUBLIC_KEY with your base64 url-safe public key.

const VAPID_PUBLIC_KEY = '<YOUR_PUBLIC_VAPID_KEY_HERE>'; // replace with real key

// utility to convert base64 public key to Uint8Array
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export async function initPush() {
  if (!('serviceWorker' in navigator)) return;
  if (!('PushManager' in window)) return;

  try {
    const registration = await navigator.serviceWorker.ready;

    // Request permission if needed
    if (Notification.permission === 'default') {
      await Notification.requestPermission();
    }

    if (Notification.permission !== 'granted') return;

    // Attempt to subscribe (will fail without real VAPID key and HTTPS)
    if (VAPID_PUBLIC_KEY && VAPID_PUBLIC_KEY.indexOf('<') === -1) {
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
      });
      // TODO: send `sub` to your backend for push sending
      console.log('Push subscription', sub);
      return sub;
    } else {
      console.log('VAPID public key not set; skipping subscription.');
    }
  } catch (err) {
    console.warn('Error initializing push', err);
  }
}

export default { initPush };
