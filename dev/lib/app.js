import CarService from './service/car-service.js';

const service = new CarService();
service.getCars( res => console.log("sucess", res), error => console.log("error", error));