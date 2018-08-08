export default class APIManager {
    static getData = table => {
        return fetch(`http://localhost:5002/${table}`).then(e => e.json());
    };
    static addData = (table, data) => {
        return fetch(`http://localhost:5002/${table}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(data)
        }).then(e => e.json())
    };
    static updatedData = (table, key, data) => {
        return fetch(`http://localhost:5002/${table}/${key}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(data)
        });
    };
    static getPlayersByName = playerName => {
        return fetch(
            `http://localhost:5002/players?name=${playerName}`
          ).then(e => e.json());
    };
    static getPlayersByPosition = playerPosition => {
        return fetch(
            `http://localhost:5002/players?position=${playerPosition}`
          ).then(e => e.json());
    };
    static updateStandings = (id, body) => {
        return fetch(`http://localhost:5002/standings/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    };
    static getStandingsByUserId = idNumber => {
        return fetch(
          `http://localhost:5002/standings?userId=${idNumber}`
        ).then(e => e.json());
      };
      static getUsersById = idNumber => {
        return fetch(
          `http://localhost:5002/users?id=${idNumber}`
        ).then(e => e.json());
      };
}

// exports to various files
