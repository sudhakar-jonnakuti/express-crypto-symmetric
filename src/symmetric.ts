import crypto from "node:crypto";
import { Buffer } from "node:buffer";

import CONFIG_ENV from './env/developer.env';

export const encryptSymmetric = async (plainText: string) => {
	try {
    const cipher = crypto.createCipheriv('aes-256-cbc', 
      Buffer.from(CONFIG_ENV.ENCRYPTION_KEY), 
      Buffer.from(CONFIG_ENV.ENCRYPTION_KEY.substring(0,CONFIG_ENV.IV_LENGTH)));
    let encrypted = cipher.update(plainText);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
		return {
			encryptedData: encrypted.toString('base64')
		};
  } catch (error) {
    console.log(error);
  }
};

export const decryptSymmetric = async (encryptedInfo: any) => {
  try {
 		let encryptedText = Buffer.from(encryptedInfo.encryptedData, 'base64');
    const decipher = crypto.createDecipheriv('aes-256-cbc',
      Buffer.from(CONFIG_ENV.ENCRYPTION_KEY), 
      Buffer.from(CONFIG_ENV.ENCRYPTION_KEY.substring(0,CONFIG_ENV.IV_LENGTH)));
    const decrypted = decipher.update(encryptedText);
    const decryptedText = Buffer.concat([decrypted, decipher.final()]);
    return { decryptedData: decryptedText.toString() }
  } catch (error) {
    console.log(error)
  }
};
