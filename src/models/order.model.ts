export interface OrderModel {
    flightId: number
    airlineId: number
    seatingTypeId: number
    ageGroup: 'a' | 'c'
    state: 'w' | 'c' | 'p'
    count: number
    createdAt: string
}