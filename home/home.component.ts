import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookList : any = [];
  book:Book=new Book();

  constructor(private bookService: BookService){
      this.bookService.getBookDetails().subscribe(data => this.bookList = data);
  }

  ngOnInit() {
  }

  genre:string[]=["auto-biography","biography","sci-fi","horror","drama","Novel"];
  imgsrc:string="./assets/images.jpg";
  imgsrc1:string="./assets/girl.jpg";
 

insert(data){
  alert(`Code: ${data.code} Name: ${data.name} Author: ${data.author} Genre: ${data.genre}`);
  this.book.code=data.code;
  this.book.name=data.name;
  this.book.author=data.author;
  this.book.genre=data.genre;
  console.log(this.book);
  this.bookService.setBookDetails(this.book);
}
show(data):void{  
  alert(`Book Added\nCode: ${data.code} Name: ${data.name} Author: ${data.author} Genre: ${data.genre}`);
}
onClickSubmit(d) {
  alert("Entered Email id : " + d.emailid);
}
}
