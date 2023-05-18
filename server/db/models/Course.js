import DataTypes from 'sequelize';

export default function addCourseTable(sequelize) {
    sequelize.define('Course', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        author_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title_name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        subject: {
            type: DataTypes.CHAR(2),
            allowNull: false
        },
        order: {
            type: DataTypes.CHAR(600),
            allowNull: true
        },
        lvl: {
            type: DataTypes.CHAR(1),
            allowNull: false,
            default: 0
        }
    }, {
        createdAt: true,
        timestamps: true,
        updatedAt: 'updateTimestamp'
    });
};
