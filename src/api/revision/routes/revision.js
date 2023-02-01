'use strict';

/**
 * revision router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::revision.revision');
