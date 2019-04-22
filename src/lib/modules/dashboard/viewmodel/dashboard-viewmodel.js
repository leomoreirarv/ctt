require("babel-polyfill");
import DashboardModel from '../model/dashboard-model.js';

export default class DashboardViewModel {

    constructor(_vehicleService, _vehicleViewModel) {
        this.vehicleService = _vehicleService;
        this.vehicleVieModel = _vehicleViewModel;
    }
    
    init() {
        return new Promise(resolve => {
            this.refreshVehicles().then((response) => {
                this.dashboard = this.convertToDashboardModel(response);
                this.vehicleService.saveVehiclesLocalStore(JSON.stringify(this.vehicleVieModel.convertToListVehicle(response)));
                resolve();
            });
        })
    }

    convertToDashboardModel(res){
        const response = JSON.parse(res);
        const data = response[0].VehAvailRSCore.VehRentalCore;

        
        return new DashboardModel(data["@PickUpDateTime"], 
                                    data["@ReturnDateTime"], 
                                    data.PickUpLocation["@Name"], 
                                    data.ReturnLocation["@Name"]);
    }

    refreshVehicles() {
        return new Promise((resolve, reject) => {
            this.vehicleService.getAllVehicles(
                (res) => resolve(res),
                (error) => reject(error));
        })
    }

    loadVehicles() {
        return JSON.parse(this.vehicleService.getVehiclesFromLocalStorage());
    }

    async getListVehicleSortedByName() {
        return this.loadVehicles().sort((a, b) => {
            if (a.vehMakeModel > b.vehMakeModel) return 1;
            if (b.vehMakeModel > a.vehMakeModel) return -1;
            return 0;
        });
    }

    async getListVehicleSortedByVendor() {
        return this.loadVehicles().sort((a, b) => {
            if (a.vendor > b.vendor) return 1;
            if (b.vendor > a.vendor) return -1;
            return 0;
        });
    }

    async getListVehicleSortedByPrice() {
        return this.loadVehicles().sort((a, b) => {
            if (parseFloat(a.rateTotalAmount) > parseFloat(b.rateTotalAmount)) return 1;
            if (parseFloat(b.rateTotalAmount) > parseFloat(a.rateTotalAmount)) return -1;
            return 0;
        });
    }
}