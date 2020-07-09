import {Component, OnInit} from '@angular/core';
import {IDictionary} from '../IDictionary';
import {DictionaryService} from '../dictionary.service';
import {Routes} from '@angular/router';
import {DictionaryDetailComponent} from '../dictionary-detail/dictionary-detail.component';
import {AuthGuard} from '../auth.guard';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})

export class DictionaryPageComponent implements OnInit {
  listWord: IDictionary [];

  constructor(private dictionaryService: DictionaryService,
              public authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.listWord = this.dictionaryService.getAll();
  }

}
