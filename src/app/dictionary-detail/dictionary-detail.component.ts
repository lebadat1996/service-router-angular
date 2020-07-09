import {Component, OnInit} from '@angular/core';
import {IDictionary} from '../IDictionary';
import {ActivatedRoute} from '@angular/router';
import {DictionaryService} from '../dictionary.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IDictionary;
  sub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dictionaryService: DictionaryService
  ) {
  }

  ngOnInit(): void {
    const {snapshot} = this.activatedRoute;
    const key = snapshot.paramMap.get('key');
    const meaning = this.dictionaryService.search(key);
    this.word = {key: key.toString(), meaning: meaning.toString()};
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
