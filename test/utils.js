import * as Code from '@hapi/code';
import * as Jwt from '../lib/index.js';
import * as Lab from '@hapi/lab';


const internals = {};


const lab = Lab.script();
export { lab };
const { describe, it } = lab;
const expect = Code.expect;


describe('Utils', () => {

    describe('toHex()', () => {

        it('converts numbers to hex string', () => {

            expect(Jwt.utils.toHex(1)).to.equal('01');
            expect(Jwt.utils.toHex(100001)).to.equal('0186a1');
            expect(Jwt.utils.toHex(4040404)).to.equal('3da6d4');
        });
    });

    describe('validHttpTokenSchema', () => {

        it('allows valid http tokens', () => {

            const validHttpTokens = ['cookie-name', 'cookie_name', '_cookie-name', 'cookie__name', 'cookie--name', '__--cookie--name__--'];

            for (const token of validHttpTokens) {
                expect(Jwt.utils.validHttpTokenSchema.validate(token).error).to.not.exist();
            }
        });

        it('errors for invalid http tokens', () => {

            const invalidHttpTokens = [
                'a)b', 'a(b', 'a<b', 'a>b', 'a@b', 'a,b', 'a;b', 'a:b', 'a\\b',
                'a/b', 'a[b', 'a]b', 'a?b', 'a=b', 'q{a', 'b}n'
            ];

            for (const token of invalidHttpTokens) {
                expect(Jwt.utils.validHttpTokenSchema.validate(token).error).to.exist();
            }
        });
    });
});
