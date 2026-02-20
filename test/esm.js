import * as Code from '@hapi/code';
import * as Lab from '@hapi/lab';


const lab = Lab.script();
export { lab };
const { describe, it } = lab;
const expect = Code.expect;


describe('import()', () => {

    it('exposes all methods and classes as named imports', async () => {

        const Jwt = await import('../lib/index.js');

        expect(Object.keys(Jwt)).to.equal([
            'crypto',
            'plugin',
            'token',
            'utils'
        ]);
    });
});
