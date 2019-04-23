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
import DetailsView from '../../details/view/details-view';
import './vehicle.css';

export default class VehicleViewFactory {
    
    createVehicleBox() {
        const groupBox = document.createElement('div');
        groupBox.setAttribute("class", "vehicle-group-box");
        
        groupBox.innerHTML = this.boxTemplate();
        return groupBox;
    }

    imageBuilder(box, url, title) {
        const img = box.querySelector(".vehicle-image");
        img.setAttribute("src", url);
        img.setAttribute("alt", title);
    }

    titleBuilder(box, text, status) {
        const title = box.querySelector("h3.vehicle-title");
        text = text.replace("or similar", "<span>or similar</span>")
        title.innerHTML = `${text}<span>${checkedIcon} ${status}</span>`;
    }

    gasIconBuilder(box, gastype) {
        const gas = box.querySelector(".vehicle-information-gas-label");
        gas.innerText = gastype;
    }

    baggageIconBuilder(box, baggageQuantity) {
        const baggage = box.querySelector(".vehicle-information-baggage-label");
        baggage.innerText = baggageQuantity;
    }

    doorIconBuilder(box, doorCount) {
        const door = box.querySelector(".vehicle-information-door-label");
        door.innerText = doorCount;
    }

    passangerIconBuilder(box, passangerCount) {
        const passanger = box.querySelector(".vehicle-information-passanger-label");
        passanger.innerText = passangerCount;
    }

    transmissionIconBuilder(box, transmission) {
        const gear = box.querySelector(".vehicle-information-gear-label");
        gear.innerText = transmission;

    }

    airConditionerIconBuilder(box, airCond) {
        const airConditioner = box.querySelector(".vehicle-information-airconditioner-icon");
        if (!JSON.parse(airCond)) {
            airConditioner.setAttribute("style", "display: none");
        }
    }

    vendorLogoBuild(box, vendor) {
        const vendorLogo = box.querySelector(".vehicle-information__logo-vendor");
        switch (vendor.trim()) {
            case "HERTZ":
                vendorLogo.innerHTML = hertzLogo;
                break;
            case "ALAMO":
                vendorLogo.innerHTML = alamoLogo;
                break;
            case "AVIS":
                vendorLogo.innerHTML = avisLogo;
                break;
        }
    }

    priceBuilder(box, price, currencyCode){
        const boxPrice = box.querySelector(".vehicle-information__price");
        const priceSplited = price.split(".");
        boxPrice.innerHTML = `<h6>${priceSplited[0]}<span>.${priceSplited[1]}</span> <span>${currencyCode}</span></h6>`;
    }

    clickBoxHandle(box, vehicle){
        box.addEventListener("click", ()=> {
            const detailsView = new DetailsView(vehicle);
            window.history.pushState(detailsView, "Vehicle Detail", "detail.html");
            window.onpopstate = () => {
                window.location = "index.html";
            }
            detailsView.init();
        })
    }

    populateVehicleBox(vehicle, box) {
        this.imageBuilder(box, vehicle.pictureURL, vehicle.vehMakeModel)
        this.titleBuilder(box, vehicle.vehMakeModel, vehicle.status);
        this.gasIconBuilder(box, vehicle.fuelType);
        this.baggageIconBuilder(box, vehicle.baggageQuantity);
        this.doorIconBuilder(box, vehicle.doorCount);
        this.passangerIconBuilder(box, vehicle.passengerQuantity);
        this.transmissionIconBuilder(box, vehicle.transmissionType)
        this.airConditionerIconBuilder(box, vehicle.airConditionInd);
        this.vendorLogoBuild(box, vehicle.vendor);
        this.priceBuilder(box, vehicle.rateTotalAmount, vehicle.currencyCode);
        this.clickBoxHandle(box, vehicle);
    }

    attachBox(box, destination) {
        destination.appendChild(box);
    }

    boxTemplate() {
        return `
            <div class="vehicle-info-group">
                <div class="vehicle-info-group__header">
                    <img src="" alt="" class="vehicle-image">
                    <div class="vehicle-info-group__header__description">
                        <h3 class="vehicle-title"></h3>
                        <div class="vehicle-information__icon-group">
                            <div class="vehicle-information__icon-description">
                                ${gasIcon}<span class="vehicle-information-label vehicle-information-gas-label"></span>
                            </div>
                            <div class="vehicle-information__icon-description">
                                ${suitCaseIcon}<span class="vehicle-information-label vehicle-information-baggage-label"></span>
                            </div>
                            <div class="vehicle-information__icon-description">
                                ${carDoorIcon}<span class="vehicle-information-label vehicle-information-door-label"></span>
                            </div>
                            <div class="vehicle-information__icon-description">
                                ${passangerIcon}<span class="vehicle-information-label vehicle-information-passanger-label"></span>
                            </div>
                            <div class="vehicle-information__icon-description">
                                ${gearShiftIcon}<span class="vehicle-information-label vehicle-information-gear-label"></span>
                            </div>
                            <div class="vehicle-information__icon-description vehicle-information-airconditioner-icon">
                                ${airConditionerIcon}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vehicle-info-group__footer">
                    <div class="vehicle-information__price"></div>
                    <div class="vehicle-information__logo-vendor"></div>
                </div>
            </div>
            `;
    }
}