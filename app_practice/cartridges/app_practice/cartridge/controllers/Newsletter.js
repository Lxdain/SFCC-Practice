'use strict';

const server = require('server');

const csrfProtection = require('*/cartridge/scripts/middleware/csrf');
const userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');
const consentTracking = require('*/cartridge/scripts/middleware/consentTracking');

server.get(
    'EditAddSubscription',
    csrfProtection.generateToken,
    consentTracking.consent,
    userLoggedIn.validateLoggedIn,
    function (req, res, next) {
        const URLUtils = require('dw/web/URLUtils');
        const Resource = require('dw/web/Resource');
        const Site = require('dw/system/Site');
        const PageMgr = require('dw/experience/PageMgr');
        const pageMetaHelper = require('*/cartridge/scripts/helpers/pageMetaHelper');
        let newsletterForm = server.forms.getForm('newsletterForm');
        newsletterForm.clear();

        res.render('account/newsletter/editAddSubscription', { // template to be rendered, what to redner, similar to updateaccfields?
            newsletterForm: newsletterForm,
            breadcrumbs: [
                {
                    htmlValue: Resource.msg('global.home', 'common', null),
                    url: URLUtils.home().toString()
                },
                {
                    htmlValue: Resource.msg('page.title.myaccount', 'account', null),
                    url: URLUtils.url('Account-Show').toString()
                },
                {
                    htmlValue: Resource.msg('label.newsletter', 'account', null),
                    url: URLUtils.url('Newsletter-EditAddSubscription').toString()
                }
            ]
        });
        next();
    }
);

module.exports = server.exports();