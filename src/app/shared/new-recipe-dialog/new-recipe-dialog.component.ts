import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-recipe-dialog',
  templateUrl: './new-recipe-dialog.component.html',
  styleUrls: ['./new-recipe-dialog.component.scss']
})
export class NewRecipeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewRecipeDialogComponent>) { }

  ngOnInit(): void {
  }

}
