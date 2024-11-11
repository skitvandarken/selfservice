import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ValidacaoComponent } from './validacao/validacao.component';

export const routes: Routes = [

    {path:'', component: InicioComponent },
    {path:'servicos', component: ServicosComponent },
    {path:'validacao', component: ValidacaoComponent}

];
