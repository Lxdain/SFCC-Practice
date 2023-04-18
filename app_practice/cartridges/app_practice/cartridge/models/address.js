'use strict';

const decorators = require('*/cartridge/models/address/decorators/index');

function address(addressObject) {
    module.superModule.call(this, addressObject);
    decorators.houseNumber(this.address, addressObject);
}

module.exports = address;
