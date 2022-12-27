# Run app
```
docker build .
```
```
docker-compose up
```
Runing those commands you'll have a Nest and a MongoDB server, you'll be able to access to the app with the port 3000, on the IP of the "nest" container.
Run the following command to get the IP:
```
docker inspect nest
```

# Create seeds
```
docker-compose run --rm nest npx nestjs-command create:url
```
With that command you'll create an example data on the MongoDB database.

# Runing app
Just import the Postman Colecction and Environment, and use it!