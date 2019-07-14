import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { HttpClient} from '@angular/common/http';
import { Book } from '../Book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  bookList:any=[];
  constructor(private bookService:BookService) { 
  this.bookList= this.bookService.bookList;
   
  }
  
  ngOnInit() {
    this.bookList= this.bookService.bookList;
    
  }
  reload(){
    this.bookList= this.bookService.bookList;
  }

  flag=false;
name;code;author;genre;

bo:Book=new Book;
  changeFlag(b:Book){
    this.flag=true;
    this.name=b.name;this.code=b.code;this.author=b.author;this.genre=b.genre;
    

  }
  update(f){
   let b:Book=new Book;
  b=f;
  console.log(b);
  this.bookService.updateBookDetails(b);
  }

  delete(code:number){
    this.bookService.deleteBook(code);
    this.bookList= this.bookService.bookList;
  }

}
