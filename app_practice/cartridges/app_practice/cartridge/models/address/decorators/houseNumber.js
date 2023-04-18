'use strict';

function getHouseNr(addressObject) {
    if (!addressObject) {
        return null;
    }
    return addressObject.custom ? addressObject.custom.houseNr : addressObject.raw.custom.houseNr;
}

module.exports = function (address, addressObject) {
    Object.defineProperty(address, 'houseNr', {
        writeable: true,
        enumerable: true,
        value: getHouseNr(addressObject)
    });
}