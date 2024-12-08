import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatCardModule,CommonModule,MatGridListModule
],
schemas: [CUSTOM_ELEMENTS_SCHEMA],

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  count!: number;
  label!: string;
  icon!: string;
  footerLabel!: string;

  cardItems = [
    { count: 90, label: 'Documents', icon: 'file_copy', color: '#00A1F1', footerLabel: 'Count' },
    { count: 21, label: 'Tags', icon: 'label', color: '#7CBB00', footerLabel: 'Count' },
    { count: 25, label: 'Workflow', icon: 'settings', color: '#FFBB00', footerLabel: 'Count' },
    { count: 28, label: 'Tag Relation', icon: 'link', color: '#F65314', footerLabel: 'Count' }
  ];
  
}
