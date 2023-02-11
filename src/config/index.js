import Sequelize from 'sequelize'
import * as dotenv from 'dotenv'

dotenv.config({ path: `./${process.env.NODE_ENV}.env` })

const {
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DIALECT
} = process.env

// const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
//     dialect: DIALECT,
//     host: "rubix-database.cyrxij4ifelv.ap-south-1.rds.amazonaws.com"
// })

const sequelize = new Sequelize("mydb", "postgres", "postgres", {
    dialect: DIALECT,
    host: "rubix-database.cyrxij4ifelv.ap-south-1.rds.amazonaws.com"
})

export default sequelize
