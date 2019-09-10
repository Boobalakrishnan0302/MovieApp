import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs';
import { SearchType, MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results:Observable<any>;
  searchterm='';
  type:SearchType=SearchType.all;

  constructor(private movieservice:MovieService) { }

  ngOnInit() {
  }
searchChanged(){
  this.results=this.movieservice.searchData(this.searchterm,this.type);
  console.log(this.searchterm,this.type);
}
}
