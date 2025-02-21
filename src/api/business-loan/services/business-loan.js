'use strict';

/**
 * business-loan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-loan.business-loan');
