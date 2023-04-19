import { Component } from '@angular/core';
import { TVShow } from '../../models/tvshow';
import { TvshowsService } from '../../services/tvshows.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent {
  tvshows: TVShow[] = [];
  constructor(private showService: TvshowsService) {}

  ngOnInit() {
    this.getPagedShows();
  }

  getPagedShows(pageNo: number = 1) {
    this.showService.searchShows(pageNo).subscribe((tvshows) => {
      this.tvshows = tvshows;
    });
  }

  paginate(event: any) {
    this.getPagedShows(event.page + 1);
  }
}
