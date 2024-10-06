import { Routes } from "@angular/router";
import { LayoutComponent } from "./layouts/layout/layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const FEATURES_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      }
    ]
  }
]