import './dashboard.css';
import calendarIcon from '../../../assets/calendar.svg';
import pointerIcon from '../../../assets/placeholder.svg';

const gridBox = document.querySelector("main");

export default class DashboardView {
    constructor(_vehicleView, _dashboardViewModel) {
        this.dashboardViewModel = _dashboardViewModel;
        this.vehicleView = _vehicleView;
        this.activatedFilter = "";
    }

    init() {
        this.loadListSortedByPrice();
        this.startClickListner();
    }

    loadListSortedByName() {
        this.activatedFilter = "name";
        this.dashboardViewModel.getListVehicleSortedByName()
            .then(vehicleList => {
                this.dashboardGridInit(vehicleList)
            });
    }

    loadListSortedByVendor() {
        this.activatedFilter = "vendor";
        this.dashboardViewModel.getListVehicleSortedByVendor()
            .then(vehicleList => {
                this.dashboardGridInit(vehicleList)
            });
    }

    loadListSortedByPrice() {
        this.activatedFilter = "price";
        this.dashboardViewModel.getListVehicleSortedByPrice()
            .then(vehicleList => {
                this.dashboardGridInit(vehicleList)
            });
    }

    dashboardGridInit(vehiclesList) {
        this.dashboardAttachHeader();
        this.activeFilterButtom(this.activatedFilter);
        vehiclesList.map((vehicle) => {
            const vehicleBox = this.vehicleView.createVehicleBox();
            this.vehicleView.populateVehicleBox(vehicle, vehicleBox);
            this.vehicleView.attachBox(vehicleBox, gridBox);
        });
    }

    dashboardAttachHeader() {
        gridBox.innerHTML = this.dashboardHeaderTemplate();
    }

    startClickListner() {
        document.addEventListener("click", (event) => {
            if (event.target.classList.contains("dashboard-menu__group-item"))
                this.selectFilter(event.target)
            else
                return;
        });
    }

    selectFilter(element) {
        this.unactiveFilterButtom();
        element.classList.add("activated");
        switch (element.getAttribute("id")) {
            case "sortByVehicleNameButtom":
                this.loadListSortedByName();
                break;
            case "sortByVendorButtom":
                this.loadListSortedByVendor();
                break;
            case "sortByPriceButtom":
                this.loadListSortedByPrice();
                break;
        }
    }

    unactiveFilterButtom() {
        document.querySelectorAll(".dashboard-menu__group-item").forEach(element => {
            element.classList.remove("activated");
        });
    }

    activeFilterButtom(filter) {
        switch(filter) {
            case "price" :
                document.querySelector("#sortByPriceButtom").classList.add("activated");
            break;
            case "vendor" :
                document.querySelector("#sortByVendorButtom").classList.add("activated");
            break;
            case "name" :
                document.querySelector("#sortByVehicleNameButtom").classList.add("activated");
            break;
        }
    }

    dashboardHeaderTemplate() {
        return `
            <header class="dashboard-header">
                <div class="dashboard-header__pick-up">
                    <h6>Pick-up</h6>
                    <h4>${pointerIcon} Dublin  Airport (DUB) - ${calendarIcon} 10:00 22 April, 2019</h4>
                </div>
                <div class="dashboard-header__drop-off">
                    <h6>Drop-off</h6>
                    <h4>${pointerIcon} Dublin Airport (DUB) - ${calendarIcon} 10:00 25 April, 2019</h4>
                </div>
            </header>
            <menu class="dashboard-menu">
                <ul class="dashboard-menu__group">
                    <li id="sortByPriceButtom" class="dashboard-menu__group-item">
                        Sort by price
                    </li>
                    <li id="sortByVendorButtom" class="dashboard-menu__group-item">
                        Sort by vendor
                    </li>
                    <li id="sortByVehicleNameButtom" class="dashboard-menu__group-item">
                        Sort by vehicle name
                    </li>
                </ul>
            </menu>
        `;
    }
}