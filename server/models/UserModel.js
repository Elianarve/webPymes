import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';

const UsersModel = connection_db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue : 'user',
        allowNull: false
    },
},{
    tableName: 'users',
    timestamps: false
})

export default UsersModel;
