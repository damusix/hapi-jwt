import * as Crypto from './crypto.js';
import { plugin as _plugin } from './plugin.js';
import * as Token from './token.js';
import * as Utils from './utils.js';


export const plugin = _plugin;

export const token = {
    generate: Token.generate,
    decode: Token.decode,
    verify: Token.verify,

    verifySignature: Token.verifySignature,
    verifyPayload: Token.verifyPayload,
    verifyTime: Token.verifyTime,

    signature: {
        generate: Crypto.generate,
        verify: Crypto.verify
    }
};

export const crypto = {
    rsaPublicKeyToPEM: Crypto.rsaPublicKeyToPEM
};

export const utils = Utils;
