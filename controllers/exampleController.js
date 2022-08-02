const ExampleService = require("../services/exampleService");

class ExampleController {
    constructor() { }
    static async get(req, res) {
        const data = await ExampleService.getData();
        res.status(200);
        res.json(data);
    }
}

module.exports = ExampleController;