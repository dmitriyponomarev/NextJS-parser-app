# Intro
This is a Next application, which gets tail parameter from URL string, then make request to Postgres via GraphQL query and receive object id.
After that application parse JSON-file for object with the same id as received from database.

# Tech
- [Next.js]
- [Hasura]
- [PostgreSQL]
- [Docker]

# Installation
**Docker is required**

[Docker installation guide]

To configure and run application perform script
```sh
npm run bootstrap
``` 
This script will build and run Docker container, and apply migrations with data samples

If you want simply run the application perform
```sh
npm run docker:build
```
This script will build and run Docker container without data samples.
If after that you want to apply data samples perform script
```sh 
npm run db:configure
```
You can verify installation or change configuration of database by navigating to [Hasura local console]


# About JSON
The application is configured so that the JSON file should be placed in `public` folder
To change the destination, edit `fileUrl` variable in `next.config.js` file
Example of JSON structure:
```JSON
[
  { 
    "id": 1,
    "title": "Hello",
    "description": "World"
  },
  ...
]
```

# Endpoints to use
There is one usable endpoint: <http://localhost:3000/{tail}>

Where `{tail}` is passed string parameter, for example <http://localhost:3000/best-hello-ever>

Also you can access Hasura console on <http://localhost:8080/console>

[Next.js]: <https://nextjs.org/>
[Hasura]: <https://hasura.io/>
[PostgreSQL]: <https://www.postgresql.org/>
[Docker]: <https://www.docker.com/>
[Hasura local console]: <http://localhost:8080>
[Docker Installation Guide]: <https://docs.docker.com/get-docker/>
