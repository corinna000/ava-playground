module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parser" : "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "strict": 0,
        "indent": [
            2,
            "tab"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "quotes": [
            2,
            "single"
        ],
        "semi": [
            2,
            "always"
        ]
    }
};
