import { Component, Input } from '@angular/core';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { Movie } from '../../models/movie';
import { TVShow } from '../../models/tvshow';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemData!: Movie;
  @Input() showData!: TVShow;
  readonly imageSizes = IMAGE_SIZES;
}
