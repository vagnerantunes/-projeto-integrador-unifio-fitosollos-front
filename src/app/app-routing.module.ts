import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

//Usuario
import { UsuariosCrudComponent } from './views/usuarios-crud/usuarios-crud.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';

//proprietario
import { ProprieraiosCrudComponent } from './views/proprieraios-crud/proprieraios-crud.component';
import { ProprietarioCreateComponent } from './components/proprietario/proprietario-create/proprietario-create.component';
import { ProprietarioUpdateComponent } from './components/proprietario/proprietario-update/proprietario-update.component';
import { ProprietarioDeleteComponent } from './components/proprietario/proprietario-delete/proprietario-delete.component';

//CRQ
import { CrqCreateComponent } from './components/crq/crq-create/crq-create.component';
import { CrqCrudComponent } from './views/crq-crud/crq-crud.component';
import { CrqUpdateComponent } from './components/crq/crq-update/crq-update.component';
import { CrqDeleteComponent } from './components/crq/crq-delete/crq-delete.component';

//Cultura
import { CulturaCrudComponent } from './views/cultura-crud/cultura-crud.component';
import { CulturaCreateComponent } from './components/cultura/cultura-create/cultura-create.component';
import { CulturaUpdateComponent } from './components/cultura/cultura-update/cultura-update.component';
import { CulturaDeleteComponent } from './components/cultura/cultura-delete/cultura-delete.component';

//Forma de pagamento
import { FormaPagamentoCreateComponent } from './components/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FormaPagamentoUpdateComponent } from './components/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
import { FormaPagamentoDeleteComponent } from './components/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';

//Laboratório
import { LaboratorioCrudComponent } from './views/laboratorio-crud/laboratorio-crud.component';
import { LaboratorioDeleteComponent } from './components/laboratorio/laboratorio-delete/laboratorio-delete.component';
import { LaboratorioUpdateComponent } from './components/laboratorio/laboratorio-update/laboratorio-update.component';
import { LaboratorioCreateComponent } from './components/laboratorio/laboratorio-create/laboratorio-create.component';

//Nematoide
import { NematoideCrudComponent } from './views/nematoide-crud/nematoide-crud.component';
import { NematoideCreateComponent } from './components/nematoide/nematoide-create/nematoide-create.component';
import { NematoideUpdateComponent } from './components/nematoide/nematoide-update/nematoide-update.component';
import { NematoideDeleteComponent } from './components/nematoide/nematoide-delete/nematoide-delete.component';

//Tipo de analises
import { TipoAnaliseCrudComponent } from './views/tipo-analise-crud/tipo-analise-crud.component';
import { AnaliseCreateComponent } from './components/analise/analise-create/analise-create.component';
import { AnaliseUpdateComponent } from './components/analise/analise-update/analise-update.component';
import { AnaliseDeleteComponent } from './components/analise/analise-delete/analise-delete.component';

//Tabela de preços
import { PrecosCrudComponent } from './views/precos-crud/precos-crud.component';
import { PrecosCreateComponent } from './components/precos/precos-create/precos-create.component';
import { PrecosUpdateComponent } from './components/precos/precos-update/precos-update.component';
import { PrecosDeleteComponent } from './components/precos/precos-delete/precos-delete.component';

//Tecnicos
import { TecnicoCrudComponent } from './views/tecnico-crud/tecnico-crud.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "usuarios",
    component: UsuariosCrudComponent
  },
  {
    path: "usuarios/create",
    component: UsuarioCreateComponent
  },
  {
    path: "usuarios/update/:id",
    component: UsuarioUpdateComponent
  },
  {
    path: "usuarios/delete/:id",
    component: UsuarioDeleteComponent
  },
  {
    path: "proprietarios",
    component: ProprieraiosCrudComponent
  },
  {
    path: "proprietarios/create",
    component: ProprietarioCreateComponent
  },
  {
    path: "proprietarios/update/:id",
    component: ProprietarioUpdateComponent
  },
  {
    path: "proprietarios/delete/:id",
    component: ProprietarioDeleteComponent
  },
  {
    path: "crqs",
    component: CrqCrudComponent
  },
  {
    path: "crqs/create",
    component: CrqCreateComponent
  },
  {
    path: "crqs/update/:id",
    component: CrqUpdateComponent
  },
  {
    path: "crqs/delete/:id",
    component: CrqDeleteComponent
  },
  {
    path: "culturas",
    component: CulturaCrudComponent
  },
  {
    path: "culturas/create",
    component: CulturaCreateComponent
  },
  {
    path: "culturas/update/:id",
    component: CulturaUpdateComponent
  },
  {
    path: "culturas/delete/:id",
    component: CulturaDeleteComponent
  },
  {
    path: "pagamentos",
    component: FormaPagamentoCrudComponent
  },
  {
    path: "pagamentos/create",
    component: FormaPagamentoCreateComponent
  },
  {
    path: "pagamentos/update/:id",
    component: FormaPagamentoUpdateComponent
  },
  {
    path: "pagamentos/delete/:id",
    component: FormaPagamentoDeleteComponent
  },
  {
    path: "laboratorios",
    component: LaboratorioCrudComponent
  },
  {
    path: "laboratorios/create",
    component: LaboratorioCreateComponent
  },
  {
    path: "laboratorios/update/:id",
    component: LaboratorioUpdateComponent
  },
  {
    path: "laboratorios/delete/:id",
    component: LaboratorioDeleteComponent
  },
  {
    path: "nematoides",
    component: NematoideCrudComponent
  },
  {
    path: "nematoides/create",
    component: NematoideCreateComponent
  },
  {
    path: "nematoides/update/:id",
    component: NematoideUpdateComponent
  },
  {
    path: "nematoides/delete/:id",
    component: NematoideDeleteComponent
  },
  {
    path: "analises",
    component: TipoAnaliseCrudComponent
  },
  {
    path: "analises/create",
    component: AnaliseCreateComponent
  },
  {
    path: "analises/update/:id",
    component: AnaliseUpdateComponent
  },
  {
    path: "analises/delete/:id",
    component: AnaliseDeleteComponent
  },
  {
    path: "precos",
    component: PrecosCrudComponent
  },
  {
    path: "precos/create",
    component: PrecosCreateComponent
  },
  {
    path: "precos/update/:id",
    component: PrecosUpdateComponent
  },
  {
    path: "precos/delete/:id",
    component: PrecosDeleteComponent
  },
  {
    path: "tecnicos",
    component: TecnicoCrudComponent
  },
  {
    path: "tecnicos/create",
    component: TecnicoCreateComponent
  },
  {
    path: "tecnicos/update/:id",
    component: TecnicoUpdateComponent
  },
  {
    path: "tecnicos/delete/:id",
    component: TecnicoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
