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

//Recebimento
import { RecebimentoCreateComponent } from './components/recebimento/recebimento-create/recebimento-create.component';
import { RecebimentoCrudComponent } from './views/recebimento-crud/recebimento-crud.component';
import { RecebimentoUpdateComponent } from './components/recebimento/recebimento-update/recebimento-update.component';
import { RecebimentoDeleteComponent } from './components/recebimento/recebimento-delete/recebimento-delete.component';

//Amostra
import { AmostraCrudComponent } from './views/amostra-crud/amostra-crud.component';
import { AmostraCreateComponent } from './components/amostra/amostra-create/amostra-create.component';
import { AmostraUpdateComponent } from './components/amostra/amostra-update/amostra-update.component';
import { AmostraDeleteComponent } from './components/amostra/amostra-delete/amostra-delete.component';

//Resultados de analise
import { ResultadoAnaliseCrudComponent } from './views/resultado-analise-crud/resultado-analise-crud.component';
import { ResultadoAnaliseCreateComponent } from './components/resultadoAnalise/resultado-analise-create/resultado-analise-create.component';
import { ResultadoAnaliseUpdateComponent } from './components/resultadoAnalise/resultado-analise-update/resultado-analise-update.component';
import { ResultadoAnaliseDeleteComponent } from './components/resultadoAnalise/resultado-analise-delete/resultado-analise-delete.component';

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
    path: "usuarios/update/:usuId",
    component: UsuarioUpdateComponent
  },
  {
    path: "usuarios/delete/:usuId",
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
    path: "proprietarios/update/:proId",
    component: ProprietarioUpdateComponent
  },
  {
    path: "proprietarios/delete/:proId",
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
    path: "crqs/update/:crqId",
    component: CrqUpdateComponent
  },
  {
    path: "crqs/delete/:crqId",
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
    path: "culturas/update/:culId",
    component: CulturaUpdateComponent
  },
  {
    path: "culturas/delete/:culId",
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
    path: "pagamentos/update/:fpgId",
    component: FormaPagamentoUpdateComponent
  },
  {
    path: "pagamentos/delete/:fpgId",
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
    path: "laboratorios/update/:labId",
    component: LaboratorioUpdateComponent
  },
  {
    path: "laboratorios/delete/:labId",
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
    path: "nematoides/update/:nemId",
    component: NematoideUpdateComponent
  },
  {
    path: "nematoides/delete/:nemId",
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
    path: "analises/update/:tipId",
    component: AnaliseUpdateComponent
  },
  {
    path: "analises/delete/:tipId",
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
    path: "precos/update/:tabId",
    component: PrecosUpdateComponent
  },
  {
    path: "precos/delete/:tabId",
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
    path: "tecnicos/update/:tecId",
    component: TecnicoUpdateComponent
  },
  {
    path: "tecnicos/delete/:tecId",
    component: TecnicoDeleteComponent
  },
  {
    path: "recebimentos",
    component: RecebimentoCrudComponent
  },
  {
    path: "recebimentos/create",
    component: RecebimentoCreateComponent
  },
  {
    path: "recebimentos/update/:recId",
    component: RecebimentoUpdateComponent
  },
  {
    path: "recebimentos/delete/:recId",
    component: RecebimentoDeleteComponent
  },
  {
    path: "amostras",
    component: AmostraCrudComponent
  },
  {
    path: "amostras/create",
    component: AmostraCreateComponent
  },
  {
    path: "amostras/update/:amoId",
    component: AmostraUpdateComponent
  },
  {
    path: "amostras/delete/:amoId",
    component: AmostraDeleteComponent
  },
  {
    path: "ranalises",
    component: ResultadoAnaliseCrudComponent
  },
  {
    path: "ranalises/create",
    component: ResultadoAnaliseCreateComponent
  },
  {
    path: "ranalises/update/:resId",
    component: ResultadoAnaliseUpdateComponent
  },
  {
    path: "ranalises/delete/:resId",
    component: ResultadoAnaliseDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
