'use strict';

/**
 * revision service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::revision.revision');
