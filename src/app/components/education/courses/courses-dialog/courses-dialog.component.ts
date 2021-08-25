import { CoursesComponent } from './../courses.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.css']
})
export class CoursesDialogComponent implements OnInit {
  imgSrc:string;

  professors = [

    {name: 'MS 101 - Oceans', cnum: 'MS 101', ctit: 'Oceans', preq: '', credit: '', title1: 'LTDavid, GSJacinto, MLSMcGlone, FPSiringan, CLVillanoy, ATYñiquez',  RI: '-',
    publication: [
      {publi: 'To discuss the geological, physical, chemical and biological properties and processes in the ocean, how they interact, and their relevance to our planet and our lives.'},
      {publi: 'To explain the basic methods to investigate various aspects of oceanography.'}, 
    ]},

    {name: 'MS 102 - The Marine Sciences', cnum: 'MS 102', ctit: 'The Marine Sciences', preq: '', credit: '', title1: 'PCCabaitan, MAJMeñez, DFLOnda, MHTYap',  RI: '-',
    publication: [
      {publi: 'To understand the biology and ecology of marine organisms and key processes that maintain marine ecosystems'},
      {publi: 'To gain a better appreciation of scientific approaches and methods in the study of the marine ecology'},
      {publi: 'To examine socio-ecological contexts marine environmental issues.'},
    ]},

    {name: 'MS 1 - Oceans and Us', cnum: 'MS 1', ctit: 'Oceans and Us', preq: '', credit: '', title1: 'CGConaco, LTDavid, RRGotanco, GSJacinto, CBJaraula, MJRPante, LSReyes,  IBRodriguez, MVBRodriguez,  WJESantiañez, FPSiringan, ATYñiguez',  RI: 'The functional balance between the health of the oceans and the survival and improvement of our way of life',
    publication: [
      {publi: 'Integrate concepts and principles of marine ecosystem functions based on geological, physical, chemical, and biological concepts'},
      {publi: 'Analyze current environmental issues concerning our oceans.'},
      {publi: 'Evaluate rational strategies on the use and management of ocean resources.'},
    ]},

    /**
    {name: 'MS 201 - Ocean Physics and Chemistry', cnum: 'MS 201', ctit: 'Ocean Physics and Chemistry', preq: '', credit: '', title1: 'CBJaraula / LTDavid/CRepollo',  RI: '-',
    publication: [
      {publi: '-'},
    ]},
    */
    
     /**
    {name: 'MS 210 - Physical Oceanography', cnum: 'MS 210', ctit: 'Physical Oceanography', preq: '', credit: '', title1: 'CVillanoy / LTDavid/CRepollo',  RI: '---------------------------',
    publication: [
      {publi: '-'},
    ]},
    */

    /**
    {name: 'MS 220 - Chemical Oceanography', cnum: 'MS 210', ctit: 'Physical Oceanography', preq: '', credit: '', title1: 'MLSMcGlone / GSJacinto',  RI: '---------------------------',
    publication: [
      {publi: '-'},
    ]},
    */

    
    {name: 'MS 240 - Biological Oceanography', cnum: 'MS 240', ctit: 'Biological Oceanography', preq: 'MS 210 or MS 201', credit: '3   u', title1: 'MHTYap',  RI: 'The relationship of biological systems to the marine physico-chemical environment',
    publication: [
      {publi: 'To provide an overview of basic concepts (fundamentals) alongside cutting edge research developments in the various fields (including microbiology and molecular aspects).'},
      {publi: 'To develop critical and analytical thinking, so the students can be spun off to explore fields on their own which interest them and which they can study in greater depth'},
      {publi: 'To develop originality in their pursuit of science; be creative, innovative, willing to go out on a limb'},
      {publi: 'To do independent research in any field of their choice, AND publish it in the international primary literature.'},
    ]},
    

    /**
    {name: 'MS 270 - Biochemistry of Marine Organisms', cnum: 'MS 270', ctit: 'Biochemistry of Marine Organisms', preq: '', credit: '', title1: 'LSReyes / IBRodriguez / ETYu',  RI: '---------------------------',
    publication: [
      {publi: ''},
    ]},
    */

    {name: 'MS 255 - Coral Reef Ecosystems', cnum: 'MS 255', ctit: 'Coral Reef Ecosystems', preq: 'COI', credit: '3   u', title1: 'PCCabaitan',  RI: 'Structure, function  and ecological significance of coral reefs and their major living components.',
    publication: [
      {publi: 'Learn the theoretical and practical aspects of the processes driving the dynamics of coral reef communities.'},
    ]},

     {name: 'MS 256 - Marine Algae', cnum: 'MS 256', ctit: 'Marine Algae', preq: 'COI', credit: '3   u', title1: 'WJESantiañez',  RI: 'Taxonomy, morphology and ecology of marine benthic algae.',
    publication: [
      {publi: 'Articulate the basics of seaweed biology and ecology and relate and outline the role of seaweeds to the marine environment and to society.'},
      {publi: 'Discriminate morphological discontinuities from phylum to species level.'},
      {publi: ' Describe and interpret the similarities and differences of morphological characteristics of seaweeds.'},
      {publi: 'Describe and identify tropical (Philippines) seaweeds.'},
    ]},

    {name: 'MS 261 - Physiology of Marine Algae', cnum: 'MS 261', ctit: 'Physiology of Marine Algae', preq: 'MS 260 or equivalent or COI', credit: '3   u', title1: 'MYRoleda',  RI: 'Physiological features of marine algae – growth and differentiation, structure-function relationships, and adaptation strategies.',
    publication: [
      {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Molecular Ecology and Evolution', cnum: 'MS 397', ctit: 'Molecular Ecology and Evolution', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'RRGotanco',  RI: 'TA survey of methods for generating and analyzing molecular genetic data and their applications to the study of ecology and evolution in the marine environment.',
    publication: [
      {publi: 'To gain an appreciation of the utility and application of various molecular techniques to address questions in marine ecology and evolution.'},
      {publi: 'To familiarize students with key approaches for analyzing genetic variation and functional significance across hierarchical levels of biological organization   (population genetics, phylogenetics, -omics approaches).'},
    ]},

    {name: 'MS 397 - Special Topics: Ecological Assessment with Algae', cnum: 'MS 397', ctit: 'Ecological Assessment with Algae', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'MYRoleda',  RI: 'A review of studies and recent advances in the field of using algae in environmental assessments of water bodies that have been used for a century and in countries around the world',
    publication: [
      {publi: ''},
    ]},

    {name: 'MS 398 - Advanced Methods in Marine Science: Quantitative Methods in Microbial Ecology', cnum: 'MS 397', ctit: 'Ecological Assessment with Algae', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'DFLOnda',  RI: 'The course will mainly use the Quantitative Insights into Microbial Ecology (QIIME) platform to process high throughput sequencing (HTS) amplicon (e.g. 18S rRNA and 18S rDNA) data coupled with a myriad of statistical packages - from data filtering, to calculation and visualization of diversity indices and community patterns, to phylogenetic identification, and application of models to understand community assembly and ecology. The format is a mixture of lecture and discussions with hands-on exercises on actual data.',
    publication: [
      {publi: 'To provide basic theoretical, analytical and practical knowledge on quantitative tools and models for data analysis to gain ecological insights of microbial communities, with primary focus on microbial eukaryotes. '},
    ]},

    {name: 'MS 397 - Special Topics: Physical-Biological Interactions in the Oceans', cnum: 'MS 397', ctit: 'Physical-Biological Interactions in the Oceans', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'ATYñiguez',  RI: 'Qualitative and quantitative interactions and variabilities in coupled physical-biological systems in ocean systems at differing time and spatial scales.',
    publication: [
      {publi: 'Discuss mechanisms and processes influencing biological patterns such as biomass, productivity, and trophic interactions from the micro to macro-scales.'},
      {publi: 'Discuss the variations that occur in these biophysical systems.'},
      {publi: 'Provide examples on the methodologies and strategies to further investigate ocean ecosystems.'},
      {publi: 'Use and apply simple models to explore biophysical systems.'},
    ]},

    {name: 'MS 252 - Marine Biogeography', cnum: 'MS 252', ctit: 'Marine Biogeography', preq: 'COI', credit: '3 u', title1: 'PMAliño / MVBRodriguez / RRGotanco',  RI: 'Understanding the spatio-temporal variability in the distribution patterns of marine biota and the dynamic processes which cause these patterns.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 246 - Marine Phytoplankton', cnum: 'MS 246', ctit: 'Marine Phytoplankton', preq: 'Phycology  or COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'DFLOnda',  RI: 'Marine phytoplankton and their role in primary productivity. In this course, students will be introduced to the basic biology and ecology of phytoplankton species mainly focusing on their diversity, distribution, functions and adaptations in the marine environment.  Special topics such as the application of phytoplankton in energy and pharmaceutical biotech, occurrence of harmful algal blooms and their roles in potentially mitigating climate change will also be discussed.',
    publication: [
      {publi: 'The students are also expected to gain knowledge on traditional and emerging tools and methods used in studying phytoplankton, mainly the eukaryotic protists.'},
  ]},

    {name: 'MS 254 - Seagrasses and Mangroves', cnum: 'MS 254', ctit: 'Seagrasses and Mangroves', preq: 'Taxonomy of Higher Plants, consistent with Marine Ecology or equivalent', credit: '3 u', title1: 'MYRoleda',  RI: 'Distribution and production ecology of seagrasses and mangroves with emphasis on their role in the productivity and stability of coastal habitats.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Biological-Social Structures', cnum: 'MS 397', ctit: 'Biological-Social Structures', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1:'GPConcepcion / MHTYap',  RI: 'Distribution and production ecology of seagrasses and mangroves with emphasis on their role in the productivity and stability of coastal habitats.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 201 - Ocean Physics and Chemistry', cnum: 'MS 201', ctit: 'Ocean Physics and Chemistry', preq: 'Introductory Calculus, Elementary Organic Chemistry and basic Physical Chemistry', credit: '3 u', title1: 'CBJaraula / LTDavid/CRepollo' , RI: 'Introduction to physical and chemical properties and processes in marine waters.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 210 - Physical Oceanography', cnum: 'MS 210', ctit: 'Physical Oceanography', preq: 'Math 100 or COI', credit: '3 u', title1: 'CVillanoy / LTDavid/CRepollo', RI: 'Physical properties of sea water, general distribution of salinity, temperature and density, waves and currents, ocean atmosphere interactions.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 220 - Chemical Oceanography', cnum: 'MS 220', ctit: 'Chemical Oceanography', preq: 'Analytical Chemistry or COI', credit: '3 u', title1: 'MLSMcGlone / GSJacinto', RI: 'Chemical features of and processes in marine waters and sediments, and their interrelationships with the physical and biological systems.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 270 - Biochemistry of Marine Organisms', cnum: 'MS 270', ctit: 'Biochemistry of Marine Organisms', preq: 'Elementary Biochemistry  or COI', credit: '3 u', title1: 'LSReyes / IBRodriguez / ETYu', RI: 'Structure-function relationships of biomolecules, bioenergetics, catalysis, and regulation of metabolic pathways; and comparative biochemistry of marine organisms.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 214 - Waves and Tides (on demand)',  cnum: 'MS 214', ctit: 'Waves and Tides', preq: 'COI', credit: '3 u', title1: 'CLVillanoy / LTDavid', RI: 'Quantitative discussions on surface, long standing and internal waves; seiches, tsunamic, storm surges, swells, tide-producing forces and tides.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 221 - Marine Geochemistry',  cnum: 'MS 221', ctit: 'Marine Geochemistry', preq: 'MS 220 or COI', credit: '3 u', title1: 'GSJacinto / CBJaraula', RI: 'The study of oceans as a geochemical  systems with  emphasis  on   global  biogeochemical cycles.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 226 - Marine Pollution Chemistry',  cnum: 'MS 226', ctit: 'Marine Pollution Chemistry', preq: 'General Inorganic Chem, General Organic Chem, & Analytical Chem or  equivalents or  COI', credit: '3 u', title1: 'GSJacinto / MLSMcGlone / IBRodriguez', RI: 'Sources, sinks and fate of various types of pollutants in the marine environment',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 226.1 - Marine Pollution Chemistry laboratory',  cnum: 'MS 226.1', ctit: 'Marine Pollution Chemistry', preq: 'General Inorganic Chem, General Organic Chem, & Analytical Chem or  equivalents or  COI', credit: '3 u', title1: 'GSJacinto / MLSMcGlone', RI: 'Sources, sinks and fate of various types of pollutants in the marine environment',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 253 - Marine Chemical Ecology', cnum: 'MS 253', ctit: 'Marine Chemical Ecology', preq: 'COI', credit: '3 u', title1: 'LSReyes / MVBRodriguez', RI: 'The role of biomolecules (hormones, secondary metabolites, and others) in the interaction of marine organisms and their potential ecological and economic applications.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 385 - Marine Toxinology (every odd year)', cnum: 'MS 385', ctit: 'Marine Toxinology', preq: 'COI', credit: '3 u', title1: 'LSReyes / DFLOnda', RI: 'The biological significance, mode of production, biochemistry, toxinology and mechanisms of action of marine toxins.',
    publication: [
    {publi: ''},
    ]},

  ];
  myArr = [];

  publi:boolean = false;

  constructor(public dialogRef: MatDialogRef<CoursesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.myArr = this.professors.filter(res => res.name === this.data.imgSrc);
    console.log(this.data.imgSrc);
  }


}
