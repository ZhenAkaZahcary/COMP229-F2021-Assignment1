import express from 'express';

export function DisplayHomepage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'Home', page:'home' });
  };

export function DisplayAboutpage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'About Me', page:'about'});
  }

 export function DisplayServicespage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'Services', page:'services' });
  }

 export function DisplayProjectspage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'Projects', page:'projects'});
  }

 export function DisplayContactpage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'Contact', page:'contact'});
  }