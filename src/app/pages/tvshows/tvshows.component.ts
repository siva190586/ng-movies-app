import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { TVShow } from '../../models/tvshow';
import { TvshowsService } from '../../services/tvshows.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent {
  tvshows: TVShow[] = [];
  genreid: string = '';
  searchShowKey: string = '';

  constructor(private showService: TvshowsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe(({ gid }) => {
      if (gid) {
        this.genreid = gid;
        this.getPagedGenreShows(gid);
      } else {
        this.getPagedShows();
      }
    });
  }

  getPagedShows(pageNo: number = 1, typeKey?: string) {
    this.showService.searchShows(pageNo, typeKey).subscribe((tvshows) => {
      this.tvshows = tvshows;
    });
  }

  getPagedGenreShows(gid: string = '', pgNum: number = 1) {
    this.showService.getGenreShows(gid, pgNum).subscribe((tvshows) => {
      this.tvshows = tvshows;
    });
  }

  searchShow() {
    this.getPagedShows(1, this.searchShowKey);
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreid) {
      this.getPagedGenreShows(this.genreid, pageNumber);
    } else {
      this.getPagedShows(pageNumber, this.searchShowKey);
    }
  }
}
