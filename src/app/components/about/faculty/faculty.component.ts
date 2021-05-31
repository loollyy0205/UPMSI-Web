import { FacultyDialogComponent } from './faculty-dialog/faculty-dialog.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  panelOpenState:boolean =false;
  panelOpenState1:boolean =false;
  panelOpenState2:boolean =false;
  panelOpenState3:boolean =false;

  residentProf1 = [
    {name: 'Porfirio M. Aliño', label1: 'Research Professor', label2: 'NAST Academician '},
    {name: 'Michael P. Atrigenio', label1: 'Associate Professor'},
    {name: 'Patrick C. Cabaitan', label1: 'Associate Professor'},
    {name: 'Cecilia G. Conaco', label1: 'Associate Professor'},
    {name: 'Laura T. David', label1: 'Professor, Director'},
    {name: 'Charissa M. Ferrera', label1: 'Assistant Professor'},
    {name: 'Rachel June Ravago- Gotanco', label1: 'Associate Professor', label2: 'Deputy Director for Instruction'},
    {name: 'Gil S. Jacinto', label1: 'Professor - Retired'},
    {name: 'Caroline Marie B. Jaraula', label1: 'Assistant Professor'},
    {name: 'Arturo O. Lluisma', label1: 'Research Professor', label2: 'Program Directory', label3: 'Bioinformatics Program and Core Facility', label4: 'Philippine Genome Center'},
    {name: 'Marie Antonette Juinio-Meñez', label1: 'Professor', label2: 'NAST Academician '},
    {name: 'Deo Florence L. Onda', label1: 'Associate Professor', label2: 'Deputy Director for Research'},
  ];

  residentProf2 = [
    {name: 'Ma. Josefa R. Pante', label1: 'Research Associate Professor', label2: 'Deputy Director for Bolinao Marine Laboratory'},
    {name: 'Charina Lyn A. Repollo', label1: 'Assistant Professor'},
    {name: 'Lilibeth A. Salvador- Reyes', label1: 'Associate Professor'},
    {name: 'Irene B. Rodriguez', label1: 'Associate Professor'},
    {name: 'Maria Vanessa B. Rodriguez', label1: 'Assistant Professor'},
    {name: 'Michael Y. Roleda', label1: 'Professor, Deputy Director for Facilities and Resources'},
    {name: 'Wilfred John E. Santiañez', label1: 'Assistant Professor'},
    {name: 'Fernando P. Siringan', label1: 'Professor', label2: 'NAST Academician '},
    {name: 'Cesar L. Villanoy', label1: 'Professor', label2: 'NAST Academician'},
    {name: 'Maria Helena T. Yap', label1: 'Professor'},
    {name: 'Aletta T. Yñiguez', label1: 'Associate Professor'},
    {name: 'Eizadora T. Yu', label1: 'Professor '},
  ];


  constructor(public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
  }

  gotoAdmin(){
    this.router.navigate(['/About/admin']);
  }

  openDialog(imgSrc){
    this.dialog.open(FacultyDialogComponent, {
      height: '50%',
      width: '57%',
      data: {
        imgSrc: imgSrc
      }
    });
  }
}
