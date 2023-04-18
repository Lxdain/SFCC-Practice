'use strict';

const assign = require('server/assign');

function updateAddressFields(newAddress, address) {
    module.superModule.updateAddressFields(newAddress, address);
    newAddress.custom.houseNr = address.houseNr;
}

module.exports = assign(module.superModule, {
    updateAddressFields: updateAddressFields
});

