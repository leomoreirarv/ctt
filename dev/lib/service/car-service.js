export default class CarSevice {
  constructor(){
      this.name = "CarService"
  }

  getCars(sucess, error){
      let xhr = new XMLHttpRequest();

      xhr.onload = () => {
          (xhr.status >= 200 && xhr.status < 300) ? sucess(xhr.response) : error(xhr.response);
      }

      xhr.open('GET', 'http://www.cartrawler.com/ctabe/cars.json');
      xhr.send();
  }
}