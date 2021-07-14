import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  news=[
    {image: "https://dc597.4shared.com/img/aNylhXvMea/s24/179b15f5ec0/Training-18?async&rand=0.5281324426000262", title: `Training on coastal erosion management | 2019`, content: `Communication, Education, and Public Awareness (CEPA) and Policy review towards improving coastal erosion management in the Philippines`},
    {image: "https://dc597.4shared.com/img/Gz0le4Lvea/s24/179b15f5ad8/Training-17?async&rand=0.610825700360337", title: `12th International Workshop on the Fluvial Sediment Supply to the South China Sea | 2019`, content: `South China Sea Fluvial Sediment and Environmental Changes`},
    {image: "https://dc597.4shared.com/img/O1wKSaSFiq/s24/179b15f56f0/Training-16?async&rand=0.07462841421941291", title: `Soft coral training: Sample identification and collection protocols | 2019`, content: `Balik PhD: Impacts of multiple stressors on hard and soft corals`},
    {image: "https://dc585.4shared.com/img/Vrq8ddsfea/s24/179b15f4f20/Training-15?async&rand=0.8282607934532242", title: `GIS Workshop c/o Dr. John Ong | 2019`, content: `An Autonomous Surface Vessel to Advance Marine and Environmental Health Research in the Philippines`},
    {image: "https://dc585.4shared.com/img/LncsJFxniq/s24/179b15f4b38/Training-14?async&rand=0.9452286903628122", title: `Risk Assessment (Barangay Luciente, Victory, and Salud, Bolinao, Pangasinan) | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://dc597.4shared.com/img/yWeAmCPxea/s24/179b15f4750/Training-13?async&rand=0.9919380922510426", title: `Launching Region 1 | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://dc585.4shared.com/img/rmFVZYEbiq/s24/179b15f4368/Training-12?async&rand=0.9696287290244701", title: `Internal training in the use of ASV (deployment & retrieval, sensor integration, software) | 2019`, content: `An Autonomous Surface Vessel to Advance Marine and Environmental Health Research in the Philippines`},
    {image: "https://dc597.4shared.com/img/TNFf6sedea/s24/179b15f3b98/Training-11?async&rand=0.8329141649827552", title: `Risk Assessment (Barangay Agtatakay-sur and Lonoy, Sapian, Capiz) | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://dc597.4shared.com/img/iOX5CBHliq/s24/179b15f37b0/Training-10?async&rand=0.48910656960354393", title: `Launching Region 6 | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://dc597.4shared.com/img/khPvtvyPea/s24/179b15f2fe0/Training-09?async&rand=0.7712921023308481", title: `Risk Assessment (Barangay Maligaya and Malobago Jiabong, Samar) | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://dc585.4shared.com/img/Ryruzd4kiq/s24/179b15f2bf8/Training-08?async&rand=0.9379763045873302", title: `Launching Region 8 | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://dc597.4shared.com/img/h6fwHC4Ciq/s24/179b15f2810/Training-07?async&rand=0.17569681234634782", title: `Training on coastal erosion management | 2018`, content: `Communication, Education, and Public Awareness (CEPA) and Policy review towards improving coastal erosion management in the Philippines`},
    {image: "https://dc585.4shared.com/img/LkZ22Rasiq/s24/179b15f2428/Training-06?async&rand=0.330893314992146", title: `Giant Clam Project | 2018`, content: `Public Forum: Giant Clam Conservation; Sustainable Opportunities Bolinao Marine Laboratory, Bolinao Pangasinan`},
    {image: "https://dc597.4shared.com/img/sHegmCKxiq/s24/179b15f1c58/Training-05?async&rand=0.8429510612341458", title: `Kickoff and Collaboration Workshop | 2018`, content: `An Autonomous Surface Vessel to Advance Marine and Environmental Health Research in the Philippines`},
    {image: "https://dc585.4shared.com/img/lDho8CMJea/s24/179b15f1870/Training-04?async&rand=0.7981471060189551", title: `Socio economic data analysis workshop | 2019`, content: `Increasing technical skills supporting community-based sea cucumber production in Vietnam and the Philippines`},
    {image: "https://dc729.4shared.com/img/WQ6SVjEWiq/s24/179b15f1488/Training-03?async&rand=0.12317015544360865", title: `Enhancing sea cucumber project | 2018`, content: `Sea Cucumber feedback and workshop`},
    {image: "https://dc729.4shared.com/img/fWQiXf1Wiq/s24/179b15f10a0/Training-02?async&rand=0.8789820730841487", title: `Hazard Detection and Mitigation Tools for algal blooms in changing Marine Environment 2 | 2018`, content: `Development of detection tools for algal blooms to rapid responses: from organisim to environment`},
    {image: "https://dc585.4shared.com/img/7AX9BBslea/s24/179b15f0cb8/Training-01?async&rand=0.844488867594821", title: `Hazard Detection and Mitigation Tools for algal blooms in changing Marine Environment 1 | 2018`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
