export class DataService {
    static getAirlines() {
        return [
            {
                id: '1',
                name: 'Air Serbia',
                logoUrl: 'assets/air-serbia-logo.png'
            },
            {
                id: '2',
                name: 'Wizz Air',
                logoUrl: 'assets/wizz-air-logo.png'
            },
            {
                id: '3',
                name: 'Ryanair',
                logoUrl: 'assets/ryanair-logo.png'
            }
        ]
    }

    static getSeatingTypes() {
        return [
            {
                id: '1',
                name: 'Economy'
            },
            {
                id: '2',
                name: 'Business'
            },
            {
                id: '3',
                name: 'First Class'
            }
        ]
    }
}