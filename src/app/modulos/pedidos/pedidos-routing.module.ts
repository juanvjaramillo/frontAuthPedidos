import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarPedidoComponent } from './asignar-pedido/asignar-pedido.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/asignar_pedido"
  },
  {
    path: "asignar_pedido",
    component: AsignarPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
