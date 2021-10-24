import express from 'express';
import { UserDisplayName } from '../utils';

export function DisplayHomepage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'Home', page:'home', displayName: UserDisplayName(req)});
  };

export function DisplayAboutpage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'About Me', page:'about', displayName: UserDisplayName(req)});
  }

 export function DisplayServicespage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'Services', page:'services', displayName: UserDisplayName(req) });
  }

 export function DisplayProjectspage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'Projects', page:'projects', displayName: UserDisplayName(req)});
  }

 export function DisplayContactpage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'Contact', page:'contact', displayName: UserDisplayName(req)});
  }