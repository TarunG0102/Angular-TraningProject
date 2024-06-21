import { Person } from "../models/Person.model";
import { Task } from "../models/Task.model";


export interface AppState {

    kart: Person[];
    task: Task[];
}

export const initialState: AppState = {
    // kart: [],
    task: [],
    kart: [{ id: 0, fname: "Rahul", lname: "Yadav" }]
}