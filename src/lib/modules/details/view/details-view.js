import './details.css';
import carDoorIcon from '../../../assets/car-door.svg';
import checkedIcon from '../../../assets/correct-symbol.svg';
import gasIcon from '../../../assets/gas-station.svg';
import gearShiftIcon from '../../../assets/gearshift.svg';
import airConditionerIcon from '../../../assets/ice-crystal.svg';
import passangerIcon from '../../../assets/multiple-users-silhouette.svg';
import suitCaseIcon from '../../../assets/suitcase-with-white-details.svg';
import hertzLogo from '../../../assets/hertz.svg';
import avisLogo from '../../../assets/avis.svg';
import alamoLogo from '../../../assets/alamo.svg';


export default class DetailsView {
    constructor(_vehicle) {
        this.vehicle = _vehicle;
        console.log(_vehicle);
    }

    init() {
        this.attachVehicleTemplate();
    }

    vendorLogoBuild(vendor) {
        let icon = "";
        switch (vendor.trim()) {
            case "HERTZ":
                icon = hertzLogo;
                break;
            case "ALAMO":
                icon = alamoLogo;
                break;
            case "AVIS":
                icon = avisLogo;
                break;
        }
        return icon;
    }

    attachVehicleTemplate() {
        const main = document.querySelector("body > main");
        main.innerHTML = this.vehicleTemplate();
    }

    vehicleTemplate() {
        return `
            <div id="vehicle-details">
                <header id="vehicle-details__header">
                    <img id="vehicle-details__header-image" src="${this.vehicle.pictureURL}">
                    <h1 id="vehicle-details_header-title">${this.vehicle.vehMakeModel}</h1>
                    ${this.vendorLogoBuild(this.vehicle.vendor)}                
                </header>
                <div id="vehicle-details__info">
                    <div id="vehicle-details__info-icons-group">
                        <div class="vehicle-details__info-icons-group__icon-desc">
                            ${gasIcon} ${this.vehicle.fuelType}
                        </div>
                        <div class="vehicle-details__info-icons-group__icon-desc">
                            ${suitCaseIcon} ${this.vehicle.baggageQuantity}
                        </div>
                        <div class="vehicle-details__info-icons-group__icon-desc">
                            ${carDoorIcon} ${this.vehicle.doorCount}
                        </div>
                        <div class="vehicle-details__info-icons-group__icon-desc">
                            ${passangerIcon} ${this.vehicle.passengerQuantity}
                        </div>
                        <div class="vehicle-details__info-icons-group__icon-desc">
                            ${gearShiftIcon} ${this.vehicle.transmissionType}
                        </div>
                        <div class="vehicle-details__info-icons-group__icon-desc">
                            ${(JSON.parse(this.vehicle.airConditionInd)) ? airConditionerIcon : ""}
                        </div>
                    </div>
                    <div id="vehicle-details__info__price">
                        <h1>${this.vehicle.rateTotalAmount} <span>${this.vehicle.currencyCode}</span></h1>
                    </div>
                </div>
            </div>
        `;
    }
}