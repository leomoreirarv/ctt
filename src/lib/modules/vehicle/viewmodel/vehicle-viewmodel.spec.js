import VechicleViewModel from "./vehicle-viewmodel";

describe("Vehicle Viewmodel", ()=>{
    it("Vehicle list should not be null", ()=>{
        const viewmodel = new VechicleViewModel();
        const vehicleList = viewmodel.convertToListVehicle(apiResponse);
        expect(vehicleList).not.toBeNull()
    });
});

const apiResponse = `
[
    {
      "VehAvailRSCore": {
        "VehRentalCore": {
          "@PickUpDateTime": "2014-09-22T10:00:00Z",
          "@ReturnDateTime": "2014-10-06T10:00:00Z",
          "PickUpLocation": {
            "@Name": "Las Vegas - Airport"
          },
          "ReturnLocation": {
            "@Name": "Las Vegas - Airport"
          }
        },
        "VehVendorAvails": [
          {
            "Vendor": {
              "@Code": "125",
              "@Name": "ALAMO"
            },
            "VehAvails": [
              {
                "@Status": "Available",
                "Vehicle": {
                  "@AirConditionInd": "true",
                  "@TransmissionType": "Automatic",
                  "@FuelType": "Petrol",
                  "@DriveType": "Unspecified",
                  "@PassengerQuantity": "5+",
                  "@BaggageQuantity": "3",
                  "@Code": "IFAR",
                  "@CodeContext": "CARTRAWLER",
                  "@DoorCount": "5",                               
                  "VehMakeModel": {
                    "@Name": "Toyota Rav4 or similar"
                  },
                  "PictureURL": "https://cdn.cartrawler.com/otaimages/toyota/rav_4_nologo.jpg"
                },                
                "TotalCharge": {
                  "@RateTotalAmount": "878.98",
                  "@EstimatedTotalAmount": "878.98",
                  "@CurrencyCode": "CAD"
                }
              }
            ]
          }
        ]
      }
    }
  ]
`;

