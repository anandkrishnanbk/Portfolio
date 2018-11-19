import { Component } from '@angular/core';
@Component({
  selector: 'app-contact',
  template: `<section class="content">
    <h1>Contact</h1>
    <p>Lets get in touch</p>
  </section>
  <section class="contact-content">
   <p>Email : <a href="mailto:anandkrishnanbk@gmail.com">anandkrishnanbk@gmail.com</a></p> 
   <a href="https://www.linkedin.com/in/anand-bhavani-krishnankutty-142787a/"><i class="fab fa-linkedin-in"></i></a>
   <a href="https://twitter.com/anandkrishnanbk"><i class="fab fa-twitter"></i></a>
   <a href="https://github.com/anandkrishnanbk"><i class="fab fa-github"></i></a>
  </section>`,
  styles: [`
      .content {
        background-color: #2098D1;
        padding:3rem 8rem;
    }
    .content p{
      font-size: 1rem;
    }  
    .contact-content {
        color:#666;
        font-size:1rem;
    }
    .contact-content a {
          color: #A62E5C;
    }
    i {
        color: #A62E5C;
        margin: .4em;
        font-size: 1.5em;
      }
      `]
  })
export class ContactComponent {}
