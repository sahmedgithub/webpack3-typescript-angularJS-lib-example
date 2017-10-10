import { Greeter } from './Greeter';

describe('Greeter', ()=> {
    it('Greeter Instance test', ()=> {
        let greeter = new Greeter("IHG");
        expect(greeter.greet()).toBe("Hello, IHG!");
        //greeter.greet3();
        expect(true).toBe(true); 
    })
});