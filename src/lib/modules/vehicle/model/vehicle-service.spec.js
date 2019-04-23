import VehicleService from './vehicle-service.js';

describe("Vehicle Service Module", () => {
    const service = new VehicleService();
   
    it("Should not be null", () => {
        expect(service).not.toBeNull();
    });

    it("Should save data on localstorage", () => {
        const data = "value";
        service.saveVehiclesLocalStore(data);
        const retrived = service.getVehiclesFromLocalStorage();
        expect(retrived).toBe(data);
    });

    it("Should call XMLHttpRequest methods when getting vehicles", () => {
        spyOn(XMLHttpRequest.prototype, 'open').and.callThrough(); // Jasmine 2.x
        spyOn(XMLHttpRequest.prototype, 'send');

        service.getAllVehicles(()=>{}, ()=>{});

        expect(XMLHttpRequest.prototype.open).toHaveBeenCalled();
        expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
    });
});