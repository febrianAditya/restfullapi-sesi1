const { Vehicle } = require("../models")

class VehicleControllers {

    static async getAllVehicle(req, res) {
        try {
            const resultData = await Vehicle.findAll()
            // console.log(resultData);
            
            const result = resultData.map(el => {
                return el.toJSON()
            })

            res.status(200).json(result)
        } catch (error) {
            console.log(error, "==> APA")
            res.status(500).json(error)  
        }
    }
}

module.exports = VehicleControllers