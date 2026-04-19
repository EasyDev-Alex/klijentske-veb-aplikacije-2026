export interface OrderModel {
    flightId: number
    airlineId: number
    seatingTypeId: number
    ageGroup: 'a' | 'c'
    count: number
    createdAt: string
}