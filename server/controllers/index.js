"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactpage = exports.DisplayProjectspage = exports.DisplayServicespage = exports.DisplayAboutpage = exports.DisplayHomepage = void 0;
const utils_1 = require("../utils");
function DisplayHomepage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayHomepage = DisplayHomepage;
;
function DisplayAboutpage(req, res, next) {
    res.render('index', { title: 'About Me', page: 'about', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayAboutpage = DisplayAboutpage;
function DisplayServicespage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayServicespage = DisplayServicespage;
function DisplayProjectspage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayProjectspage = DisplayProjectspage;
function DisplayContactpage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayContactpage = DisplayContactpage;
//# sourceMappingURL=index.js.map