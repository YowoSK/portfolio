import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Filip Šulík - Contact');
    this.metaService.updateTag({ name: 'description', content: 'Contact Filip Šulík, software developer. Get in touch for projects, collaboration, or inquiries.' });
  }

}
