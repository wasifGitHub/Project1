// Include CryptoJS library (make sure to include it in your project)
// You can download it from: https://cryptojs.gitbook.io/docs/
const CryptoJSUtil = require("crypto-js");
const SALT = process.env.SALT || "defaultSALT";

// Encryption function
export function encrypt(text) {
    // Get the SALT from the system environment variable
    // SALT is used to add an additional layer of security to the encryption process. its full form is "Secure Access Layer Token"
    // const SALT = process.env.SALT || "omg";
    const cipherText = CryptoJSUtil.AES.encrypt(text, SALT).toString();
    return cipherText;
}

// Decryption function
export function decrypt(cipherText) {
    // Get the SALT from the system environment variable
    // const SALT = process.env.SALT || "defaultSALT"; // SALT = 23muku
    const bytes = CryptoJSUtil.AES.decrypt(cipherText, SALT);
    const originalText = bytes.toString(CryptoJSUtil.enc.Utf8);
  return originalText;

}