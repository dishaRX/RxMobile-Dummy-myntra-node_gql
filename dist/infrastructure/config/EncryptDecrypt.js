"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
var CryptoJS = require("crypto-js");
const key = "keytoencryptthedata";
function encrypt(text) {
    var ciphertext = CryptoJS.AES.encrypt(text, key).toString();
    return ciphertext;
}
exports.encrypt = encrypt;
function decrypt(text) {
    var bytes = CryptoJS.AES.decrypt(text, key);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}
exports.decrypt = decrypt;
