import * as B64 from '@hapi/b64';
import Joi from 'joi';


const internals = {};


export const b64stringify = function (obj) {

    return B64.base64urlEncode(JSON.stringify(obj), 'utf-8');
};


export const toHex = function (number) {

    const nstr = number.toString(16);
    if (nstr.length % 2) {
        return `0${nstr}`;
    }

    return nstr;
};

// Refer for header name pattern reference https://github.com/nodejs/node/blob/7ef069e483e015a803660125cdbfa81ddfa0357b/lib/_http_common.js#L203

export const validHttpTokenSchema = Joi.string().pattern(/^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/);
