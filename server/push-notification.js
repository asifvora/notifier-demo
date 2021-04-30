const PushNotifications = require('@pusher/push-notifications-server');

let beamsClient = new PushNotifications({
	instanceId: '5a0719e4-f995-44a9-a6a6-1455f1fd5cfa',
	secretKey: '5E048A02DC46E7B6C86FB2D5C7C79BDB91C3603D009603005B991F3B3E17D8F7',
});

beamsClient
	.publishToInterests(['hello'], {
		web: {
			notification: {
				title: 'Hello',
				body: 'Hello, world!',
				deep_link: 'https://www.pusher.com',
			},
		},
	})
	.then(publishResponse => {
		console.log('Just published:', publishResponse.publishId);
	})
	.catch(error => {
		console.log('Error:', error);
	});
