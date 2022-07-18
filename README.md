---
description: >-
  Documentación de la API de Dota2.
---

[![Netlify Status](https://api.netlify.com/api/v1/badges/3e86324e-6ef3-4652-970f-f5c8de8095e5/deploy-status)](https://app.netlify.com/sites/dota-pro/deploys)

# Referencia de la API

## Introducción

La API se expone en el siguiente URL: [https://dota-pro.netlify.app/api](https://dota-pro.netlify.app/api)

## Tipos

Los objetos que maneja la API están definidos en los siguientes tipos:

### PlayerType

`PlayerType` define un jugador.

| Campo | Tipo de dato | Descripción |
| :--- | :--- | :--- |
| `id` | `String` | Identificador del jugador |
| `name` | `String` | Nombre del jugador |
| `country` | `String` | País del jugador |
| `position` | `String` | Logo del jugador |

### TeamType

`TeamType` define una categoría bajo la cual se agrupan los equipos.

| Campo | Tipo de dato | Descripción |
| :--- | :--- | :--- |
| `id` | `String` | Identificador del equipo |
| `name` | `String` | Nombre del equipo |
| `image` | `String` | Logo del equipo |
| `country` | `String` | País del equipo |
| `created` | `String` | Fecha de fundación del equipo |
| `totalWinnings` | `String` | Ganancias estimadas del equipo |
| `activeRoster` | `[PlayerType]` | Roster actual del equipo |

### TournamentType

`TournamentType` define un torneo.

| Campo | Tipo de dato | Descripción |
| :--- | :--- | :--- |
| `id` | `String` | Identificador del torneo |
| `name` | `String` | Nombre del torneo |
| `image` | `String` | Logo del torneo |
| `tier` | `String` | Nivel competitivo del torneo |
| `date` | `String` | Fecha de Inicio |
| `prize` | `String` | Premio total del torneo |
| `location` | `String` | Localización del torneo |


### MatchType

`MatchType` define un partido.

| Campo | Tipo de dat | Descripción |
| :--- | :--- | :--- |
| `firstTeam` | `TeamType` | Primer equipo |
| `secondTeam` | `TeamType` | Segundo equipo |
| `tournament` | `TournamentType` | Torneo |
| `startDate` | `String` | Fecha de inicio |
| `status` | `String` | Tipo de partida / Estado |

## Consultas

La API permite realizar diferentes consultas que por el momento son públicas. En el futuro requeriremos una llave API para consumir los diferentes endpoints.

### Matches

El endpoint `matches` permite consumir las partidas en vivo y las próximas. El endpoint devuelve un `[MatchType]` codificado en formato JSON.

#### Query

```js
let response = await fetch(`${BASE_API_URL}/matches`)
```

#### Response

```json
{
  "data": [
    {
      "firstTeam": {
        "id": "Hokori",
        "name": "HKR",
        "image": "/commons/images/thumb/d/d0/Hokori_2021_allmode.png/50px-Hokori_2021_allmode.png"
      },
      "secondTeam": {
        "id": "Arkosh_Gaming",
        "name": "Arkosh",
        "image": "/commons/images/thumb/c/c6/Arkosh_Gaming_allmode.png/53px-Arkosh_Gaming_allmode.png"
      },
      "tournament": {
        "id": "FISSURE/Bitcoin_Series/1",
        "name": "TP Bitcoin Series"
      },
      "startDate": "2022-07-18T21:00:00.000Z",
      "status": "0:0(Bo3)"
    }
  ]
}
```

### Teams

El endpoint `teams` permite consumir los equipos en activo. El endpoint devuelve un `[TeamType]` codificado en formato JSON.

#### Query

```js
let response = await fetch(`${BASE_API_URL}/teams`)
```

#### Response

```json
{
  "data": {
    "teams": [
      {
        "id": "OG",
        "name": "OG",
        "image": "/commons/images/thumb/7/70/OG_RB_allmode.png/34px-OG_RB_allmode.png"
      }
    ]
  }
}
```

### Team

El endpoint `teams?id=id` permite consumir la informacion de un equipos según su id. El endpoint devuelve un `TeamType` codificado en formato JSON.

#### Query

```js
let response = await fetch(`${BASE_API_URL}/teams?id=OG`)
```

#### Response

```json
{
  "data": {
    "teams": [
      {
        "id": "OG",
        "name":"OG",
        "country":"Europe",
        "created":"2015-10-31",
        "totalWinnings":"$35,191,685",
        "activeRoster":[
          {
            "id":"Yuragi",
            "name":"(Artem Golubiev)",
            "country":"Ukraine",
            "position":"Position:Â 1",
            "joinDate":"2021-11-21[37]"
          },
          {
            "id":"Bzm",
            "name":"(Bozhidar Bogdanov)",
            "country":"Bulgaria",
            "position":"Position:Â 2",
            "joinDate":"2021-11-21[37]"
          },
          {
            "id":"ATF",
            "name":"(Ammar Al-Assaf)",
            "country":"Jordan",
            "position":"Position:Â 3",
            "joinDate":"2021-11-21[37]"
          },
          {
            "id":"Taiga",
            "name":"(Tommy Le)",
            "country":"Norway",
            "position":"Position:Â 4",
            "joinDate":"2021-11-21[37]"
          },
          {
            "id":"Misha",
            "name":"(Mikhail Agatov)",
            "country":"Russia",
            "position":"Position:Â 5",
            "joinDate":"2021-11-21[37]"
          }
        ],
        "archivements":[
          {
            "place":"AA1st",
            "date":"2022-05-22",
            "tournament":{
              "id":"Dota_Pro_Circuit",
              "name":"Dota Pro Circuit",
              "logo":"/commons/images/8/8a/ESL_One_2019_new_icon.png"
            },
            "prize":"$200,000"
          },
          {
            "place":"GA7Â -Â 8th",
            "date":"2021-10-15",
            "tournament":{
              "id":"The_International",
              "name":"The International",
              "logo":"/commons/images/d/d6/TheInternationalSmall.png"
            },
            "prize":"$1,000,500"
          },
          {
            "place":"AA1st",
            "date":"2019-08-25",
            "tournament":{
              "id":"The_International",
              "name":"The International",
              "logo":"/commons/images/d/d6/TheInternationalSmall.png"
            },
            "prize":"$15,620,181"
          },
          {
            "place":"AA1st",
            "date":"2018-08-25",
            "tournament":{
              "id":"The_International",
              "name":"The International",
              "logo":"/commons/images/d/d6/TheInternationalSmall.png"
            },
            "prize":"$11,234,158"
          },
          {
            "place":"GA7Â -Â 8th",
            "date":"2017-08-10",
            "tournament":{
              "id":"The_International",
              "name":"The International",
              "logo":"/commons/images/d/d6/TheInternationalSmall.png"
            },
            "prize":"$617,198"
          },
          {
            "place":"AA1st",
            "date":"2017-04-30",
            "tournament":{
              "id":"Dota_Major_Championships",
              "name":"Dota Major Championships",
              "logo":"/commons/images/b/ba/Shanghai_major_small.png"
            },
            "prize":"$1,000,000"
          },
          {
            "place":"AA1st",
            "date":"2016-12-10",
            "tournament":{
              "id":"Dota_Major_Championships",
              "name":"Dota Major Championships",
              "logo":"/commons/images/2/2a/Frankfurt_major_small.png"
            },
            "prize":"$1,000,000"
          },
          {
            "place":"AA1st",
            "date":"2016-06-19",
            "tournament":{
              "id":"ESL_One",
              "name":"ESL One",
              "logo":"/commons/images/6/6f/Esl_one_small.png"
            },
            "prize":"$157,273"
          },
          {
            "place":"AA1st",
            "date":"2016-06-12",
            "tournament":{
              "id":"Dota_Major_Championships",
              "name":"Dota Major Championships",
              "logo":"/commons/images/0/01/Manila_major_small.png"
            },
            "prize":"$1,110,000"
          },
          {
            "place":"AA1st",
            "date":"2015-11-21",
            "tournament":{
              "id":"Dota_Major_Championships",
              "name":"Dota Major Championships",
              "logo":"/commons/images/2/2a/Frankfurt_major_small.png"
            },
            "prize":"$1,110,000"
          }
        ]
      }
    ]
  }
}
```

### Tournaments

El endpoint `tournaments` permite consumir los próximos torneos. El endpoint devuelve un `[TournamentType]` codificado en formato JSON.

#### Query

```js
let response = await fetch(`${BASE_API_URL}/tournaments`)
```

#### Response

```json
{
  "data": {
    "tournaments": [
      {
        "id":"The_International/2022",
        "tier":"Tier 1",
        "name":"The International 2022",
        "image":"/commons/images/thumb/b/ba/Dota2_Aegis_allmode.png/50px-Dota2_Aegis_allmode.png",
        "date":"Oct 15 - 30, 2022",
        "prize":"$1,600,000",
        "location":"Singapore"
      },
      {
        "id":"ESL_One/Malaysia/2022",
        "tier":"Tier 1",
        "name":"ESL One Malaysia 2022",
        "image":"/commons/images/8/8a/ESL_One_2019_new_icon.png",
        "date":"Aug 23 - 28, 2022",
        "prize":"$400,000",
        "location":"Genting Highlands, Malaysia"
      }
    ]
  }
}
```