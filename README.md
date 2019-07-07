# e-shop

##Briefing
(Learn how to) build ecommerce web application using following specification within 2 weeks

##Specification
* React.js
* Redux (State management)
* Unit testing
* Jenkins (CI/CD Pipeline)
* Docker (Local PC) => Docker Compose (optional)


##Notes
To create Docker image and run the app:
`docker build . -t e-shop-react-docker`
`docker run -p 8000:80 e-shop-react-docker`

To gain access to Jenkins configuration
`java -jar jenkins.war --httpPort=8080 --enable-future-java`


##Issues/Future Improvement:
- Websocket/Database
Store state to `Websocket` or `database` so the app can pull state data from them when the page got refreshed.

- Docker Compose
Use Dcoker Compose to orchestrate each Docker images for each microservices (Node/React.js, SQL database), helping developer to manage multiple Docker images and save time.