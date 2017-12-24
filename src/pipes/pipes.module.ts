import { NgModule } from '@angular/core';
import { DosenFilterPipe } from './dosen-filter/dosen-filter';
import { MateriFilterPipe } from './materi-filter/materi-filter';
import { YoutubePipe } from './youtube/youtube';
@NgModule({
	declarations: [DosenFilterPipe,
    MateriFilterPipe,
    YoutubePipe],
	imports: [],
	exports: [DosenFilterPipe,
    MateriFilterPipe,
    YoutubePipe]
})
export class PipesModule {}
