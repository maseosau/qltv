const userRouter = require('./user');
const productRouter = require('./products');
function route(app) {
    app.use('/', userRouter);
    app.use('/', productRouter);
}

module.exports = route;