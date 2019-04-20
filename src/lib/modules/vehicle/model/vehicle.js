export default class Vehicle{
    constructor(
        _status, 
        _currencyCode, 
        _estimatedTotalAmount, 
        _rateTotalAmount, 
        _airConditionInd, 
        _baggageQuantity,
        _code,
        _codeContext,
        _doorCount,
        _driveType,
        _fuelType,
        _passengerQuantity,
        _transmissionType,
        _pictureURL,
        _vehMakeModel
    ){
        this.status = _status;
        this.currencyCode = _currencyCode;
        this.estimatedTotalAmount = _estimatedTotalAmount; 
        this.rateTotalAmount = _rateTotalAmount; 
        this.airConditionInd = _airConditionInd; 
        this.baggageQuantity = _baggageQuantity; 
        this.code = _code; 
        this.codeContext = _codeContext; 
        this.doorCount = _doorCount; 
        this.driveType = _driveType; 
        this.fuelType = _fuelType; 
        this.passengerQuantity = _passengerQuantity; 
        this.transmissionType = _transmissionType; 
        this.pictureURL = _pictureURL; 
        this.vehMakeModel = _vehMakeModel; 
    }
}