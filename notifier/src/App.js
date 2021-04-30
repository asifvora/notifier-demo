import React, { Fragment } from 'react';
import { useMount, useUnmount } from 'react-use';
import { pusherChannel, subscribeForLiveNotification, unsubscribeChannel } from './services/pusher';
import { toast } from './components/Toast';
import { RealTimeAlert } from './components/RealTimeAlert';
import { useSelector, useDispatch } from 'react-redux'
import { setCount, setNotifications } from './actions';

export const App = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.notifications.count);

  const onAddNotification = data => {
		const { message } = data;
		dispatch(setNotifications([message]));
    dispatch(setCount());
	};

	useMount(() => {
		subscribeForLiveNotification({
			callback: data => {
				toast(<RealTimeAlert data={data} />, {
					position: 'top-center',
					autoClose: 2000,
				});
				// action for push data in store
				onAddNotification(data);
			},
			data: { testID: 1 },
		});
	});

	useUnmount(() => {
		unsubscribeChannel(pusherChannel.chat);
	});

	return (
		<Fragment>
			BUILD A LIVE NOTIFICATION WITH REACT
			<nav>
				<div className="nav__notification">
					<span className="nav__notification__icon"></span>
					{count && <span className="nav__notification__num">{count}</span>}
				</div>
			</nav>
		</Fragment>
	);
};
