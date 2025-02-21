'use strict';

/**
 * life-insurance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::life-insurance.life-insurance');
