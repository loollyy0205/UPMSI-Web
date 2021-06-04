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
    {name: 'Porfirio M. Aliño, Ph.D.', label1: 'Research Professor', label2: 'NAST Academician '},
    {name: 'Michael P. Atrigenio, Ph.D.', label1: 'Associate Professor'},
    {name: 'Patrick C. Cabaitan, Ph.D.', label1: 'Associate Professor'},
    {name: 'Cecilia G. Conaco, Ph.D.', label1: 'Associate Professor'},
    {name: 'Laura T. David, Ph.D.', label1: 'Professor, Director'},
    {name: 'Charissa M. Ferrera, Ph.D.', label1: 'Assistant Professor'},
    {name: 'Rachel June Ravago-Gotanco, Ph.D.', label1: 'Associate Professor', label2: 'Deputy Director for Instruction'},
    {name: 'Gil S. Jacinto, Ph.D.', label1: 'Professor - Retired'},
    {name: 'Caroline Marie B. Jaraula, Ph.D.', label1: 'Assistant Professor'},
    {name: 'Arturo O. Lluisma, Ph.D.', label1: 'Research Professor', label2: 'Program Directory', label3: 'Bioinformatics Program and Core Facility', label4: 'Philippine Genome Center'},
    {name: 'Marie Antonette Juinio-Meñez, Ph.D.', label1: 'Professor', label2: 'NAST Academician '},
    {name: 'Deo Florence L. Onda, Ph.D.', label1: 'Associate Professor', label2: 'Deputy Director for Research'},
  ];

  residentProf2 = [
    {name: 'Ma. Josefa R. Pante, Ph.D.', label1: 'Research Associate Professor', label2: 'Deputy Director for Bolinao Marine Laboratory'},
    {name: 'Charina Lyn A. Repollo, Ph.D.', label1: 'Assistant Professor'},
    {name: 'Lilibeth A. Salvador- Reyes, Ph.D.', label1: 'Associate Professor'},
    {name: 'Irene B. Rodriguez, Ph.D.', label1: 'Associate Professor'},
    {name: 'Maria Vanessa B. Rodriguez, Ph.D.', label1: 'Assistant Professor'},
    {name: 'Michael Y. Roleda, Ph.D.', label1: 'Professor, Deputy Director for Facilities and Resources'},
    {name: 'Wilfred John E. Santiañez, Ph.D.', label1: 'Assistant Professor'},
    {name: 'Fernando P. Siringan, Ph.D.', label1: 'Professor', label2: 'NAST Academician '},
    {name: 'Cesar L. Villanoy, Ph.D.', label1: 'Professor', label2: 'NAST Academician'},
    {name: 'Maria Helena T. Yap, Ph.D.', label1: 'Professor'},
    {name: 'Aletta T. Yñiguez, Ph.D.', label1: 'Associate Professor'},
    {name: 'Eizadora T. Yu, Ph.D.', label1: 'Professor '},
  ];

  nationalScientist = [
    {name: 'Edgardo D. Gomez, Ph.D.'},
    {name: 'Lourdes J. Cruz, Ph.D.'},
    {name: 'Gavino C. Trono Jr., Ph.D.'},
  ];

  emeriti = [
    {name: 'Edgardo D. Gomez, Ph.D.'},
    {name: 'Rhodora V. Azanza, Ph.D.'},
    {name: 'Lourdes J. Cruz, Ph.D.'},
    {name: 'Gavino C. Trono Jr., Ph.D.'},
    {name: 'Gisela P. Concepcion, Ph.D.'},
    {name: 'Maria Lourdes San Diego-McGlone, Ph.D.'},
  ];


  constructor(public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
  }

  gotoAdmin(){
    this.router.navigate(['/About/admin']);
  }

  openDialog(imgSrc){
    this.dialog.open(FacultyDialogComponent, {
      height: 'auto',
      width: 'auto',
      data: {
        imgSrc: imgSrc
      }
    });
  }
}
