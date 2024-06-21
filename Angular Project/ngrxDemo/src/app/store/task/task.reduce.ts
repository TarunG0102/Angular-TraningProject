import { createReducer, on } from "@ngrx/store"
import { AppState, initialState } from "../app.state"
import { add, clear, clearall, remove } from "./task.actions"
import { state } from "@angular/animations"

export const taskReducer = createReducer(
    initialState,
    on(add, (state: AppState, { task }: any) => {
        console.log("add Reducer Called!! ", JSON.stringify(task))
        return {
            ...state,
            task: [...state.task, task]
        }
    }),

    on(remove, (state, { tid }) => (
        {
            ...state,
            task: state.task.filter((p) => p.id != tid)

        })),

    on(clear, (state) => {
        return { ...state, task: [] }  //To Remove only Task
    }),

    on(clearall, state => initialState) // Clear All
)

