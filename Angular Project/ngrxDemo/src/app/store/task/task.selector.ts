import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const SelectTaskStore = createFeatureSelector<AppState>('Task');

export const taskSelector = createSelector(
    SelectTaskStore,(state:AppState)=>state.task
);