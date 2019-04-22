import '../styles/app.css';

import VehicleService from './modules/vehicle/model/vehicle-service.js';
import VehicleViewModel from './modules/vehicle/viewmodel/vehicle-viewmodel.js';
import VehicleView from './modules/vehicle/view/vehicle-view.js';

import DashboardViewModel from './modules/dashboard/viewmodel/dashboard-viewmodel';
import DashboardView from './modules/dashboard/view/dashboard-view.js';

const vehicleService = new VehicleService();
const vehicleViewModel = new VehicleViewModel()
const vehicleView = new VehicleView();

const dashboardViewModel = new DashboardViewModel(vehicleService, vehicleViewModel);
const dashboardView = new DashboardView(vehicleView, dashboardViewModel);

dashboardView.init();

