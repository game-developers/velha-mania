(function (Backbone) {
    var _sync = Backbone.sync,
        methods = {
            beforeSend: function () {
                this.trigger('sync:start', this);
            },
            complete: function () {
                this.trigger('sync:stop', this);
            }
        };

    Backbone.sync = function (method, entity, options) {
        if (options === null) {
            options = {};
        }

        _.defaults(options, {
            beforeSend: _.bind(methods.beforeSend, entity),
            complete: _.bind(methods.complete, entity)
        });

        var sync = _sync(method, entity, options);

        if (!entity._fetch && method === 'read') {
            entity._fetch = sync;
        }
    };
})(Backbone);