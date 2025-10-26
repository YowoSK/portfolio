import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, query, stagger, animate } from '@angular/animations';
import { Title, Meta } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_Services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
  ,
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        // initially hide entering elements
        query(':enter', [style({ opacity: 0, transform: 'translateY(8px)' })], { optional: true }),
        // stagger enter animation
        query(':enter', stagger('100ms', [animate('220ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))]), { optional: true })
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
  projects = {} as Project[];

  isCollapsed: boolean = true;
  htmlcss: boolean = false;
  css: boolean = false;
  javascript: boolean = false;
  angular: boolean = false;
  python: boolean = false;
  java: boolean = false;
  linux: boolean = false;
  raspberry: boolean = false;
  android: boolean = false;
  opencv: boolean = false;
  filtering: boolean = false;
  colaboration: boolean = false;
  react: boolean = false;
  testing: boolean = false;
  sqlite: boolean = false;

  constructor(private titleService: Title, private metaService: Meta, private projectService: ProjectsService) {
    this.titleService.setTitle('Filip Šulík - Portfolio');
    this.metaService.updateTag({ name: 'description', content: 'Browse the portfolio projects of Filip Šulík, software developer.' });
  }
  Filter(){
    let filterTags: Tag[] = [];

    if (this.htmlcss) {
      filterTags.push(Tag.HTMLCSS);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.linux) {
      filterTags.push(Tag.LINUX);
    }
    if (this.raspberry) {
      filterTags.push(Tag.RASPBERRY);
    }
    if (this.android) {
      filterTags.push(Tag.ANDROID);
    }
    if (this.opencv) {
      filterTags.push(Tag.OPENCV);
    }
    if (this.testing) {
      filterTags.push(Tag.TESTING);
    }
    if (this.colaboration) {
      filterTags.push(Tag.COLLABORATION);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.sqlite) {
      filterTags.push(Tag.SQLITE)
    }
    if (this.htmlcss || this.css || this.javascript || this.angular || this.python || this.java || this.linux || this.raspberry || this.android || this.opencv || this.testing || this.colaboration || this.react || this.sqlite) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }
    this.projects = this.projectService.GetProjectsByFilter(filterTags)
  }
  ResetFilters() {
    this.htmlcss = false;
    this.css = false;
    this.javascript = false;
    this.angular = false;
    this.python = false;
    this.java = false;
    this.linux = false;
    this.raspberry = false;
    this.android = false;
    this.opencv = false;
    this.testing = false;
    this.colaboration = false;
    this.react = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }

}
