"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
router.get('/', controllers_1.DisplayHomepage);
router.get('/home', controllers_1.DisplayHomepage);
router.get('/about', controllers_1.DisplayAboutpage);
router.get('/services', controllers_1.DisplayServicespage);
router.get('/projects', controllers_1.DisplayProjectspage);
router.get('/contact', controllers_1.DisplayContactpage);
exports.default = router;
//# sourceMappingURL=index.js.map