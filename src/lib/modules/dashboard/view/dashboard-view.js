import './dashboard.css';

export default class DashboardView {
    constructor(_vehicleView, _dashboardViewModel) {
        this.dashboardViewModel = _dashboardViewModel;
        this.vehicleView = _vehicleView;
    }

    init() {
        this.loadList();
    }

    loadList() {
        this.dashboardViewModel.getListVehicle()
            .then(vehicleList => {
                this.dashboardGridInit(vehicleList)
            });
    }

    dashboardGridInit(vehiclesList){
        const gridBox = document.querySelector("main");
        vehiclesList.map((vehicle) => {
            const vehicleBox = this.vehicleView.createVehicleBox();
            this.vehicleView.populateVehicleBox(vehicle, vehicleBox);
            this.vehicleView.attachBox(vehicleBox, gridBox);
        });
    }
}