module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "es6": true
    },
    "rules": {
        "comma-dangle": 0,
        "indent": [2, 4, {"SwitchCase": 1}]
    },

    "globals": {
        "$": false,
        "window": false,
        "document": false,
        "jQuery": false,
        "after": false,
        "afterEach": false,
        "sprintf": false,
        "before": false,
        "beforeEach": false,
        "browser": false,
        "describe": false,
        "xdescribe": false,
        "expect": false,
        "inject": false,
        "it": false,
        "jasmine": false,
        "sinon": false,
        "spyOn": false,
        "runs": false,
        "waits": false,
        "waitsFor": false,
        "loadFixtures": false,
        "loadStyleFixtures": false,
        "device": false,
        "namespace": false,
        "sandbox": false,
        "HP": false,
        "autosize": false,
        "svg4everybody": false
    }
};