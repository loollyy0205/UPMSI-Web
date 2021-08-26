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

    
    {name: 'MS 201 - Ocean Physics and Chemistry', cnum: 'MS 201', ctit: 'Ocean Physics and Chemistry', preq: '', credit: '', title1: 'CBJaraula / LTDavid/CRepollo',  RI: 'An introduction to various aspects of chemical– and physical-mediated ecological interactions of marine organisms. It is a combination of discussions, directed readings and reports.',
    publication: [
      {publi: 'Explain the evolution of oceans and ocean chemistry.'},
      {publi: 'Discuss marine pollution and water quality issues.'},
      {publi: 'Discuss maine commodities.'},
      {publi: 'Explain the major forces which drive the different types of ocean motion.'},
      {publi: 'Discuss the distribution of temperature and salinity in the oceans and the processes that determine variations with depth and in the different ocean basins.'},
      {publi: 'Understand the scientific method and how it is applied towards understanding complex ocean dynamics and its relation to marine ecosystem.'},
    ]},
    
    
     
    {name: 'MS 210 - Physical Oceanography', cnum: 'MS 210', ctit: 'Physical Oceanography', preq: '', credit: '', title1: 'CVillanoy / LTDavid/CRepollo',  RI: 'Physical properties of sea water, general distribution of salinity, temperature and density, waves and currents, ocean atmosphere interactions.',
    publication: [
      {publi: 'Discuss and be able to interpret the large-scale distribution of physical properties e.g. temperature, salinity, and currents in the oceans and the processes that determine its variations with depth and in the different ocean basins.'},
      {publi: 'Explain the major forces which drive the different types of ocean motion and learn how it can be estimated from observations.'},
      {publi: 'Calculate and visualize simplified models of ocean dynamics.'},
    ]},
    

    
    {name: 'MS 220 - Chemical Oceanography', cnum: 'MS 210', ctit: 'Physical Oceanography', preq: '', credit: '', title1: 'MLSMcGlone / GSJacinto',  RI: 'Chemical features and processes in marine waters and sediments, and their interrelationships with the physical and biological systems.',
    publication: [
      {publi: 'Understanding of fluid flow and fluid-solid interaction in the marine environment'},
      {publi: 'Understanding of the physical processes responsible for shaping coastal and estuarine environments '},
      {publi: ' An appreciation of the action of waves and tides from coastal to oceanic environments and their prediction.'},
    ]},
    

    
    {name: 'MS 240 - Biological Oceanography', cnum: 'MS 240', ctit: 'Biological Oceanography', preq: 'MS 210 or MS 201', credit: '3   u', title1: 'MHTYap',  RI: 'The relationship of biological systems to the marine physico-chemical environment',
    publication: [
      {publi: 'To provide an overview of basic concepts (fundamentals) alongside cutting edge research developments in the various fields (including microbiology and molecular aspects).'},
      {publi: 'To develop critical and analytical thinking, so the students can be spun off to explore fields on their own which interest them and which they can study in greater depth'},
      {publi: 'To develop originality in their pursuit of science; be creative, innovative, willing to go out on a limb'},
      {publi: 'To do independent research in any field of their choice, AND publish it in the international primary literature.'},
    ]},
    

    
    {name: 'MS 270 - Biochemistry of Marine Organisms', cnum: 'MS 270', ctit: 'Biochemistry of Marine Organisms', preq: 'Elementary Biochemistry  or COI', credit: '3   u', title1: 'LSReyes / IBRodriguez / ETYu',  RI: 'Structure-function relationships of biomolecules, bioenergetics, catalysis, and regulation of metabolic pathways; and comparative biochemistry of marine organisms.',
    publication: [
      {publi: ''},
    ]},
    

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

    {name: 'MS 397 - Special Topics: Behavioral Ecology', cnum: 'MS 397', ctit: 'Behavioral Ecology', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'MAJMeñez', RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Genome Biology of Marine Organisms', cnum: 'MS 397', ctit: 'Genome Biology of Marine Organisms', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'CGConaco', RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Gene Expression Control', cnum: 'MS 397', ctit: 'Gene Expression Control', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'CGConaco', RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Ecological Modeling', cnum: 'MS 397', ctit: 'Ecological Modeling', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'ATYñiguez', RI: 'The process and outputs of modeling have played important roles in helping to increase our understanding of various complex systems. Modeling enables the synthesis of knowledge on these complex ecological systems, and allows us to simulate and analyze their dynamics. This course will give an introduction into the development and analysis of ecological models. It will provide an overview on the approaches and the model types using a hands-on approach.',
    publication: [
    {publi: 'Discuss the concept and process of ecological modeling'},
    {publi: 'Discuss different approaches to ecological modeling'},
    {publi: 'Conceptualize, implement and analyze an ecological model'},
    ]},

    {name: 'MS 397 - Special Topics: Ecological Restoration', cnum: 'MS 397', ctit: 'Ecological Restoration', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'MVBRodriguez', RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Marine Organic Geochemistry (as needed)', cnum: 'MS 397', ctit: 'Marine Organic Geochemistry', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'CBJaraula', RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},


    {name: 'MS 397 - Special Topics: Molecular Biology and Bioinformatics of the Biosynthesis of Natural Products', cnum: 'MS 397', ctit: 'Marine Organic Geochemistry', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'AOLluisma', RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 398 - Advanced Methods in Marine Science: Biostatistics', cnum: 'MS 398', ctit: 'Biostatistics', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'MJRPante', RI: 'Specialized techniques used in marine science research. ',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 398 - Advanced Methods in Marine Science: Practical Scientific Programming (every odd year)', cnum: 'MS 398', ctit: 'Practical Scientific Programming', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'AOLluisma', RI: 'Specialized techniques used in marine science research. ',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 398 - Advanced Methods in Marine Science: Data Analysis Methods in Oceans', cnum: 'MS 398', ctit: 'Data Analysis Methods in Oceans', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'CLVillanoy / LTDavid/CRepollo', RI: 'The process and outputs of modeling have played important roles in helping to increase our understanding of various complex systems. Modeling enables the synthesis of knowledge on these complex ecological systems, and allows us to simulate and analyze their dynamics. This course will give an introduction into the development and analysis of ecological models. It will provide an overview on the approaches and the model types using a hands-on approach.',
    publication: [
    {publi: 'Discuss the concept and process of ecological modeling.'},
    {publi: 'Discuss different approaches to ecological modeling'},
    {publi: 'Conceptualize, implement and analyze an ecological model.'},
    ]},

    {name: 'MS 398 - Advanced Methods in Marine Science: Ocean Remote Sensing & Image Analysis', cnum: 'MS 398', ctit: 'Ocean Remote Sensing & Image Analysis', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'LTDavid', RI: 'Introduction to Satellite Remote Sensing; Specialized techniques used in marine science research. ',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 398 - Methods in Marine Science: Advanced Methods in Natural Products', cnum: 'MS 398', ctit: 'Advanced Methods in Natural Products', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'LSReyes', RI: 'Specialized techniques used in marine science research. ',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 396 - Seminar 1:  Current Topics in Marine Science (for all MS students)', cnum: 'MS 396', ctit: 'Current Topics in Marine Science', preq: 'COI', credit: '1 u; every PhD student shall complete one seminar course every other year after 12 u of courses have been credited to his/her program of study; MS students shall complete only one seminar course.', title1: 'All MSI Faculty', RI: 'Readings and public presentation on current research, issues and topics',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 396 - Seminar (Marine Biology)', cnum: 'MS 396', ctit: 'Advanced Methods in Natural Products', preq: 'COI', credit: '1 u; every PhD student shall complete one seminar course every other year after 12 u of courses have been credited to his/her program of study; MS students shall complete only one seminar course.', RI: 'Readings and public presentation on current research, issues and topics',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 230 - Geological Oceanography', label1: '', cnum: 'MS 230', ctit: 'Geological Oceanography', preq: 'Geo 11 or COI', credit: '3   u', title1: 'FPSiringan / CBJaraula', RI: 'An introduction to the origin, morphology, structure and processes of the sea floor and ocean margins (for non-geology majors).',
    publication: [
    {publi: 'The course will introduce students to the concept of the geological oceanography as a fundamental component of ocean studies that graduate students are expected to know. Background material from this course collates essential knowledge from solid-earth geophysics, geochemistry, sedimentology, and stratigraphy, coastal processes, and climate to discuss plate tectonics, volcanism, rock and sediment deposits, shallow water and deep sea processes, paleoceanography, climate and sea level changes. Global and regional-scale processes are discussed in the context of short- and long-term timescales to instill the connectivity of feedbacks between mechanisms and impacts to the chemical, biological and physical processes.'},
    ]},

    {name: 'MS 240 - Biological Oceanography', cnum: 'MS 240', ctit: 'Biological Oceanography', preq: 'MS 210 or MS 201', credit: '3   u', title1: 'MHTYap', RI: 'The relationship of biological systems to the marine physico-chemical environment.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 272 - Marine Biotechnology 1', cnum: 'MS 272', ctit: 'Marine Biotechnology 1', preq: 'Undergraduate-level courses in biochemistry,  molecular biology, and genetics and COI', credit: '3   u', title1: 'AOLluisma', RI: 'Principles of genomics, proteomics, bioinformatics, and genetic manipulation with emphasis on their application in the study of marine organisms.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 213 - Dynamics of Oceans', cnum: 'MS 213', ctit: 'Dynamics of Oceans', preq: 'MS 210 or COI', credit: '3 u', title1: 'CLVillanoy', RI: 'Dynamical principles which govern the   behavior  of  the  oceans in   response to    the effects of gravity, rotation, stratification, and other external forces.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 216 - Numerical Ocean Modeling (on demand)', cnum: 'MS 216', ctit:  'Numerical Ocean Modeling', preq: 'MS 210 or COI', credit: '3 u', title1: 'CLVillanoy / LTDavid', RI: 'Numerical problem solving on topics pertaining to wind-driven barotrophic models; simple thermohaline models; baroclinic models; mixed models; problems in ocean modeling.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 217 - Coastal and Estuarine Oceanography', cnum: 'MS 217', ctit: 'Coastal and Estuarine Oceanography', preq: 'MS 210 or COI', credit: '3 u', title1: 'LTDavid', RI: 'Ocean dynamics modified by   thermohaline effects, presence of coast and shallow bathymetry.',
    publication: [
    {publi: 'Understanding of fluid flow and fluid-solid interaction in the marine environment.'},
    {publi: 'Understanding of the physical processes responsible for shaping coastal and estuarine environments.'},
    {publi: 'An appreciation of the action of waves and tides from coastal to oceanic environments and their prediction.'},
    ]},

    {name: 'MS 222 - Chemistry of Marine Coastal Environments (every odd year)', cnum: 'MS 222', ctit: 'Chemistry of Marine Coastal Environments', preq: 'MS 220 or COI', credit: '3 u', title1: 'GSJacinto / CBJaraula / MLSMcGlone', RI: 'Applications of principles of chemical oceanography to the understanding of various coastal systems including coral reefs, mangroves, seagrass beds, and estuaries.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 242 - Marine Microbiology', cnum: 'MS 242', ctit: 'Marine Microbiology', preq: 'COI', credit: '3 u', title1: 'CGConaco', RI: 'The diversity and role of marine microorganisms in energy flow and biogeochemical cycling.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 250 - Marine Ecology', cnum: 'MS 250', ctit: 'Marine Ecology', preq: 'Undergraduate ecology or COI', credit: '3 u', title1: 'MYRoleda', RI: 'Fundamental ecological principles as applied to the marine environment.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 251 - Population Biology of Marine Organisms', cnum: 'MS 251', ctit: 'Population Biology of Marine Organisms', preq: 'consistent with Marine Ecology and Biological Oceanography or equivalent', credit: '3 u', title1: 'PCCabaitan', RI: 'Study of populations of marine organisms, factors that regulate their size, interspecific interactions, and their life history strategies.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 258 - Marine Fishes', cnum: 'MS 258', ctit: 'Marine Fishes', preq: 'Comparative Vertebrate Anatomy', credit: '3 u', title1: 'PCCabaitan', RI: 'Taxonomy,  morphology and ecology of marine fishes.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 260 - Marine Biodiversity', cnum: 'MS 260', ctit: 'Marine Biodiversity', preq: 'Undergraduate Ecology course or  COI', credit: '3 u', title1: 'ATYñiguez / RRGotanco / MVBRodriguez', RI: 'The variety, variability and natural relations of marine living organisms viewed at the structural (organismal to ecosystem) level.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 273 - Marine Biotechnology II (every odd year)', cnum: 'MS 273', ctit: 'Marine Biotechnology II', preq: 'MS 272', credit: '3 u', title1: 'ETYu', RI: 'Molecular,  biotechnological, and related techniques in the study and utilization of marine organisms.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 278 - Marine Natural Products (every even year)', cnum: 'MS 278', ctit: 'Marine Natural Products', preq: 'MS 270 or COI', credit: '3 u', title1: 'LSReyes', RI: 'Survey of natural products from marine organisms : chemistry, biosynthesis, isolation, purification and biological activity.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 280 - Management of Marine Resources (every even year)', cnum: 'MS 280', ctit: 'Management of Marine Resources', preq: 'Plant Morphoanatomy, Fundamentals of Ecology  or COI', credit: '3 u', title1: 'PMAliño / MAJMeñez / MVBRodriguez', RI: 'Biological and economic concepts for developing and managing the living resources of the sea.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 283 - Marine Agronomy', cnum: 'MS 283', ctit: 'Marine Agronomy', preq: 'MS 260 or equivalent', credit: '3 u', title1: 'WJESantiañez', RI: 'Ecology and culture of economically important seaweeds and the utilization of their products',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 361 - Reproductive Biology', cnum: 'MS 361', ctit: 'Reproductive Biology', preq: 'COI', credit: '3 u', title1: 'MAJMeñez', RI: 'Reproduction in major groups of marine organisms with special reference to cycles and periodicity, in relation to internal and external control mechanisms.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 366 - Population Genetics of Marine Organisms', cnum: 'MS 366', ctit: 'Population Genetics of Marine Organisms', preq: 'Undergraduate genetics or COI', credit: '3 u', title1: 'RRGotanco', RI: 'The principles of population genetics with emphasis on the application of genetic markers for the assessment and management of wild and cultured organisms.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 280 - Management of Marine Resources (every even year)', cnum: 'MS 280', ctit: 'Management of Marine Resources', preq: 'Plant Morphoanatomy, Fundamentals of Ecology  or COI', credit: '3 u', title1: 'PMAliño / MAJMeñez / MVBRodriguez', RI: 'Biological and economic concepts for developing and managing the living resources of the sea.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Seaweed Utilization', cnum: 'MS 397', ctit: 'Seaweed Utilization', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'IBRodriguez', RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Algal Life Histories and Reproduction', cnum: 'MS 397', ctit: 'Algal Life Histories and Reproduction', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'WJESantiañez', RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Algal Photobiology and Photochemistry', cnum: 'MS 397', ctit: 'Algal Photobiology and Photochemistry', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'MYRoleda', RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Application of Satellite Altimetry (as needed)', cnum: 'MS 397', ctit: 'Application of Satellite Altimetry', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'CLVillanoy', RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Mixing in Estuarine and Coastal Waters', cnum: 'MS 397', ctit: 'Mixing in Estuarine and Coastal Waters', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'LTDavid', RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Stable Isotope Geochem', cnum: 'MS 397', ctit: 'Stable Isotope Geochem', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'CBJaraula / IBRodriguez', RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Marine Observation Systems', cnum: 'MS 397', ctit: 'Marine Observation Systems', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 398 - Advanced Methods in Marine Science: Applied Multivariate Data Analysis', cnum: 'MS 398', ctit: 'Applied Multivariate Data Analysis', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'MJRPante', RI: 'Specialized techniques used in marine science research.',
    publication: [
    {publi: ''},
    ]},


    {name: 'MS 398 - Advanced Methods in Marine Science: Seaweed and Seagrass Research Methods', cnum: 'MS 398', ctit: 'Seaweed and Seagrass Research Methods', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'MYRoleda', RI: 'Specialized techniques used in marine science research.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 398 - Advanced Methods in Marine Science: Techniques in Coral Reef Ecology', cnum: 'MS 398', ctit: 'Techniques in Coral Reef Ecology', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'PCCabaitan', RI: 'Specialized techniques used in marine science research.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 398 - Advanced Methods in Marine Science: Molecular Biology Methods for Marine Science', cnum: 'MS 398', ctit: 'Molecular Biology Methods for Marine Science', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'ACGConaco / RRGotanco', RI: 'Specialized techniques used in marine science research.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 398 - Advanced Methods in Marine Science: Elucidation of Natural Products (every odd year)', cnum: 'MS 398', ctit: 'Elucidation of Natural Products', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'LSReyes', RI: 'Specialized techniques used in marine science research.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 396 - Seminar (Marine Biotechnology)', cnum: 'MS 396', ctit: 'Marine Biotechnology', preq: 'COI', credit: '1 u; every PhD student shall complete one seminar course every other year after 12 u of courses have been credited to his/her program of study; MS students shall complete only one seminar course.', RI: 'Readings and public presentation on current research, issues and topics.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 396 - Seminar (Physical Sciences)', cnum: 'MS 396', ctit: 'Physical Sciences', preq: 'COI', credit: '1 u; every PhD student shall complete one seminar course every other year after 12 u of courses have been credited to his/her program of study; MS students shall complete only one seminar course.', RI: 'Readings and public presentation on current research, issues and topics.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Microbial Oceanography', cnum: 'MS 397', ctit: 'Microbial Oceanography', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'DFLOnda',  RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: Coastal Geomorphology', cnum: 'MS 397', ctit: 'Coastal Geomorphology', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'FPSiringan',  RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 397 - Special Topics: The Sediment Record of Environmental Change', cnum: 'MS 397', ctit: 'The Sediment Record of Environmental Change', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', title1: 'FPSiringan',  RI: 'Discussions on current and emerging topics/issues in the marine sciences.',
    publication: [
    {publi: ''},
    ]},

    {name: 'MS 398 - Advanced Methods in Marine Science:  Analysis of Molecular Sequences (Every even year)', cnum: 'MS 398', ctit: 'Analysis of Molecular Sequences', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', RI: 'Specialized techniques used in marine science research.',
    publication: [
    {publi: ''},
    ]},

     {name: 'MS 398 - Advanced Methods in Marine Science: Data Analysis Methods in Oceanography', label1: '', cnum: 'MS 398', ctit: 'Data Analysis Methods in Oceanography', preq: 'COI', credit: '3 u (may be repeated for additional credit as long as the topics are not the same).', RI: 'A hands-on class on data analysis techniques in Oceanography. It addresses data acquisition and quality control, data processing and presentation, statistical methods and error handling, analysis of spatial data fields, and time series analysis methods.',
    publication: [
      {publi: 'Expose students to state-of-the-art global earth system databases.'},
      {publi: 'Introduce instrumentation used to collect the data and learn how to acquire and apply quality control.'},
      {publi: 'Introduce relevant statistical methods and signal processing techniques and tools such as Power and Rotary Spectral Analysis, Tidal Harmonic Analysis, Lowpass and bandpass filtering, Empirical Orthogonal Function (EOF) Analysis, Correlation, Regression, etc  to prepare students to use these techniques in their own research or career.'},
      {publi: 'Train  students  with  the  Unix  operating  system, data analysis and display using Matlab, Ocean Data View and Python.'},
      {publi: 'Improve quantitative understanding of the oceans physical processes that will be useful on their own research projects.'},
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
