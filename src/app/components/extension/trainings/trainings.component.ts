import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  news=[
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981909/Extension/02%20-%20Trainings/Training-18_mcbgw7.png", title: `Training on coastal erosion management | 2019`, content: `Communication, Education, and Public Awareness (CEPA) and Policy review towards improving coastal erosion management in the Philippines`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981910/Extension/02%20-%20Trainings/Training-17_k21gvp.png", title: `12th International Workshop on the Fluvial Sediment Supply to the South China Sea | 2019`, content: `South China Sea Fluvial Sediment and Environmental Changes`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981905/Extension/02%20-%20Trainings/Training-16_a88ljq.png", title: `Soft coral training: Sample identification and collection protocols | 2019`, content: `Balik PhD: Impacts of multiple stressors on hard and soft corals`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981906/Extension/02%20-%20Trainings/Training-15_fdjxmr.png", title: `GIS Workshop c/o Dr. John Ong | 2019`, content: `An Autonomous Surface Vessel to Advance Marine and Environmental Health Research in the Philippines`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981904/Extension/02%20-%20Trainings/Training-14_xm8tsm.png", title: `Risk Assessment (Barangay Luciente, Victory, and Salud, Bolinao, Pangasinan) | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981902/Extension/02%20-%20Trainings/Training-13_xvdglv.png", title: `Launching Region 1 | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981906/Extension/02%20-%20Trainings/Training-12_txltlo.png", title: `Internal training in the use of ASV (deployment & retrieval, sensor integration, software) | 2019`, content: `An Autonomous Surface Vessel to Advance Marine and Environmental Health Research in the Philippines`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981899/Extension/02%20-%20Trainings/Training-11_a5bibx.png", title: `Risk Assessment (Barangay Agtatakay-sur and Lonoy, Sapian, Capiz) | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981895/Extension/02%20-%20Trainings/Training-10_f74pfp.png", title: `Launching Region 6 | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981899/Extension/02%20-%20Trainings/Training-09_dno4pr.png", title: `Risk Assessment (Barangay Maligaya and Malobago Jiabong, Samar) | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981895/Extension/02%20-%20Trainings/Training-08_auuihv.png", title: `Launching Region 8 | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981888/Extension/02%20-%20Trainings/Training-07_iwxhw0.png", title: `Training on coastal erosion management | 2018`, content: `Communication, Education, and Public Awareness (CEPA) and Policy review towards improving coastal erosion management in the Philippines`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981885/Extension/02%20-%20Trainings/Training-06_mncip1.png", title: `Giant Clam Project | 2018`, content: `Public Forum: Giant Clam Conservation; Sustainable Opportunities Bolinao Marine Laboratory, Bolinao Pangasinan`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981891/Extension/02%20-%20Trainings/Training-05_ic8mkm.png", title: `Kickoff and Collaboration Workshop | 2018`, content: `An Autonomous Surface Vessel to Advance Marine and Environmental Health Research in the Philippines`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981891/Extension/02%20-%20Trainings/Training-04_svckxm.png", title: `Socio economic data analysis workshop | 2019`, content: `Increasing technical skills supporting community-based sea cucumber production in Vietnam and the Philippines`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981888/Extension/02%20-%20Trainings/Training-03_fip4mr.png", title: `Enhancing sea cucumber project | 2018`, content: `Sea Cucumber feedback and workshop`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981888/Extension/02%20-%20Trainings/Training-02_s5yyhu.png", title: `Hazard Detection and Mitigation Tools for algal blooms in changing Marine Environment 2 | 2018`, content: `Development of detection tools for algal blooms to rapid responses: from organisim to environment`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981890/Extension/02%20-%20Trainings/Training-01_tejahp.png", title: `Hazard Detection and Mitigation Tools for algal blooms in changing Marine Environment 1 | 2018`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},

    {image: "https://res.cloudinary.com/upmsi/image/upload/v1628583966/Extension/02%20-%20Trainings/Training-20_vmbzjt.jpg", title: `Hingacu Palawan: Coral Reef assessment & monitoring using Citizen Science`, content: `Identifying coral life forms and different species of reef-associated butterflyfishes is important in assessing reef areas and understanding their roles and relationships.`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1628583968/Extension/02%20-%20Trainings/Training-21_rxdpkw.png", title: `Hingacu Palawan: Green in the Blue`, content: `Understanding the ecological significance of mangroves and seagrasses to humans allow us to provide more comprehensive solutions to address conservation problems.`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1628583963/Extension/02%20-%20Trainings/Training-19_v6abu8.png", title: `Hingacu Palawan: Here today, Gone tomorrow`, content: `TThe Beach Erosion Assessment and Monitoring (BEAM) training aims to raise awareness about coastal erosion and to teach participants about beach monitoring and short-term coastal changes.`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1628583974/Extension/02%20-%20Trainings/Training-22_vdgeuf.png", title: `Hingacu Palawan: A view from above`, content: `The training, divided into two levels, focused on coastal habitat and land-use land cover (LULC) mapping using remote sensing techniques techniques techniques techniques.`},
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
