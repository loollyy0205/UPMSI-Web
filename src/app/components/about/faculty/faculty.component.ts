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
  panelOpenState4:boolean =false;

  residentProf1 = [
    {name: 'Michael P. Atrigenio, Ph.D.', label1: 'Assistant Professor'},
    {name: 'Patrick C. Cabaitan, Ph.D.', label1: 'Professor'},
    {name: 'Cecilia G. Conaco, Ph.D.', label1: 'Professor'},
    {name: 'Laura T. David, Ph.D.', label1: 'Professor', label2: 'Director'},
    {name: 'Charissa M. Ferrera, Ph.D.', label1: 'Assistant Professor'},
    {name: 'Rachel June Ravago-Gotanco, Ph.D.', label1: 'Professor'},
    // {name: 'Gil S. Jacinto, Ph.D.', label1: 'Professor - Retired'},
    {name: 'Caroline Marie B. Jaraula, Ph.D.', label1: 'Assistant Professor'},
    {name: 'Arturo O. Lluisma, Ph.D.', label1: 'Professor'},
    {name: 'Marie Antonette Juinio-Meñez, Ph.D.', label1: 'Professor', label2: 'NAST Academician '},
    {name: 'Deo Florence L. Onda, Ph.D.', label1: 'Associate Professor', label2: 'Deputy Director for Research'},
    {name: 'Ma. Josefa R. Pante, Ph.D.', label1: 'Research Professor', label2: 'Deputy Director for Bolinao Marine Laboratory'},
  ];

  residentProf2 = [
    {name: 'Charina Lyn A. Repollo, Ph.D.', label1: 'Assistant Professor'},
    {name: 'Lilibeth A. Salvador-Reyes, Ph.D.', label1: 'Professor', label2: 'Deputy Director for Instruction'},
    {name: 'Irene B. Rodriguez, Dr. rer. nat.', label1: 'Associate Professor'},
    {name: 'Maria Vanessa B. Rodriguez, Ph.D.', label1: 'Associate Professor'},
    {name: 'Michael Y. Roleda, Dr. rer. nat.', label1: 'Professor, Deputy Director for Facilities and Resources'},
    {name: 'Wilfred John E. Santiañez, Ph.D.', label1: 'Assistant Professor', label2: 'Collections Manager, G.T. Velasquez Phycological Herbarium (MSI)'},
     /**
    edited12 : edited Michael Y. Roledo name
    */

    {name: 'Fernando P. Siringan, Ph.D.', label1: 'Research Professor', label2: 'NAST Academician '},
    {name: 'Cesar L. Villanoy, Ph.D.', label1: 'Professor', label2: 'NAST Academician'},
    {name: 'Maria Helena T. Yap, Dr. rer. nat.', label1: 'Professor'},
    {name: 'Aletta T. Yñiguez, Ph.D.', label1: 'Professor'},
    {name: 'Eizadora T. Yu, Ph.D.', label1: 'Professor', label2: 'Associate Dean for Mentoring, Academic Progress and Advancement (ADMAPA), College of Science'}, 

  ];

  nationalScientist = [
    {name: 'Edgardo D. Gomez, Ph.D.'},
    {name: 'Lourdes J. Cruz, Ph.D.'},
    {name: 'Gavino C. Trono Jr., Ph.D.'},
  ];

  // retiredProf = [
  //   {name: 'Miguel D. Fortes, Ph.D.',},
  //   {name: 'Edna Ganzon-Fortes, Ph.D.',},
  //   {name: 'Gil S. Jacinto, Ph.D.', label1: 'Professor - Retired'},
  //   {name: 'Marco Nemesio E. Montaño, Ph.D.'},
  // ];

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

  scrollUp(event){
    setTimeout(() => {
      this.scroll(event.path[3].attributes[1].nodeValue);
    }, 200);
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView(true);
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
