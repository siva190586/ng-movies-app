import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvshowsService } from '../../services/tvshows.service';
import { TVShow } from '../../models/tvshow';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { first } from 'rxjs';

@Component({
  selector: 'tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent {
  show!: TVShow;
  readonly imageSizes = IMAGE_SIZES;
  constructor(private route: ActivatedRoute, private showService: TvshowsService) {}

  ngOnInit() {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getTVShow(id);
    });
  }

  getTVShow(sid: number) {
    this.showService.getShowDetails(sid).subscribe((showData) => {
      this.show = showData;
    });
  }
}
