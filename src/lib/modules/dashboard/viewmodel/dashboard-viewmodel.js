import '../view/dashboard.css';


export default class DashboardViewModel {

    constructor(_vehicleService, _vehicleViewModel) {
        this.vehicleService = _vehicleService;
        this.vehicleVieModel = _vehicleViewModel;
    }

    init() {
        return new Promise(resolve => {
            this.refreshVehicles().then((response) => {
                this.vehicleService.saveVehiclesLocalStore(JSON.stringify(this.vehicleVieModel.convertToListVehicle(response)));
                resolve();
            });
        })
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