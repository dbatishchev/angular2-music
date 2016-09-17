import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ArtistComponent} from "./components/artist/artist.component";
import {HomeComponent} from "./components/home/home.component";

export const appRoutes: Routes = [
    {
        path: 'artist',
        component: ArtistComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

