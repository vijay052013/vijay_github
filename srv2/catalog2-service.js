const cds = require('@sap/cds');
const debug = require('debug')('srv2:catalog2-service');

module.exports = cds.service.impl(async function () {

    const {
            Students
          } = this.entities;

    this.after('READ', Students, (each) => {
        debug('READ ID:', each.ID);
    });

});