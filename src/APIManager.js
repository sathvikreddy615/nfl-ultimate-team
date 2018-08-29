export default class APIManager {
  static getData = table => {
    return fetch(`https://ultimate-team-api.herokuapp.com/${table}`).then(e => e.json());
  };
  static addData = (table, data) => {
    return fetch(`https://ultimate-team-api.herokuapp.com/${table}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    }).then(e => e.json());
  };
  static updatedData = (table, key, data) => {
    return fetch(`https://ultimate-team-api.herokuapp.com/${table}/${key}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    });
  };
  static getPlayersByName = playerName => {
    return fetch(`https://ultimate-team-api.herokuapp.com/players?name=${playerName}`).then(e =>
      e.json()
    );
  };
  static getPlayersByPosition = playerPosition => {
    return fetch(
      `https://ultimate-team-api.herokuapp.com/players?position=${playerPosition}`
    ).then(e => e.json());
  };
  static updateStandings = (id, body) => {
    return fetch(`https://ultimate-team-api.herokuapp.com/standings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  };
  static getStandingsByUserId = idNumber => {
    return fetch(`https://ultimate-team-api.herokuapp.com/standings?userId=${idNumber}`).then(e =>
      e.json()
    );
  };
  static getUsersById = idNumber => {
    return fetch(`https://ultimate-team-api.herokuapp.com/users?id=${idNumber}`).then(e =>
      e.json()
    );
  };
  static getGamesByUserId = idNumber => {
    return fetch(`https://ultimate-team-api.herokuapp.com/games?userId=${idNumber}`).then(e =>
      e.json()
    );
  };
  static deleteGamesByUserId = id => {
    return fetch(`https://ultimate-team-api.herokuapp.com/games/${id}`, {
      method: "DELETE"
    });
  };
}

// exports to various files
