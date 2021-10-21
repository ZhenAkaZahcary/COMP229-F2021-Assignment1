"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactpage = exports.DisplayProjectspage = exports.DisplayServicespage = exports.DisplayAboutpage = exports.DisplayHomepage = void 0;
function DisplayHomepage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomepage = DisplayHomepage;
;
function DisplayAboutpage(req, res, next) {
    res.render('index', { title: 'About Me', page: 'about' });
}
exports.DisplayAboutpage = DisplayAboutpage;
function DisplayServicespage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
}
exports.DisplayServicespage = DisplayServicespage;
function DisplayProjectspage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects' });
}
exports.DisplayProjectspage = DisplayProjectspage;
function DisplayContactpage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact' });
}
exports.DisplayContactpage = DisplayContactpage;
//# sourceMappingURL=index.js.map