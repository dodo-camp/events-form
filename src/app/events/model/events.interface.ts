export interface Data {
    title?: String,
    startDate?: String,
    endDate?: String,
    email?: String,
    location?: String,
    description?: String,
    guests?: String[]
}

export interface Events {
    data?: Data[]
}