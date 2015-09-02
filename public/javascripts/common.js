//var requirejs = require(requirejs);

requirejs.config({
    baseUrl: "/javascripts",
    paths: {
        mainCtrl: 'controllers/main.js',
        HIWservices: 'services/HIWservices.js',
        core: 'core.js',
        main: '/javascripts/main',
        home: 'home'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});
requirejs(['home']);