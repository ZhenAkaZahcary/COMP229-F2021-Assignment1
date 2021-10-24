import express from 'express';

import ContactModel from '../models/contact';
import { UserDisplayName } from '../utils';

//(CREATE) Display contact list add page
export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction){
    res.render('index', {title: 'Add Contact', page: 'contact/contact-edit', item :'', displayName: UserDisplayName(req)});
}

//(CREATE) Process add page
export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    let newItem = new ContactModel({
        "ContactName": req.body.contactName,
        "ContactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });

    ContactModel.create(newItem, function(err){
        if(err){
            console.log(err);
            res.end(err);
        }
        res.redirect('/contact/list');
    })
} 

//(READ) Display contact list page
export function DisplayContactListPage(req: express.Request, res: express.Response, next: express.NextFunction){
    ContactModel.find(function(err, contactCollection){
        if(err){
            console.log(err);
            res.end(err);
        }
           res.render('index', {title: 'Contact List', page: '/contact/contact-list', collection: contactCollection, displayName: UserDisplayName(req)});
    }   
)}
//(UPDATE) Display contact edit page
export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction){
    let id = req.params.id;

    ContactModel.findById(id, {}, {}, function(err, contactItemToEdit){
        if(err){
            console.log(err);
            res.end(err);
        }
            console.log(contactItemToEdit);
            res.render('index', {title: 'Contact Edit', page: '/contact/contact-edit', item: contactItemToEdit, displayName: UserDisplayName(req)});
    }
)}

//(UPDATE) Process edit page
export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    let id = req.params.id;
    let updatedItem = new ContactModel({
        "_id": id,
        "ContactName": req.body.contactName,
        "ContactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });

    ContactModel.updateOne({ _id:id }, updatedItem, {}, function(err){
        if(err){
            console.log(err);
            res.end(err);
        }
        res.redirect('/contact/list');
    });
}

//(DELETE) Process delete page
export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction){
    let id = req.params.id;

    ContactModel.remove({ _id:id }, function(err){
        if(err){
            console.log(err);
            res.end(err);
        }
        res.redirect('/contact/list');
      
    })
}


