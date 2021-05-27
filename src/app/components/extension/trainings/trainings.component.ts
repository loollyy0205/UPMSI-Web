import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  news=[
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-01.png?alt=media&token=3c936ee9-35bc-4248-bafd-22325310bfef", title: `Hazard Detection and Mitigation Tools for algal blooms in changing Marine Environment 1 | 2018`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-02.png?alt=media&token=1077cb00-8b85-4922-8038-7de9eea5ee17", title: `Hazard Detection and Mitigation Tools for algal blooms in changing Marine Environment 2 | 2018`, content: `Development of detection tools for algal blooms to rapid responses: from organisim to environment`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-03.png?alt=media&token=c6f47054-4e5b-4198-8317-4600fb19f340", title: `Enhancing sea cucumber project | 2018`, content: `Sea Cucumber feedback and workshop`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-04.png?alt=media&token=ac48b728-3eba-49a2-9344-0fd49024f1d1", title: `Socio economic data analysis workshop | 2019`, content: `Increasing technical skills supporting community-based sea cucumber production in Vietnam and the Philippines`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-05.png?alt=media&token=6d4a2342-b29e-4bef-bff9-c00198690830", title: `Kickoff and Collaboration Workshop | 2018`, content: `An Autonomous Surface Vessel to Advance Marine and Environmental Health Research in the Philippines`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-06.png?alt=media&token=f0122b27-a345-47c4-a559-5595a650a6c6", title: `Giant Clam Project | 2018`, content: `Public Forum: Giant Clam Conservation; Sustainable Opportunities Bolinao Marine Laboratory, Bolinao Pangasinan`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-07.png?alt=media&token=be471dc0-d062-479a-8df8-4a515c6d557f", title: `Training on coastal erosion management | 2018`, content: `Communication, Education, and Public Awareness (CEPA) and Policy review towards improving coastal erosion management in the Philippines`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-08.png?alt=media&token=36db4033-b37f-4dc4-98f7-20f9dfa57990", title: `Launching Region 8 | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-09.png?alt=media&token=d13a3fec-4180-4047-a9a3-2b579ff967fb", title: `Risk Assessment (Barangay Maligaya and Malobago Jiabong, Samar) | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-10.png?alt=media&token=462af658-5e73-4817-862a-9e2489c7f77d", title: `Launching Region 6 | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-11.png?alt=media&token=d9817767-d74f-4764-9550-ffdd450f29d2", title: `Risk Assessment (Barangay Agtatakay-sur and Lonoy, Sapian, Capiz) | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-12.png?alt=media&token=2fff1437-5c58-43ca-9788-999144a04650", title: `Internal training in the use of ASV (deployment & retrieval, sensor integration, software) | 2019`, content: `An Autonomous Surface Vessel to Advance Marine and Environmental Health Research in the Philippines`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-13.png?alt=media&token=8197f0eb-68b1-46e6-b643-73f35886f237", title: `Launching Region 1 | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-14.png?alt=media&token=18945352-14b9-497f-bb2b-4bdca12c9817", title: `Risk Assessment (Barangay Luciente, Victory, and Salud, Bolinao, Pangasinan) | 2019`, content: `Intergated Harmful Algal Bloom Detection and Information system for adaptive responses`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-15.png?alt=media&token=296df26d-0b79-4e1b-b400-e1dd167e6c43", title: `GIS Workshop c/o Dr. John Ong | 2019`, content: `An Autonomous Surface Vessel to Advance Marine and Environmental Health Research in the Philippines`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-16.png?alt=media&token=1feca6a7-2dab-4f0d-b3e6-a890a17b79c7", title: `Soft coral training: Sample identification and collection protocols | 2019`, content: `Balik PhD: Impacts of multiple stressors on hard and soft corals`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-17.png?alt=media&token=bd0efe56-58b2-4b2c-ba83-43c54744719a", title: `12th International Workshop on the Fluvial Sediment Supply to the South China Sea | 2019`, content: `South China Sea Fluvial Sediment and Environmental Changes`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/trainings%2FTraining-18.png?alt=media&token=10030c86-fcd5-41f8-8d88-3f9862b776d8", title: `Training on coastal erosion management | 2019`, content: `Communication, Education, and Public Awareness (CEPA) and Policy review towards improving coastal erosion management in the Philippines`},
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newsContent(i){
    switch(i) {
      case 0:
        this.router.navigate(['/News/content', 'filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth']);
        break;
      case 1:
        this.router.navigate(['/News/content', 'UPMSI-scientists-receive-accolades-from-NAST']);
        break;
      case 2:
        this.router.navigate(['/News/content', 'all-about-the-giant-clam']);
        break;
      case 3:
        this.router.navigate(['/News/content', 'NARFleet-is-on-its-way-to-prowl-Philippine-waters']);
        break;
    }

  }

}
