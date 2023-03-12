"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "tb_roles",
            [
                {
                    id: "a117a6e4-3367-4483-89e9-d771595bfa5d",
                    name: "Admin",
                    description: "Administrator",
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("tb_roles", { name: "Admin" });
    }
};
