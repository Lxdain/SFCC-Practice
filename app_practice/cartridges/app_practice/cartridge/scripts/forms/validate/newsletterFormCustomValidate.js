'use strict'

/* eslint-disable no-undef */

exports.validate = function (form) {
    if (form.subscribeToSecondEmailList.checked && empty(form.firstName.value)) {
        form.firstName.invalidateFormElement('error.firstname.required.to.subscribe.to.additional.list');
        return false;
        // check if the && in empty() method within the early return statement works later
    }
    return true;
};

// check if this is actually functional or not