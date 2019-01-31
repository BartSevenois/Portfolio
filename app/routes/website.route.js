module.exports = function (app) {
    const website = require('../controllers/website.controller');
    
    // HOME
    app.get('/', website.renderHome);
};