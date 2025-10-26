import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  project = {} as Project;
  currentIndex = 0;
  constructor(public bsModalRef: BsModalRef) {
        
  }

  ngOnInit(): void {
    this.currentIndex = 0;
  }

  ngOnDestroy(): void {
    // noop - HostListener will be cleaned up with component
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (!this.project || !this.project.pictures || this.project.pictures.length <= 1) return;
    if (event.key === 'ArrowRight') {
      this.next();
    } else if (event.key === 'ArrowLeft') {
      this.prev();
    }
  }

  prev() {
    if (!this.project || !this.project.pictures) return;
    const len = this.project.pictures.length;
    this.currentIndex = (this.currentIndex - 1 + len) % len;
  }

  next() {
    if (!this.project || !this.project.pictures) return;
    const len = this.project.pictures.length;
    this.currentIndex = (this.currentIndex + 1) % len;
  }

  show(index: number) {
    if (!this.project || !this.project.pictures) return;
    if (index >= 0 && index < this.project.pictures.length) this.currentIndex = index;
  }

}
