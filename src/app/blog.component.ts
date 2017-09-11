import { Component } from '@angular/core';
@Component({
  selector: 'app-blog',
  template: `<section class="content">
    <h1>My Thoughts</h1>
    <p>My latest ideas</p>
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
export class BlogComponent {}
