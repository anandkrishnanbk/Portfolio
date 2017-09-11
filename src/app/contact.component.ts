import {Component } from '@angular/core';
@Component({
    selector: 'app-contact',
  template: `<section class="content">
    <h1>Contact</h1>
    <p>Available in email,mobile,chat</p>
  </section>
  <section>
    <img src="./assets/images/giphy.gif" alt="coming soon image">
  </section>`,
  styles: [`
      .content {
        background-color: #2098D1;
      padding:3rem 10rem;
    }
    .content p{
      font-size: 1rem;
    }`]
  })
export class ContactComponent {}
