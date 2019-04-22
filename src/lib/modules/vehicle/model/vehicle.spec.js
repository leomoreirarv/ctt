import Vehicle from './vehicle.js';

describe('Vehicle Module', function(){
    it('Should not be null', function(){
        const vehicle = new Vehicle();
        expect(vehicle).not.toBeNull();
    })
});