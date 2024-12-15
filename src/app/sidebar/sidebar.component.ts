import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
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
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);

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
export class SidebarComponent implements OnInit{
  count!: number;
  label!: string;
  icon!: string;
  footerLabel!: string;

  cardItems = [
    { count: 90, label: 'Documents', icon: 'file_copy', color: '#00A1F1', footerLabel: 'Count' },
    { count: 21, label: 'Tags', icon: 'label', color: '#7CBB00', footerLabel: 'Count' },
    { count: 25, label: 'Workflow', icon: 'settings', color: '#FFBB00', footerLabel: 'Count' },
    { count: 28, label: 'TagRelation', icon: 'link', color: '#F65314', footerLabel: 'Count' }
  ];

  ngOnInit(): void {
    
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['0', '1', '2', '3', '4', '5'],
        datasets: [
          {
            label: 'Documents',
            data: [20, 100, 80, 140, 150, 180],
            backgroundColor: '#00A1F1',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 220, // Set the maximum value for the y-axis
            ticks: {
              stepSize: 20, // Ensure the y-axis increments by 20
            },
          },
        },
      },
    });

    // Initialize Line Chart
    new Chart('lineChart', {
      type: 'line',
      data: {
        labels: [0, 1, 2, 3, 4, 5, 6],
        datasets: [
          {
            label: 'Tags',
            data: [0, 20, 100, 80, 140, 145, 180],
            borderColor: '#F65314',
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: '#F65314',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 220, // Set the maximum value for the y-axis
            ticks: {
              stepSize: 20, // Ensure the y-axis increments by 20
            },
          },
        },
      },
    });
  }
}
