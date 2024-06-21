import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { state } from "@angular/animations";

export const SelectKartStore = createFeatureSelector<AppState>('Kart');

export const kartSelector = createSelector(
    SelectKartStore,(state:AppState)=>state.kart
);