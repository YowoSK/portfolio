import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ProjectsService } from '../_Services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProject = {} as Project;

  constructor(private titleService: Title, private metaService: Meta, private projectService: ProjectsService) {
    this.titleService.setTitle('Filip Šulík - Home');
    this.metaService.updateTag({ name: 'description', content: 'Welcome to the home page of Filip Šulík, software developer. Explore featured projects and more.' });
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }
}
