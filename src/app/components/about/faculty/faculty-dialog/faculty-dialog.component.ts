import { FacultyComponent } from './../faculty.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-faculty-dialog',
  templateUrl: './faculty-dialog.component.html',
  styleUrls: ['./faculty-dialog.component.css']
})
export class FacultyDialogComponent implements OnInit {
  imgSrc:string;

  professors = [
    {image: 'https://dc697.4shared.com/img/EDhgwQ55ea/s24/179c1520ad0/01-Alino_Porfirio_M?async&rand=0.04779204424611727', name: 'Porfirio M. Aliño', title1: 'Research Professor, NAST Academician',},
    {image: 'https://dc697.4shared.com/img/zLgZs-04ea/s24/179c13e9e28/02-Michael_P_Atrigenio?async&rand=0.573086578215513', name: 'Michael P. Atrigenio', title1: 'Associate Professor'},
    {image: 'https://dc697.4shared.com/img/ZlGjRKkFiq/s24/179c13ea5f8/03-Patrick_C_Cabaitan_PhD?async&rand=0.9425446660349646', name: 'Patrick C. Cabaitan', title1: 'Associate Professor'},
    {image: 'https://dc373.4shared.com/img/n0p9MC3Dea/s24/179c13eadc8/04-Ma_Cecilia_G_Conaco_PhD?async&rand=0.25947560179252727', name: 'Cecilia G. Conaco', title1: 'Associate Professor'},
    {image: 'https://dc697.4shared.com/img/KIGyXuUGea/s24/179c13eb1b0/05-Laura_T_David?async&rand=0.155880758891626', name: 'Laura T. David', title1: 'Professor, Director'},
    {image: 'https://dc373.4shared.com/img/-dAqitCgiq/s24/179c13ebd68/06-Charissa_M_Ferrera_?async&rand=0.1654507293460148', name: 'Charissa M. Ferrera', title1: 'Assistant Professor'},
    {image: 'https://dc697.4shared.com/img/f2RDLNVniq/s24/179c13ec538/07-Rachel_June_R_Gotanco_PhD?async&rand=0.005576854950600341', name: 'Rachel June Ravago- Gotanco', title1: 'Associate Professor, Deputy Director for Instruction'},
    {image: 'https://dc697.4shared.com/img/iJYnpPlOea/s24/179c13ecd08/08-Gil_Jacinto?async&rand=0.8022240281154525', name: 'Gil S. Jacinto', title1: 'Professor - Retired'},
    {image: 'https://dc697.4shared.com/img/hMu2WXvWea/s24/179c13ed0f0/09-Caroline_Marie_B_Jaraula_Ph?async&rand=0.7800318056319917', name: 'Caroline Marie B. Jaraula', title1: 'Assistant Professor'},
    {image: 'https://dc697.4shared.com/img/g-yU2YZbea/s24/179c13ed4d8/10-Arturo_O_Lluisma_PhD?async&rand=0.8320257505711277', name: 'Arturo O. Lluisma', title1: 'Research Professor', title2: 'Program Directory', title3: 'Bioinformatics Program and Core Facility Philippine Genome Center'},
    {image: 'https://dc373.4shared.com/img/OCFnEG7Bea/s24/179c13ed8c0/11-Marie_Antonette_J_Meez_PhD?async&rand=0.4213947619701257', name: 'Marie Antonette Juinio-Meñez', title1: 'Professor'},
    {image: 'https://dc697.4shared.com/img/mvUgm0zxiq/s24/179c13edca8/12-Deo_Florence_L_Onda_PhD?async&rand=0.3119065690668863', name: 'Deo Florence L. Onda', title1: 'Associate Professor, Deputy Director for Research'},
    {image: 'https://dc697.4shared.com/img/hbr13GfIea/s24/179c13ee090/13-Ma_Josefa_Pante?async&rand=0.06702497092376403', name: 'Ma. Josefa R. Pante', title1: 'Research Associate Professor', title2: 'Deputy Director for Bolinao Marine Laboratory'},
    {image: 'https://dc697.4shared.com/img/WLo2pSfyiq/s24/179c13ee478/14-Charina_Lyn_A_Repollo?async&rand=0.13632529792003845', name: 'Charina Lyn A. Repollo', title1: 'Assistant Professor'},
    {image: 'https://dc697.4shared.com/img/cVg7r-M4ea/s24/179c13ee860/15-Lilibeth_S_Reyes_PhD?async&rand=0.888438679623653', name: 'Lilibeth A. Salvador- Reyes', title1: 'Associate Professor'},
    {image: 'https://dc373.4shared.com/img/fZQOsxYiiq/s24/179c13ef030/16-Irene_B_Rodriguez_Dr_rer_Na?async&rand=0.34668011653211717', name: 'Irene B. Rodriguez', title1: 'Associate Professor'},
    {image: 'https://dc697.4shared.com/img/8OS6W3wqiq/s24/179c13ef418/17-Maria_Vanessa_B_Rodriguez_P?async&rand=0.936844475580505', name: 'Maria Vanessa B. Rodriguez', title1: 'Assistant Professor'},
    {image: 'https://dc373.4shared.com/img/nLpsES8Bea/s24/179c13effd0/18-Michael_Y_Roleda?async&rand=0.8056824945334196', name: 'Michael Y. Roleda', title1: 'Professor, Deputy Director for Facilities and Resources'},
    {image: 'https://dc373.4shared.com/img/C8n2eSvvea/s24/179c13f07a0/19-Wilfred_John_E_Santiaez_PhD?async&rand=0.5835209859479868', name: 'Wilfred John E. Santiañez', title1: 'Assistant Professor'},
    {image: 'https://dc373.4shared.com/img/DU4OVAcaea/s24/179c13f1358/20-Dr_Siringan?async&rand=0.717556423962705', name: 'Fernando P. Siringan', title1: 'Professor, NAST Academician'},
    {image: 'https://dc373.4shared.com/img/OjaqMm8Dea/s24/179c13f1740/21-Dr_Villanoy?async&rand=0.4799385480823122', name: 'Cesar L. Villanoy', title1: 'Professor, NAST Academician'},
    {image: 'https://dc373.4shared.com/img/FNtHDHGRiq/s24/179c13f1b28/22-Maria_Helene_Yap?async&rand=0.34866816745250273', name: 'Maria Helena T. Yap', title1: 'Professor'},
    {image: 'https://dc697.4shared.com/img/MsNhxgk6ea/s24/179c13f1f10/23-Aletta_T_Yiguez_PhD?async&rand=0.5550287577959601', name: 'Aletta T. Yñiguez', title1: 'Associate Professor'},
    {image: 'https://dc697.4shared.com/img/CvW7OixEiq/s24/179c13f2eb0/24-Eizadora_T_Yu_PhD?async&rand=0.2318038847353714', name: 'Eizadora T. Yu', title1: 'Professor'},
  ];
  myArr = [];

  constructor(public dialogRef: MatDialogRef<FacultyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.myArr = this.professors.filter(res => res.name === this.data.imgSrc);
    console.log(this.data.imgSrc);
  }


}
