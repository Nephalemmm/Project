//test suite
import {addition} from './firstFunction';
describe('Test Suite', () => {
    it('Testing addition function', () => {
        expect(addition(20,25)).toBe(45);
    })
})