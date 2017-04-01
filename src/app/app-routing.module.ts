import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


import { ExpComponent } from './exp/exp.component';
import { ProjectComponent } from './project/project.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
    { path: '', redirectTo: '/intro', pathMatch: 'full' },
    { path: 'intro', component: IntroductionComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'experience', component: ExpComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
    // { path: 'detail/:id', component: HeroDetailComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }