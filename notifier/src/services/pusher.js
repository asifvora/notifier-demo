import Pusher from 'pusher-js';
import { pusherConfig } from '../config/pusher';

export const pusher = new Pusher(pusherConfig.key, {
  cluster: pusherConfig.cluster,
  forceTLS: true
});

export const pusherChannel = {
    chat: 'chat',
};

export const channelEvent = {
  notification: 'notification',
  message: 'message',
};

export const subscribeForLiveNotification = (params) => {
  const { callback } = params;

  const channel = pusher.subscribe(pusherChannel.chat);

  console.log(
    `Subscribe pusher for live notification :: ${pusherChannel.chat}`
  );

  channel.bind(channelEvent.notification, data => {
    console.log('Received pusher live notification :: ', data);
    callback(data);
  });
};

export const unsubscribeChannel = (channel) => {
    pusher.unsubscribe(channel);
};
