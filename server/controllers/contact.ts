import express from 'express';

import ContactModel from '../models/contact';

export function DisplayContactListPage(req: express.Request, res: express.Response, next: express.NextFunction){
    ContactModel.find(function(err, contactCollection){
        if(err){
            console.log(err);
            res.end(err);
        }
           res.render('index', {title: 'Contact List', page: '/contact/contact-list', collection: contactCollection});
    }   
)}