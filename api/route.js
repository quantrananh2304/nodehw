module.exports = function(app) {
    const controller = require('./controller')

    app.route('/delete').put(controller.delete)

    app.route('/').get(controller.getData)

    // app.route('/put').put(controller.put)

    // app.route('/delete').delete(controller.delete)
}