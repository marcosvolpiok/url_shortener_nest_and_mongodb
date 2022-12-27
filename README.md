# Run app
```
docker build .
```
```
docker-compose up
```
Running those commands you'll have a Nest and a MongoDB server, and you'll be able to access the app with port 3000, on the IP of the "nest" container.
Run the following command to get the IP:
```
docker inspect nest
```

# Create seeds
```
docker-compose run --rm nest npx nestjs-command create:url
```
With that command, you'll create an example of data on the MongoDB database.

# Runing app
Just import the Postman Collection and Environment, and use it!



