'use strict';

/**
 * personal-loan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personal-loan.personal-loan');
