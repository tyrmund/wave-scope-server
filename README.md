
# 🏝️ WAVE SCOPE 🏝️

In the global context of a massive tourism, WaveScope tries to reduce the ecological footprint with a responible visit to each beach. 


## API Reference

```http
   Beaches routes / endpoints
```

| HTTP Verb | URL                 | Request Body    |  Action                  |
| :----     | :-------            | :---------------| :---------               |
| `POST`    | `/beaches`          |      JSON       | Creates a new beach      |
| `GET`     | `/beaches`          |                 | Brings all beaches       |
| `GET`     | `/beaches/:beachId` |                 | Brings one beach         |
| `GET`     | `/beaches/search`   |                 | Search beaches           |
| `PUT`     | `/beaches/:beachId` |      JSON       | Modifies a beach         |
| `DELETE`  | `/beaches/:beachId` |                 | Deletes a beach          |



```http
  Specimens routes / endpoints
```

| HTTP Verb | URL                      | Request Body   |  Action                |
| :-------- | :-------                 | :------------- | :---------             |
| `POST`    | `/specimens`             |      JSON      | Creates a new specimen |
| `GET `    | `/specimens`             |                | Brings all specimens   |
| `GET`     | `/specimens/:specimenId` |                | Brings one specimen    |
| `GET`     | `/specimens/search`      |                | Search specimens       |
| `PUT`     | `/specimens/:specimenId` |      JSON      | Edit one specimen      |
| `DELETE`  | `/specimens/:specimenId` |                | Delete one specimen    |



```http
  Sightings routes / endpoints
```

| HTTP Verb | URL                                   | Request Body   |  Action                             |
| :-------- | :-------                              | :------------- | :---------                          |
| `POST`    | `/sightings`                          |      JSON      | Creates a new sighting              |
| `GET `    | `/sightings`                          |                | Bring all sightings                 |
| `GET`     | `/sightings/:sightingId`              |                | Brings one sighting                 |
| `GET`     | `/sightings/search`                   |                | Search sightings                    |
| `PUT`     | `/sightings/:sightingId`              |      JSON      | Edit one sighting                   |
| `DELETE`  | `/sightings/:sightingId`              |                | Delete one sighting                 |
| `POST`    | `/sightings/:sightingId/confirmation` |      JSON      | Give a confirmation to a sighting   |
| `DELETE`  | `/sightings/:sightingId/confirmation` |      JSON      | Remove a confirmation to a sighting |
| `POST`    | `/sightings/:sightingId/rejection`    |      JSON      | Give a rejection to a sighting      |
| `DELETE`  | `/sightings/:sightingId/rejection`    |      JSON      | Remove a rejection to a sighting    |





```http
  Auth Routes
```

| HTTP Verb  | URL                | Request Body |  Action                 |
| :--------  | :-------           | :----------- | :---------              |
| `POST`     | `/signup`          |              | Creates a new user      |
| `POST`     | `/login`           |              | Logs an existing user   |
| `GET`      | `/verify`          |              | Verify auth token       |
| `GET`      | `/profile/:userId` |              | Brings an existing user |
| `PUT`      | `/edit/:userId`    |              | Edits an existing user  |


## Authors

- [@tyrmund](https://www.github.com/tyrmund)
- [@Daniela-AB25](https://www.github.com/Daniela-AB25)
- [@Drialis](https://www.github.com/Drialis)
