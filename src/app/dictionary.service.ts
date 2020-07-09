import {Injectable} from '@angular/core';
import {IDictionary} from './IDictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  listWord: IDictionary [] = [
    {
      key: 'book',
      meaning: 'quyen sach'
    },
    {
      key: 'home',
      meaning: 'ngoi nha'
    },
    {
      key: 'Dog',
      meaning: 'con cho'
    },
    {
      key: 'cat',
      meaning: 'con meo'
    },
  ];

  // tslint:disable-next-line:typedef
  getAll() {
    return this.listWord;
  }

  search(word: string): string {
    if (!word) {
      return '';
    }
    // tslint:disable-next-line:only-arrow-functions typedef
    const w = this.listWord.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Khong tim thay word in dictionary';
  }

  constructor() {
  }
}
