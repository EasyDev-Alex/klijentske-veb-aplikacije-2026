export class AuthService {
<<<<<<< HEAD
    static getUsers(): UserModel[] {
        if (localStorage.getItem(USERS) == null) {
            localStorage.setItem(USERS, JSON.stringify({
                email: 'user@example.com',
                password: 'user123',
                destination: 'Zagreb',
                firstName: 'Example',
                lastName: 'User',
                orders: []
            }))
        }

        return JSON.parse(localStorage.getItem(USERS)!)
    }

    static login(email: string, password: string) {
        const users = this.getUsers()
        for (let u of users) {
            if (u.email === email && u.password === password) {
                localStorage.setItem(ACTIVE, email)
                return true
            }
        }
        return false
    }

    static getActiveUser(): UserModel | null {
        const users = this.getUsers()
        for (let u of users) {
            if (u.email === localStorage.getItem(ACTIVE)) {
                return u
            }
        }

        return null
    }

    static logout() {
        localStorage.removeItem(ACTIVE)
    }
=======
    
>>>>>>> parent of 8fdccf2 (Created login component)
}