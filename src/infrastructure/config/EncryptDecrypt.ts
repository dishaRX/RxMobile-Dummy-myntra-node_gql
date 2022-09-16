var CryptoJS = require("crypto-js");

const key = "keytoencryptthedata";
function encrypt(text: any) {
  var ciphertext = CryptoJS.AES.encrypt(text, key).toString();
  return ciphertext;
}

function decrypt(text: any) {
  var bytes = CryptoJS.AES.decrypt(text, key);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}

export { encrypt, decrypt };
