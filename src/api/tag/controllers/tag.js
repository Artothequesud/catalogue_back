'use strict';

/**
 * tag controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const moduleUid = 'api::tag.tag'
const TableName = "tag"

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
