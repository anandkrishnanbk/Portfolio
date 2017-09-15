import {Component } from '@angular/core';
@Component({
    selector: 'app-contact',
  template: `<section class="content">
    <h1>Contact</h1>
    <p>Lets get in touch</p>
  </section>
  <section class="contact-content">
   <p>Mobile : 2018842709</p>
   <p>Email : <a href="mailto:anandkrishnanbk@gmail.com">anandkrishnanbk@gmail.com</a></p> 
  </section>`,
  styles: [`
      .content {
        background-color: #2098D1;
        padding:3rem 10rem;
    }
    .content p{
      font-size: 1rem;
    }  
    .contact-content
      {
        color:#666;
        font-size:1rem;
      }`]
  })
export class ContactComponent {}
