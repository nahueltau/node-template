
class ExampleService {
    constructor() { }
    static async getData(n) {

        return {
            "food": [
                {
                    "Name": "Apple",
                    "Type": "fruit",
                    "Price": 100
                },
                {
                    "Name": "pizza",
                    "Type": "italian",
                    "Price": 370
                },
                {
                    "Name": "Burger",
                    "Type": "Mac&Cheese",
                    "Price": 310
                },
                {
                    "Name": "salad",
                    "Type": "Veg",
                    "Price": 50
                }
            ]
        };
    }
}

module.exports = ExampleService;