var RootSocket = function (app, users) {
    app.io.route('disconnect', function (req) {
        users.forEach(function (user) {
            if (user.id === req.socket.id) {
                var index = users.indexOf(user);

                if (index > -1) {
                    users.splice(index, 1);
                }

                req.io.broadcast('users/delete', { data: user });
            }
        });
    });
};

module.exports = RootSocket;