import Vehicle from './vehicle.js';

export default class VehicleService {
    getAllVehicles(sucess, error) {
        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
            (xhr.status >= 200 && xhr.status < 300) ? sucess(xhr.response): error(xhr.response);
        }
        xhr.onerror = error
        xhr.open('GET', 'http://www.cartrawler.com/ctabe/cars.json', true);
        xhr.send();
    }
}