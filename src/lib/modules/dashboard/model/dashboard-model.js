export default class DashboardModel{
    constructor(_pickupTime, _returnTime, _pickupLocation, _returnLocation){
        this.pickupTime = _pickupTime;
        this.returnTime = _returnTime;
        this.pickupLocation = _pickupLocation;
        this.returnLocation = _returnLocation;
    }
}