import '../view/dashboard.css';


export default class DashboardViewModel {

    constructor(_vehicleService, _vehicleViewModel) {
        this.vehicleService = _vehicleService;
        this.vehicleVieModel = _vehicleViewModel;
    }

    refreshVehicles() {
        return new Promise((resolve, reject) => {
            this.vehicleService.getAllVehicles(
                (res) => resolve(res), 
                (error) => reject(error));
        })
    }

    async getListVehicle(){
        return this.vehicleVieModel.convertToListVehicle(await this.refreshVehicles());
    }

    async getListVehicleSortedByName(){
        return this.vehicleVieModel.convertToListVehicle(await this.refreshVehicles()).sort((a,b) => {
            if(a.vehMakeModel > b.vehMakeModel) return 1;
            if(b.vehMakeModel > a.vehMakeModel) return -1;
            return 0;
        });
    }

    async getListVehicleSortedByVendor(){
        return this.vehicleVieModel.convertToListVehicle(await this.refreshVehicles()).sort((a,b) => {
            if(a.vendor > b.vendor) return 1;
            if(b.vendor > a.vendor) return -1;
            return 0;
        });
    }

    async getListVehicleSortedByPrice(){
        return this.vehicleVieModel.convertToListVehicle(await this.refreshVehicles()).sort((a,b) => {
            if(parseFloat(a.rateTotalAmount) > parseFloat(b.rateTotalAmount)) return 1;
            if(parseFloat(b.rateTotalAmount) > parseFloat(a.rateTotalAmount)) return -1;
            return 0;
        });
    }
}