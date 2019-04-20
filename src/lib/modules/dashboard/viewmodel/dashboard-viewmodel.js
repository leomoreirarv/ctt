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
}