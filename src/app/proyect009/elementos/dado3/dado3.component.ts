import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado3',
  templateUrl: './dado3.component.html',
  styleUrls: ['./dado3.component.scss']
})
export class Dado3Component implements OnInit{
  @Input() valor: number = 1
  ngOnInit(): void {
    
  }
}
