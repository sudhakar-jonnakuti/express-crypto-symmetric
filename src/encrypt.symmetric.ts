import crypto from "node:crypto";
import { Buffer } from "node:buffer";

import CONFIG_ENV from './env/developer.env';

const encryptSymmetric = async (plainText: string) => {
	try {
    const cipher = crypto.createCipheriv('aes-256-cbc', 
      Buffer.from(CONFIG_ENV.ENCRYPTION_KEY), 
      Buffer.from(CONFIG_ENV.ENCRYPTION_KEY.substring(0,CONFIG_ENV.IV_LENGTH)));
    let encrypted = cipher.update(plainText);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
		return { encryptedData: encrypted.toString('base64') };
  } catch (error) {
    console.log(error);
  }
};

export default encryptSymmetric;