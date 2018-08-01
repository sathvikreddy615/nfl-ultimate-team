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
        });
    };
    static getPlayersByName = playerName => {
        return fetch(
            `http://localhost:5002/players?name=${playerName}`
          ).then(e => e.json());
    };
}

// exports to various files
