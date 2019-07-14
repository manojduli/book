import { Injectable } from '@angular/core';
import { Book } from './Book';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { 
    
    this.getBookDetails().subscribe(data => this.bookList = data);
  }

  bookList:Array<Book>=[];
  
  url:string="/assets/book.json";


  getBookDetails():any{
    return this.httpClient.get<Book>(this.url);
  }

 
  deleteBook(code:number):void{
    let i=0;
    for(let book of this.bookList){
      if(book.code==code){
        console.log("book code "+book.code);
       console.log(this.bookList.splice(i,1));
      }
      i++;
    }
    
  }

  setBookDetails(book:Book){
      this.bookList.push(book);
    
  }




  updateBookDetails(book:Book){
    for(let b of this.bookList){
      if(book.code==b.code){
          b.code=book.code;
          b.author=book.author;
          b.genre=book.genre;
          b.name=book.name;
      }
    }
    console.log(this.bookList);
  }
}

