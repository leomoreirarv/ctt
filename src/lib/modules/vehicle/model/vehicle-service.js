export default class VehicleService {
    getAllVehicles(sucess, error) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://www.cartrawler.com/ctabe/cars.json', true);
        xhr.onload = () => {
            (xhr.status >= 200 && xhr.status < 300) ? sucess(xhr.response): error(xhr.response);
        }
        xhr.onerror = error
        xhr.send();
    }

    saveVehiclesLocalStore(vehicles){
        localStorage.setItem("vehicles", vehicles);
    }

    getVehiclesFromLocalStorage(){
        return localStorage.getItem("vehicles");
    }
}