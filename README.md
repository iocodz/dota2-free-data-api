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

### HeroType

`HeroType` define un héroe.

| Campo | Tipo de dato | Descripción |
| :--- | :--- | :--- |
| `id` | `String` | Identificador del héroe |
| `name` | `String` | Nombre del héroe |
| `image` | `String` | Imagen del héroe HD |

### ItemType

`ItemType` define un ítem.

| Campo | Tipo de dato | Descripción |
| :--- | :--- | :--- |
| `id` | `String` | Identificador del ítem |
| `name` | `String` | Nombre del ítem |
| `image` | `String` | Imagen del ítem |
| `price` | `Number` | Costo del ítem |

### PlayerType

`PlayerType` define un jugador.

| Campo | Tipo de dato | Descripción |
| :--- | :--- | :--- |
| `id` | `String` | Identificador del jugador |
| `name` | `String` | Nombre del jugador |
| `country` | `String` | País del jugador |
| `position` | `String` | Logo del jugador |

### TeamType

`TeamType` define un equipos.

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

### Heroes

El endpoint `heroes` permite consumir los héroes. El endpoint devuelve un `[HeroType]` codificado en formato JSON.

#### Query

```js
let response = await fetch(`${BASE_API_URL}/heroes`)
```

#### Response

```json
{
  "data": {
    "heroes": [
      {
        "id": "Anti_Mage",
        "name": "Anti-Mage",
        "image": "http://cdn.dota2.com/apps/dota2/images/heroes/antimage_full.png",
      }
    ]
  }
}
```

### Ítems

El endpoint `items` permite consumir los ítems del juego. El endpoint devuelve un `[ItemType]` codificado en formato JSON.

#### Query

```js
let response = await fetch(`${BASE_API_URL}/items`)
```

#### Response

```json
{
  "data": {
    "items": [
      {
        "id": "Blink_Dagger",
        "name": "Blink Dagger",
        "price": 2250,
        "image": "http://cdn.dota2.com/apps/dota2/images/items/blink_lg.png"
      }
    ]
  }
}
```

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
      }
    ]
  }
}
```
