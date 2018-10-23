import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { DoingListComponent } from './doing-list/doing-list';
@NgModule({
	declarations: [DoingListComponent],
	imports: [IonicModule],
	exports: [DoingListComponent]
})
export class ComponentsModule {}
