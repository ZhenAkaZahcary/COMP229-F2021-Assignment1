import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type: String
    },
    username:{
        type: String
    },
    password:{
        type: String
    },
    displayName:{
        type: String
    }
}, {collection: 'users'});

UserSchema.pre('save', async function(next){
    const user = this;
    const hash = await bcrypt.hash(user.password, 10);

    this.password = hash;
    next();
});

UserSchema.methods.isValidPassword = async function(password:string){
    const user = this;
    //compare the password that user entered with the on    e stored in database
    const compare = await bcrypt.compare(password, user.password);
    
    return compare;
}

declare global {
    export type UserDocument = mongoose.Document & {
        _id: {
            type: String
        },
        username:{
            type: String
        },
        password:{
            type: String
        },
        displayName:{
            type: String
        }
    }
}

const Model = mongoose.model('User', UserSchema);

export default Model;