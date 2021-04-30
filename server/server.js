const Pusher = require('pusher');

const pusher = new Pusher({
	appId: '1196297',
	key: '2922a75e96bf490bd6c9',
	secret: '0482b91d3972ed31fe23',
	cluster: 'ap2',
	useTLS: true,
});

const data = ['Hi', 'Hello', 'How are you'];
let count = data.length;


const pusherService = notification => {
	pusher.trigger('chat', 'notification', {
		message: notification,
	});
};

const sendNotification = () => {
    let index = 0;
	let datasending = setInterval(() => {
		console.log('index', index);
		console.log('count', count);
		if (index < count) {
			const notification = data[index];
			pusherService(notification);
		} else {
			clearInterval(datasending);
		}
		index++;
	}, 2000);
};

sendNotification();
