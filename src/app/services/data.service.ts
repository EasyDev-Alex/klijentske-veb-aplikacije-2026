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

    static getAirlinesById(id: number) {
        for (let a of this.getAirlines()) {
            if (a.id === id) return a
        }
        return this.getAirlines()[0]
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

    static getSeatingTypeById(id: number) {
        for (let st of this.getSeatingTypes()) {
            if (st.id === id) return st
        }
        return this.getSeatingTypes()[0]
    }

    static getFullAgeGroupText(ag: 'a' | 'c') {
        return ag == 'a' ? 'Adult' : 'Child'
    }
}