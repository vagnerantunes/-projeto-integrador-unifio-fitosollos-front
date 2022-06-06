import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';

//modulos importados de material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { UsuariosCrudComponent } from './views/usuarios-crud/usuarios-crud.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { ProprieraiosCrudComponent } from './views/proprieraios-crud/proprieraios-crud.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { ProprietarioCreateComponent } from './components/proprietario/proprietario-create/proprietario-create.component';
import { ProprietarioReadComponent } from './components/proprietario/proprietario-read/proprietario-read.component';
import { ProprietarioUpdateComponent } from './components/proprietario/proprietario-update/proprietario-update.component';
import { ProprietarioDeleteComponent } from './components/proprietario/proprietario-delete/proprietario-delete.component';
import { CrqCrudComponent } from './views/crq-crud/crq-crud.component';
import { CrqCreateComponent } from './components/crq/crq-create/crq-create.component';
import { CrqUpdateComponent } from './components/crq/crq-update/crq-update.component';
import { CrqReadComponent } from './components/crq/crq-read/crq-read.component';
import { CrqDeleteComponent } from './components/crq/crq-delete/crq-delete.component';
import { CulturaCrudComponent } from './views/cultura-crud/cultura-crud.component';
import { CulturaCreateComponent } from './components/cultura/cultura-create/cultura-create.component';
import { CulturaReadComponent } from './components/cultura/cultura-read/cultura-read.component';
import { CulturaUpdateComponent } from './components/cultura/cultura-update/cultura-update.component';
import { CulturaDeleteComponent } from './components/cultura/cultura-delete/cultura-delete.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FormaPagamentoCreateComponent } from './components/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoReadComponent } from './components/formaPagamento/forma-pagamento-read/forma-pagamento-read.component';
import { FormaPagamentoUpdateComponent } from './components/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
import { FormaPagamentoDeleteComponent } from './components/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';
import { LaboratorioCrudComponent } from './views/laboratorio-crud/laboratorio-crud.component';
import { LaboratorioCreateComponent } from './components/laboratorio/laboratorio-create/laboratorio-create.component';
import { LaboratorioReadComponent } from './components/laboratorio/laboratorio-read/laboratorio-read.component';
import { LaboratorioUpdateComponent } from './components/laboratorio/laboratorio-update/laboratorio-update.component';
import { LaboratorioDeleteComponent } from './components/laboratorio/laboratorio-delete/laboratorio-delete.component';
import { NematoideCrudComponent } from './views/nematoide-crud/nematoide-crud.component';
import { NematoideCreateComponent } from './components/nematoide/nematoide-create/nematoide-create.component';
import { NematoideReadComponent } from './components/nematoide/nematoide-read/nematoide-read.component';
import { NematoideUpdateComponent } from './components/nematoide/nematoide-update/nematoide-update.component';
import { NematoideDeleteComponent } from './components/nematoide/nematoide-delete/nematoide-delete.component';
import { TipoAnaliseCrudComponent } from './views/tipo-analise-crud/tipo-analise-crud.component';
import { AnaliseCreateComponent } from './components/analise/analise-create/analise-create.component';
import { PrecosCrudComponent } from './views/precos-crud/precos-crud.component';
import { AnaliseReadComponent } from './components/analise/analise-read/analise-read.component';
import { AnaliseUpdateComponent } from './components/analise/analise-update/analise-update.component';
import { AnaliseDeleteComponent } from './components/analise/analise-delete/analise-delete.component';
import { PrecosCreateComponent } from './components/precos/precos-create/precos-create.component';
import { PrecosReadComponent } from './components/precos/precos-read/precos-read.component';
import { PrecosUpdateComponent } from './components/precos/precos-update/precos-update.component';
import { PrecosDeleteComponent } from './components/precos/precos-delete/precos-delete.component';
import { TecnicoCrudComponent } from './views/tecnico-crud/tecnico-crud.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoReadComponent } from './components/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { RecebimentoCrudComponent } from './views/recebimento-crud/recebimento-crud.component';
import { RecebimentoCreateComponent } from './components/recebimento/recebimento-create/recebimento-create.component';
import { AmostraCrudComponent } from './views/amostra-crud/amostra-crud.component';
import { AmostraCreateComponent } from './components/amostra/amostra-create/amostra-create.component';
import { AmostraReadComponent } from './components/amostra/amostra-read/amostra-read.component';
import { AmostraUpdateComponent } from './components/amostra/amostra-update/amostra-update.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    UsuariosCrudComponent,
    FooterComponent,
    UsuarioCreateComponent,
    UsuarioReadComponent,
    UsuarioUpdateComponent,
    ProprieraiosCrudComponent,
    UsuarioDeleteComponent,
    ProprietarioCreateComponent,
    ProprietarioReadComponent,
    ProprietarioUpdateComponent,
    ProprietarioDeleteComponent,
    CrqCrudComponent,
    CrqCreateComponent,
    CrqUpdateComponent,
    CrqReadComponent,
    CrqDeleteComponent,
    CulturaCrudComponent,
    CulturaCreateComponent,
    CulturaReadComponent,
    CulturaUpdateComponent,
    CulturaDeleteComponent,
    FormaPagamentoCrudComponent,
    FormaPagamentoCreateComponent,
    FormaPagamentoReadComponent,
    FormaPagamentoUpdateComponent,
    FormaPagamentoDeleteComponent,
    LaboratorioCrudComponent,
    LaboratorioCreateComponent,
    LaboratorioReadComponent,
    LaboratorioUpdateComponent,
    LaboratorioDeleteComponent,
    NematoideCrudComponent,
    NematoideCreateComponent,
    NematoideReadComponent,
    NematoideUpdateComponent,
    NematoideDeleteComponent,
    TipoAnaliseCrudComponent,
    AnaliseCreateComponent,
    PrecosCrudComponent,
    AnaliseReadComponent,
    AnaliseUpdateComponent,
    AnaliseDeleteComponent,
    PrecosCreateComponent,
    PrecosReadComponent,
    PrecosUpdateComponent,
    PrecosDeleteComponent,
    TecnicoCrudComponent,
    TecnicoCreateComponent,
    TecnicoReadComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    RecebimentoCrudComponent,
    RecebimentoCreateComponent,
    AmostraCrudComponent,
    AmostraCreateComponent,
    AmostraReadComponent,
    AmostraUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
