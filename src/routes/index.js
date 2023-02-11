import User from './user'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../../swagger.json'
import Access from './access'
import Role from './role'
import Organisation from './organisation'



const routes = (app) => {
    app.use('/users', User)
    app.use('/role', Role)
    app.use('/access', Access)
    app.use('/organisation', Organisation)
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

export default routes
