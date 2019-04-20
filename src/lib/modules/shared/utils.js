import Vehicle from '../vehicle/model/vehicle.js';

export default convertToListVehicle = (res) => {
    const response = JSON.parse(res);
    const vendors = response[0].VehAvailRSCore.VehVendorAvails;
    let vehicles = [];
    vendors.forEach((vendor) => {
        vendor.VehAvails.forEach((v) => {
            const vehicle = new Vehicle(
                v['@Status'],
                v.TotalCharge['@CurrencyCode'],
                v.TotalCharge['@EstimatedTotalAmount'],
                v.TotalCharge['@RateTotalAmount'],
                v.Vehicle['@AirConditionInd'],
                v.Vehicle['@BaggageQuantity'],
                v.Vehicle['@Code'],
                v.Vehicle['@CodeContext'],
                v.Vehicle['@DoorCount'],
                v.Vehicle['@DriveType'],
                v.Vehicle['@FuelType'],
                v.Vehicle['@PassengerQuantity'],
                v.Vehicle['@TransmissionType'],
                v.Vehicle.PictureURL,
                v.Vehicle.VehMakeModel['@Name']
            );
            vehicles.push(vehicle);
        });
        return vehicles;
    });
}