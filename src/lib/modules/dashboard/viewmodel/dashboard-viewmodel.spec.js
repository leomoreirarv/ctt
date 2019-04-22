import DashboardViewModel from './dashboard-viewmodel.js';

describe("Dashboard Viewmodel", () => {

    const vehicleService = jasmine.createSpy("VehicleService");
    const vehicleViewModel = jasmine.createSpy("VehicleViewModel");
    const viewmodel = new DashboardViewModel(vehicleService, vehicleViewModel);

    it("viewmodel should not be null", () => {
       expect(viewmodel).not.toBeNull();
    });

    it("Should call refreshVehicles when viewmodel is started", () => {
        spyOn(viewmodel, "refreshVehicles");
        viewmodel.init();
        expect(viewmodel.refreshVehicles).toHaveBeenCalled();
    });
});