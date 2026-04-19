export class DataService {
    static getAirlines() {
        return [
            {
                id: 1,
                name: 'Air Serbia',
                priceImpact: 1.0,
                // logoUrl: 'assets/air-serbia-logo.png'
            },
            {
                id: 2,
                name: 'Wizz Air',
                priceImpact: 0.8,
                // logoUrl: 'assets/wizz-air-logo.png'
            },
            {
                id: 3,
                name: 'Ryanair',
                priceImpact: 0.6,
                // logoUrl: 'assets/ryanair-logo.png'
            }
        ]
    }

    static getSeatingTypes() {
        return [
            {
                id: 1,
                name: 'Economy',
                price: 80
            },
            {
                id: 2,
                name: 'Business',
                price: 130
            },
            {
                id: 3,
                name: 'First Class',
                price: 200
            }
        ]
    }
}