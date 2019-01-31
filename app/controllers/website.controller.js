exports.renderHome = (req, res) => {
    var language;
    var defLang = req.headers["accept-language"].substring(0, 2);
    if (defLang == "nl") {
        language = "nl";
    } else if (defLang == "fr") {
        language = "fr";
    } else if (defLang == "en") {
        language = "en";
    }
    if (req.query.lang != undefined){
        req.session.lang = req.query.lang;
        res.setLocale(req.query.lang);
        language = req.query.lang;
    } else if(req.session.lang != undefined){
        res.setLocale(req.session.lang);
        language = req.query.lang;
    }
    res.render('index', {
        lang: language
    });
}