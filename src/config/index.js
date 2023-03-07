import Sequelize from 'sequelize'
import * as dotenv from 'dotenv'

dotenv.config({ path: `./${process.env.NODE_ENV || 'development'}.env` })

const {
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DIALECT
} = process.env

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
    dialect: DIALECT,
    host: process.env.DB_HOST 
})


// const sequelize = new Sequelize("mydb", "postgres", "postgres", {
//     dialect: "postgres",
//     host: "rubix-database.cyrxij4ifelv.ap-south-1.rds.amazonaws.com"
// })

export default sequelize
