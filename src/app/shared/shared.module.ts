import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidemenuComponent],
  imports: [CommonModule, RouterModule],
  /*es necesario exportar el componente que queremos
    que aparezca en la main page 
  */
  exports: [SidemenuComponent],
})
export class SharedModule {}
