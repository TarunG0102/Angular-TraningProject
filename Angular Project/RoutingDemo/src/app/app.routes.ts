import { Routes } from '@angular/router';
import { HomeComponent } from '../Componet/home/home.component';
import { AboutUsComponent } from '../Componet/about-us/about-us.component';
import { ServiceComponent } from '../Componet/service/service.component';
import { Component } from '@angular/core';
import { RatingComponent } from '../Componet/about-us/rating/rating.component';
import { FeedbackComponent } from '../Componet/about-us/feedback/feedback.component';
import { FeedbackdemoComponent } from '../Componet/about-us/feedback/feedbackdemo/feedbackdemo.component';

// export const routes: Routes = [
//     { path: '', component: HomeComponent },
//     {
//         path: 'About', component: AboutUsComponent,
//         children: [
//             {
//                 path: 'rating', component: RatingComponent,
//                 children: [
//                     { path: 'feedbackdemo', component: FeedbackdemoComponent },
//                     { path: 'ratingdemo',component:RatingComponent }
//                 ]

//             },
//             { path: 'feedback', component: FeedbackComponent }
//         ]
//     },
//     { path: 'Service', component: ServiceComponent }


// ]


export const routes: Routes = [
    {path:'',loadComponent:() => import('../Componet/home/home.component').then((m)=> m.HomeComponent) },
    {path:'about',loadComponent:() => import('../Componet/about-us/about-us.component').then((m)=> m.AboutUsComponent) },
    {path:'Service',loadComponent:() => import('../Componet/service/service.component').then((m)=> m.ServiceComponent) }

]
