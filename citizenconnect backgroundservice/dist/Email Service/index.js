"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = run;
const mssql_1 = __importDefault(require("mssql"));
const ejs_1 = __importDefault(require("ejs"));
const config_1 = require("../config");
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const Helpers_1 = require("../Helpers");
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "../../.env") });
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let pool = yield mssql_1.default.connect(config_1.sqlConfig);
            let users = yield (yield pool.request().query("SELECT * FROM users WHERE isEmailSent = 0")).recordset;
            users.forEach(user => {
                ejs_1.default.renderFile("Templates/register.ejs", { name: user.Name }, (error, data) => __awaiter(this, void 0, void 0, function* () {
                    let messageOptions = {
                        to: user.Email,
                        from: process.env.EMAIL,
                        subject: "Welcome to our site",
                        html: data
                    };
                    yield (0, Helpers_1.sendEmail)(messageOptions);
                    yield pool.request().query(`UPDATE users SET isEmailSent = 1 WHERE Id='${user.Id}'`);
                }));
            });
        }
        catch (error) {
        }
    });
}
