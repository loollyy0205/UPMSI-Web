import { CoursesDialogComponent } from './courses-dialog/courses-dialog.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  panelOpenState:boolean =false;
  panelOpenState1:boolean =false;
  panelOpenState2:boolean =false;
  panelOpenState3:boolean =false;
  panelOpenState4:boolean =false;
  panelOpenState5:boolean =false;
  panelOpenState6:boolean =false;
  panelOpenState7:boolean =false;
  panelOpenState8:boolean =false;
  panelOpenState9:boolean =false;
  panelOpenState10:boolean =false;
  panelOpenState11:boolean =false;
  panelOpenState12:boolean =false;
  panelOpenState13:boolean =false;

  panelOpenState14:boolean =false;
  panelOpenState15:boolean =false;
  panelOpenState16:boolean =false;
  panelOpenState17:boolean =false;
  panelOpenState18:boolean =false;

  panelOpenState19:boolean =false;
  panelOpenState20:boolean =false;
  panelOpenState21:boolean =false;
  panelOpenState22:boolean =false;

  panelOpenState23:boolean =false;
  panelOpenState24:boolean =false;
  panelOpenState25:boolean =false;
  panelOpenState26:boolean =false;

  panelOpenState27:boolean =false;
  panelOpenState28:boolean =false;
  panelOpenState29:boolean =false;
  panelOpenState30:boolean =false;

  undergrad = [
    {name: 'MS 101 - Oceans', label1: 'LTDavid, GSJacinto, MLSMcGlone, FPSiringan, CLVillanoy, ATYñiquez',},
    {name: 'MS 102 - The Marine Sciences', label1: 'PCCabaitan, MAJMeñez, DFLOnda, MHTYap'},
  ];

  undergrad2 = [
    {name: 'MS 1 - Oceans and Us', label1: 'CGConaco, LTDavid, RRGotanco, GSJacinto, CBJaraula, MJRPante, LSReyes,  IBRodriguez, MVBRodriguez,  WJESantiañez, FPSiringan, ATYñiguez'},
  ];

  gfcore = [
    {name: 'MS 201 - Ocean Physics and Chemistry', label1: 'CBJaraula / LTDavid/CRepollo'},
    {name: 'MS 210 - Physical Oceanography', label1: 'CVillanoy / LTDavid/CRepollo'},
    {name: 'MS 220 - Chemical Oceanography', label1: 'MLSMcGlone / GSJacinto'},
  ];

   gfcore2 = [
    {name: 'MS 240 - Biological Oceanography', label1: 'MHTYap'},
    {name: 'MS 270 - Biochemistry of Marine Organisms', label1: 'LSReyes / IBRodriguez / ETYu'},
  ];

  gfelec = [
    {name: 'MS 214 - Waves and Tides (on demand)', label1: 'CLVillanoy / LTDavid'},
    {name: 'MS 221 - Marine Geochemistry', label1: 'GSJacinto / CBJaraula'},
    {name: 'MS 226 - Marine Pollution Chemistry', label1: 'GSJacinto / MLSMcGlone / IBRodriguez'},
    {name: 'MS 226.1 - Marine Pollution Chemistry laboratory', label1: 'GSJacinto / MLSMcGlone'},
    {name: 'MS 253 - Marine Chemical Ecology', label1: 'LSReyes / MVBRodriguez'},
    {name: 'MS 255 - Coral Reef Ecosystems', label1: 'PCCabaitan'},
    {name: 'MS 256 - Marine Algae', label1: 'WJESantiañez'},
    {name: 'MS 261 - Physiology of Marine Algae', label1: 'MYRoleda'},
    {name: 'MS 385 - Marine Toxinology (every odd year)', label1: 'LSReyes / DFLOnda'},
    {name: 'MS 397 - Special Topics: Behavioral Ecology', label1: 'MAJMeñez'},
    {name: 'MS 397 - Special Topics: Genome Biology of Marine Organisms', label1: 'CGConaco'},
    {name: 'MS 397 - Special Topics: Gene Expression Control', label1: 'CGConaco'},
    {name: 'MS 397 - Special Topics: Ecological Modeling', label1: 'ATYñiguez'},
    {name: 'MS 397 - Special Topics: Ecological Restoration', label1: 'MVBRodriguez'},
    {name: 'MS 397 - Special Topics: Molecular Ecology and Evolution', label1: 'RRGotanco'},
    ];

    gfelec2 = [
    {name: 'MS 397 - Special Topics: Biological-Social Structures', label1: 'GPConcepcion / MHTYap'},
    {name: 'MS 397 - Special Topics: Ecological Assessment with Algae', label1: 'MYRoleda'},
    {name: 'MS 397 - Special Topics: Marine Organic Geochemistry (as needed)', label1: 'CBJaraula'},
    {name: 'MS 397 - Special Topics: Molecular Biology and Bioinformatics of the Biosynthesis of Natural Products', label1: 'AOLluisma'},
    {name: 'MS 398 - Advanced Methods in Marine Science: Quantitative Methods in Microbial Ecology', label1: 'DFLOnda'},
    {name: 'MS 398 - Advanced Methods in Marine Science: Biostatistics', label1: 'MJRPante'},
    {name: 'MS 398 - Advanced Methods in Marine Science: Practical Scientific Programming (every odd year)', label1: 'AOLluisma'},
    {name: 'MS 398 - Advanced Methods in Marine Science: Data Analysis Methods in Oceans', label1: 'CLVillanoy / LTDavid/CRepollo'},
    {name: 'MS 398 - Advanced Methods in Marine Science: Ocean Remote Sensing & Image Analysis', label1: 'LTDavid'},
    {name: 'MS 398 - Methods in Marine Science: Advanced Methods in Natural Products', label1: 'LSReyes'},
    {name: 'MS 398 - Advanced Methods in Marine Science: Data Analysis Methods in Oceanography'},
  ];

   sem = [
    {name: 'MS 396 - Seminar 1:  Current Topics in Marine Science (for all MS students)', label1: 'All MSI Faculty'},
  ];

  sem2 = [
    {name: 'MS 396 - Seminar (Marine Biology)'},
  ];


    gscore = [
    {name: 'MS 230 - Geological Oceanography', label1: 'FPSiringan / CBJaraula'},
    {name: 'MS 240 - Biological Oceanography', label1: 'MHTYap'},
    {name: 'MS 272 - Marine Biotechnology 1', label1: 'AOLluisma'},
  ];

  gselec = [
    {name: 'MS 213 - Dynamics of Oceans', label1: 'CLVillanoy'},
    {name: 'MS 216 - Numerical Ocean Modeling (on demand)', label1: 'CLVillanoy / LTDavid'},
    {name: 'MS 217 - Coastal and Estuarine Oceanography', label1: 'LTDavid'},
    {name: 'MS 222 - Chemistry of Marine Coastal Environments (every odd year)', label1: 'GSJacinto / CBJaraula / MLSMcGlone'},
    {name: 'MS 242 - Marine Microbiology', label1: 'CGConaco'},
    {name: 'MS 246 - Marine Phytoplankton', label1: 'DFLOnda'},
    {name: 'MS 250 - Marine Ecology', label1: 'MYRoleda'},
    {name: 'MS 251 - Population Biology of Marine Organisms', label1: 'PCCabaitan'},
    {name: 'MS 252 - Marine Biogeography', label1: 'PMAliño / MVBRodriguez / RRGotanco'},
    {name: 'MS 254 - Seagrasses and Mangroves', label1: 'MYRoleda'},
    {name: 'MS 258 - Marine Fishes', label1: 'PCCabaitan'},
    {name: 'MS 260 - Marine Biodiversity', label1: 'ATYñiguez / RRGotanco / MVBRodriguez'},
    {name: 'MS 273 - Marine Biotechnology II (every odd year)', label1: 'ETYu'},
    {name: 'MS 278 - Marine Natural Products (every even year)', label1: 'LSReyes'},
    {name: 'MS 280 - Management of Marine Resources (every even year)', label1: 'PMAliño / MAJMeñez / MVBRodriguez'},
    {name: 'MS 283 - Marine Agronomy', label1: 'WJESantiañez'},
    {name: 'MS 361 - Reproductive Biology', label1: 'MAJMeñez'},
    {name: 'MS 366 - Population Genetics of Marine Organisms', label1: 'RRGotanco'},
    {name: 'MS 280 - Management of Marine Resources (every even year)', label1: 'PMAliño / MAJMeñez / MVBRodriguez'},
    ];

    gselec2 = [
    {name: 'MS 283 - Marine Agronomy', label1: 'WJESantiañez'},
    {name: 'MS 361 - Reproductive Biology', label1: 'MAJMeñez'},
    {name: 'MS 366 - Population Genetics of Marine Organisms', label1: 'RRGotanco'},
    {name: 'MS 397 - Special Topics: Seaweed Utilization', label1: 'IBRodriguez'},
    {name: 'MS 397 - Special Topics: Physical-Biological Interactions in the Oceans', label1: 'ATYñiguez'},
    {name: 'MS 397 - Special Topics: Algal Life Histories and Reproduction', label1: 'WJESantiañez'},
    {name: 'MS 397 - Special Topics: Algal Photobiology and Photochemistry', label1: 'MYRoleda'},
    {name: 'MS 397 - Special Topics: Application of Satellite Altimetry (as needed)', label1: 'CLVillanoy'},
    {name: 'MS 397 - Special Topics: Mixing in Estuarine and Coastal Waters', label1: 'LTDavid'},
    {name: 'MS 397 - Special Topics: Stable Isotope Geochem', label1: 'CBJaraula / IBRodriguez'},
    {name: 'MS 397 - Special Topics: Marine Observation Systems'},
    {name: 'MS 398 - Advanced Methods in Marine Science: Applied Multivariate Data Analysis', label1: 'MJRPante'},
    {name: 'MS 398 - Advanced Methods in Marine Science: Seaweed and Seagrass Research Methods', label1: 'MYRoleda'},
    {name: 'MS 398 - Advanced Methods in Marine Science: Techniques in Coral Reef Ecology', label1: 'PCCabaitan'},
    {name: 'MS 398 - Advanced Methods in Marine Science: Molecular Biology Methods for Marine Science', label1: 'ACGConaco / RRGotanco'},
    {name: 'MS 398 - Advanced Methods in Marine Science: Elucidation of Natural Products (every odd year)', label1: 'LSReyes'},

  ];

  gssem = [
    {name: 'MS 396 - Seminar (Marine Biotechnology)'},
    {name: 'MS 396 - Seminar (Physical Sciences)'},
  ];

  gsmid = [
    {name: 'MS 397 - Special Topics: Microbial Oceanography', label1: 'DFLOnda'},
  ];

  nocore = [
    {name: 'MS 397 - Special Topics: Coastal Geomorphology', label1: 'FPSiringan'},
    {name: 'MS 397 - Special Topics: The Sediment Record of Environmental Change', label1: 'FPSiringan'},
    {name: 'MS 398 - Advanced Methods in Marine Science:  Analysis of Molecular Sequences (Every even year)'},
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
    this.dialog.open(CoursesDialogComponent, {
      height: 'auto',
      width: 'auto',
      data: {
        imgSrc: imgSrc
      }
    });
  }
}
