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

    //TODO test the HTTP request
});