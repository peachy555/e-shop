# e-shop

## Briefing
(Learn how to) build ecommerce web application using following specification within 2 weeks.

## Specification
* React.js
* Redux (State management)
* Unit testing
* Jenkins (CI/CD Pipeline)
* Docker (Local PC) => Docker Compose (optional)

## Notes
To create Docker image and run the app:
`docker build . -t e-shop-react-docker`
`docker run -p 8000:80 e-shop-react-docker`

## Issues/Future Improvement:
- Jenkins
More in-depth study on how it works and how to set the pipeline up properly.

- Action Creator
Properly introduce `action creator` to called `reducer`, instead of using `reducer` directly in the `component`.

- Middleware
Use `middleware` to do check on `state` first, instead of calling `reducer` directly and having the checks done inside `reducer`.

- Websocket/Database
Store state to `Websocket` or `database` so the app can pull state data from them when the page got refreshed.

- Docker Compose
Use `Dcoker Compose` to orchestrate each `Docker images` for each microservices (Node/React.js, SQL database), helping developer to manage multiple `Docker images` and save time.