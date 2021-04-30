import pusher

pusher_client = pusher.Pusher(
  app_id='1196297',
  key='2922a75e96bf490bd6c9',
  secret='0482b91d3972ed31fe23',
  cluster='ap2',
  ssl=True
)

pusher_client.trigger('chat', 'notification', {'message': 'hello world'})