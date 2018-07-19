const path = require('path');
module.exports = {
    rootFolder: path.normalize(path.join(__dirname, '/../')),
    database:{
        "development": {
            "username": "root",
            "password": "TeMePyT198319854E4Enets@",
            "database": "blog",
            "host": "127.0.0.1",
            "dialect": "mysql",
            "port":3306
        }
    }
};

