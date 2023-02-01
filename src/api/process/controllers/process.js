'use strict';

/**
 * process controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const moduleUid = 'api::process.process'
const TableName = "process"

module.exports = createCoreController(moduleUid, {
    async count(ctx) {
        var { query } = ctx.request
        let count_entry = 0
        await strapi.query(moduleUid).count({ where: query })
            .then(res => {count_entry = res})
        const struture = {"table": TableName, "count" : count_entry}
        return struture
    }
});
