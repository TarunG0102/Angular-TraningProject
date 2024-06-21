import { createReducer, on } from "@ngrx/store";
import { AppState, initialState } from "../app.state";
import { state } from "@angular/animations";
import { add, clear, clearall, remove } from "./kart.actions";



export const kartReducer = createReducer(
    initialState,
    on(add, (state: AppState, { person }: any) => {
        console.log("add Reducer Called!! ", JSON.stringify(person))
        return {
            ...state,
            kart: [...state.kart, person]
        }
    }),

    on(remove, (state, { pid }) => (
        {
            ...state,
            kart: state.kart.filter((p) => p.id != pid)

        })),

    on(clear, (state) => {
        return { ...state, kart: [] }  //To Remove only kart
    }),

    on(clearall, state => initialState) //To Clear All State
);
