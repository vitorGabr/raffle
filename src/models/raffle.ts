import { Status } from "./enum/status";

export interface Raffle {
    name?: string,
    email?: string,
    numbers: number[],
    status?: Status
}