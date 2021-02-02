import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { MemberComponent } from "./Member/Member.component";

export const appRoutes: Routes = [
    {path:'',component:AppComponent},
    {
        path:'',
        runGuardsAndResolvers:'always',
        children:[
            {path:'members',component:MemberComponent}
        ]
    }
];