import {Component } from '@angular/core';
@Component({
    selector: 'app-portfolio',
    template: `<section class="content">
      <h1>View Portfolio</h1>
      <p>Take a look at some of the work I have done</p>
    </section>
    <section>
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
export class PortfolioComponent {}
