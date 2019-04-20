import './vehicle.css';
import gasIcon  from '../../../assets/gas-station.svg'; 
import suitCaseIcon from '../../../assets/suitcase-with-white-details.svg';
import carDoorIcon from '../../../assets/car-door.svg';
import passangerIcon from '../../../assets/multiple-users-silhouette.svg';

export default class VehicleView {
    createVehicleBox() {
        const groupBox = document.createElement('div');
        groupBox.setAttribute("class", "vehicle-group-box");

        groupBox.innerHTML = this.boxTemplate();
        return groupBox;
    }

    populateVehicleBox(vehicle, box) {
        console.log(vehicle);

        const img = box.querySelector(".vehicle-image");
        img.setAttribute("src", vehicle.pictureURL);
        img.setAttribute("alt", vehicle.vehMakeModel);

        const title = box.querySelector("h3.vehicle-title");
        title.innerHTML = vehicle.vehMakeModel + '<span>' + vehicle.status + '</span>';

        const gas = box.querySelector(".vehicle-information-gas-label");
        gas.innerText = vehicle.fuelType;

        const baggage = box.querySelector(".vehicle-information-baggage-label");
        baggage.innerText = vehicle.baggageQuantity;

        const door = box.querySelector(".vehicle-information-door-label");
        door.innerText = vehicle.doorCount;
        
        const passanger = box.querySelector(".vehicle-information-passanger-label");
        passanger.innerText = vehicle.passengerQuantity;
    }

    attachBox(box, destination) {
        destination.appendChild(box);
    }

    boxTemplate() {
        return  '<img src="" alt="" class="vehicle-image">' +
                '<h3 class="vehicle-title"></h3>' +
                '<div class="vehicle-information">' +
                    '<div class="vehicle-information__icon-description"><svg>' + gasIcon + '</svg>' +
                    '<span class="vehicle-information-label vehicle-information-gas-label"></span></div>' +
                    '<div class="vehicle-information__icon-description"><svg>' + suitCaseIcon + '</svg>' +
                    '<span class="vehicle-information-label vehicle-information-baggage-label"></span></div>' +
                    '<div class="vehicle-information__icon-description"><svg>' + carDoorIcon + '</svg>' +
                    '<span class="vehicle-information-label vehicle-information-door-label"></span></div>' +
                    '<div class="vehicle-information__icon-description"><svg>' + passangerIcon + '</svg>' +
                    '<span class="vehicle-information-label vehicle-information-passanger-label"></span></div>' +
                '</div>';
    }
}

/**
 * createVehicleBox() {
        const groupBox = document.createElement("div");
        groupBox.setAttribute("class", "vehicle-group-box");

        const img = document.createElement("img");
        img.setAttribute("class", "vehicle-image");

        const title = document.createElement("h3");

        groupBox.appendChild(img);
        groupBox.appendChild(title);

        return groupBox;
    }
 */