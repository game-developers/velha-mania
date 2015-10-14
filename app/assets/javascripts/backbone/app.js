this.VelhaMania = (function (Backbone, Marionette) {
    var App = new Marionette.Application();

    App.addRegions({
        mainRegion: '.main-region',
        navRegion: '.nav-region',
        modalRegion: '.modal-region'
    });

    App.addInitializer(function () {
        App.module('Utilities').start();
        App.module('HomeApp').start();
        App.module('UsersApp').start();
        App.module('BoardApp').start();
    });

    App.reqres.setHandler('concern', function (concern) {
        App.Concerns[concern] = void(0);
    });

    App.on('start', function () {
        this.startHistory();
    });

    return App;
})(Backbone, Marionette);