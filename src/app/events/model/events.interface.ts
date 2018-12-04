export interface Data {
    title?: string,
    startDate?: string,
    endDate?: string,
    email?: string,
    location?: string,
    description?: string,
    guests?: string[],
    startTime?: string,
    endTime?: string
}

export interface Events {
    data?: Data[]
}