import * as PusherPushNotifications from '@pusher/push-notifications-web';
import{ pusherConfig } from './config/pusher' ;

const beamsClient = new PusherPushNotifications.Client({
	instanceId: pusherConfig.instanceId,
});

beamsClient
  .start()
  .then((beamsClient) => beamsClient.getDeviceId())
  .then((deviceId) =>
    console.log("Successfully registered with Beams. Device ID:", deviceId)
  )
  .then(() => beamsClient.addDeviceInterest("hello"))
  .then(() => beamsClient.getDeviceInterests())
  .then((interests) => console.log("Current interests:", interests))
  .catch(console.error);
