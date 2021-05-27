import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UploadFetchService } from 'src/app/shared/upload-fetch.service';
import { Component, OnInit } from '@angular/core';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-images-tab',
  templateUrl: './images-tab.component.html',
  styleUrls: ['./images-tab.component.css']
})
export class ImagesTabComponent implements OnInit {
  photos1 = [
  {name: 'Ed Gomez Through the Years'}, {content: 'From the early days of the Marine Science Center to the documentation of fieldwork projects, see Dr. Eduardo Gomez, his life’s work, and the impact he has left on the institution.'},
  {gallery: [
  {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fed%20gomez%2F20140816_112825.jpg?alt=media&token=c8b36ec3-3f98-42aa-8104-40655ee26287'},
  {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fed%20gomez%2F20140816_134550.jpg?alt=media&token=6c89a1b0-8d81-4ed6-9000-a4b6eb2adb42'},
  {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fed%20gomez%2F3rd%20International%20Seagrass%20Biology%20Workshop.jpg?alt=media&token=437c6e30-859a-4d36-8831-667a10637b5f'},
  {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fed%20gomez%2F6th%20Regional%20Management%20Commitee%20Meeting.jpg?alt=media&token=3c8bd212-380e-4fd6-bf63-11723271c860'},
  {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fed%20gomez%2FAl%20and%20young%20reef%20survey%20team.jpg?alt=media&token=f79917c8-ac02-4608-99c1-0cbfac154672'},
  {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fed%20gomez%2FCRM%20Forum%20photo.JPG?alt=media&token=2d85f39b-dd70-49af-978d-06c885c9634e'},
  {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fed%20gomez%2FDSC01635.JPG?alt=media&token=d9a260bf-9f4c-4c4f-905b-f71486a66809'},
  {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fed%20gomez%2FDSC01829.JPG?alt=media&token=781f2f41-b300-4e25-bc62-e22a48bd23e3'},
  {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fed%20gomez%2FDSC04203.JPG?alt=media&token=221a213e-7b79-4e0d-9574-0fc738abc1d5'},
  {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fed%20gomez%2FDSC04212.JPG?alt=media&token=42741703-2a37-402a-9618-19cf77be32e7'},
  ]}];

  photos2 = [
    {name: 'BML Visit of Chancellor Tan & Party, Jan 2016'}, {content: 'Bolinao Marine Laboratory (BML) is the main research station of the Marine Science Institute. Last 2016, Chancellor Michael Tan of UP Diliman visited the BML to observe the facility and know more about its projects.'},
    {gallery: [
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbml%2FDSC_0008.JPG?alt=media&token=d87dcb05-7368-42bd-8c7f-c45e201ade1b'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbml%2FDSC_0132.JPG?alt=media&token=30a7ee12-481e-4992-be7d-82ee8cfc4ba2'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbml%2FDSC_0211.JPG?alt=media&token=54052264-36dd-4828-81e0-288429f38b01'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbml%2FDSC_0216.JPG?alt=media&token=2ee326cb-46c8-431c-9900-21ab949be113'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbml%2FDSC_0218.JPG?alt=media&token=a807ef15-692c-4e14-8919-5e5de32af7f6'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbml%2FDSC_0224.JPG?alt=media&token=4601df25-28c3-49b6-9eb6-ea956c7974c9'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbml%2FDSC_0237.JPG?alt=media&token=40322a0c-25b2-4da5-8c53-7f6e5926155a'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbml%2FDSC_0260.JPG?alt=media&token=e48070a9-264c-4bc2-82a5-3e04e37a1383'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbml%2FDSC_0266.JPG?alt=media&token=566018ab-f0d1-4045-8fa6-13c7de5dd46c'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbml%2FDSC_0283.JPG?alt=media&token=75cc389f-aac5-4367-a497-4265829c1a71'},
    ]}];

  photos3 = [
  {name: 'Benham Rise Oceanographic Cruise'}, {content: 'The Marine Science Institute has led expeditions to the Benham Rise, surveying the Benham Park and surrounding waters to explore possible resources.'},
  {gallery: [
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbenham%20rise%2FDSC_0014.jpg?alt=media&token=f12f03d5-3e4a-493e-8dc7-7d554d3c81f9'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbenham%20rise%2FDSC_0082.jpg?alt=media&token=abe6d823-af8f-424c-8458-2b375ac64a74'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbenham%20rise%2FDSC_0268.jpg?alt=media&token=c663eaef-b38d-4bb7-bd52-8fca1991e130'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbenham%20rise%2FDSC_0309.jpg?alt=media&token=e33f3e4c-6127-415b-90cc-f989b2a9f7f6'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbenham%20rise%2FDSC_0371.jpg?alt=media&token=da768b18-eb76-4d43-bfe9-82e8c70d5e69'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbenham%20rise%2FDSC_0377.jpg?alt=media&token=53aa706d-496e-44f1-b724-03a76e396669'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbenham%20rise%2FDSC_0405.jpg?alt=media&token=2bd77873-df62-4ab1-8c56-2cae3b45746e'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbenham%20rise%2FDSC_0416.jpg?alt=media&token=b053ed41-1fd5-4ab2-af05-41aedd0ba70f'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbenham%20rise%2FDSC_0450.jpg?alt=media&token=8fac7a58-01d4-4f3c-b625-a5d2434d499f'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fbenham%20rise%2FDSC_0466.jpg?alt=media&token=081838f1-bad6-464b-8b20-e224019db283'},
  ]}];

  photos4 = [
  {name: 'UP MPRO Visit to BML'}, {content: `The University of the Philippines – Media and Public Relations Office (UP-MPRO) information officer and photographer visited the Bolinao Marine Laboratory (BML), in Bolinao, Pangasinan last April 2018 to accomplish some articles for the UP online system publication, ‘Breakthroughs.’ Their 2-day visit to the Giant Clam Capital of the Philippines was highlighted with a tour around the Silaki Ocean Nursery, home to more than 30,000 cultured and reared giant clam individuals from the BML outdoor hatchery facility. The BML team discussed with them the mariculture, rearing, maintenance, restocking, and other extension programs of the BML Giant Clam Conservation Program, which began in the 1980s. The admin support, researchers, and lab aides, who are behind the success of BML interdisciplinary programs and research projects, were also featured as the backbone workers, given the hardwork and dedication they offer every day. This visit is part of the UP MPRO’s goal to further promote our institute’s research and extension activities in their social media platforms, with emphasis on awareness for protection, conservation, and sustainable management of our marine resources.`},
  {gallery: [
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fup%20mro%2FDSC_3799.JPG?alt=media&token=710820d3-15de-4b8c-8423-28748f64740d'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fup%20mro%2FDSC_3800.JPG?alt=media&token=af9065ca-efda-479d-8973-179ddc968603'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fup%20mro%2FDSC_3825.JPG?alt=media&token=533692fe-ba24-447c-9e54-816ba4940002'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fup%20mro%2FDSC_3827.JPG?alt=media&token=8cc9cdc7-2803-4f8a-8f9c-43a452f074e9'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fup%20mro%2FDSC_3871-2.JPG?alt=media&token=3a3da12a-d071-4ca6-99e0-4c99865838ec'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fup%20mro%2FDSC_3874.JPG?alt=media&token=ab03be61-c452-4fa7-a290-e15a388a2025'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fup%20mro%2FDSC_3877.JPG?alt=media&token=ebe615bd-d576-4148-b365-0d67ff45f92a'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fup%20mro%2FDSC_3878.JPG?alt=media&token=57dd5564-8263-4a9b-bfb1-cb64e52a941d'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fup%20mro%2FDSC_3883.JPG?alt=media&token=b291f8fa-0ff2-41a7-8b5d-e489f7855634'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fup%20mro%2FDSC_3888.JPG?alt=media&token=f39a438c-6e0c-4be8-b003-3486b023261a'},
  ]}];

  photos5 = [
  {name: 'PH Rise Oceanographic Cruise'}, {content: 'The PH Rise expedition, held on May 10, 2019, began from Manila South Harbor to the Pacific coast of Luzon. On the first leg of the expedition, surveys and samplings were conducted from the Isabela coast to Aurora. On the second leg, the group traveled to Benham Bank, the shallowest portion of the Philippine Rise. The expedition, led by the UP Marine Science Institute with collaborators from UP Cebu and Siliman University, was part of the “Securing the Eastern Corridor: Understanding the Resiliency of Reef Environments in the Philippine Rise Region" (SECURE Philippine Rise) project funded by the Department of Environment and Natural Resources.'},
  {gallery: [
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fph%20rise%2FDSC01558.jpg?alt=media&token=ccecdaed-63de-482c-895f-e39f73f99d5d'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fph%20rise%2FDSC01613.jpg?alt=media&token=88b0222c-1af7-4834-870b-d68db11d495d'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fph%20rise%2FDSC01677.jpg?alt=media&token=98fb6e7b-5aca-4e77-b846-bd2ad217df5f'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fph%20rise%2FDSC01684.jpg?alt=media&token=0e8a3ef6-da2b-48c4-ac76-4f9e8d8fa923'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fph%20rise%2FDSC01691.jpg?alt=media&token=2169dd4e-da80-4595-be26-f379b2042c6e'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fph%20rise%2FDSC01694.jpg?alt=media&token=9125c66c-aad3-40c8-ac81-88a3ef3177f3'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fph%20rise%2FDSC01708.jpg?alt=media&token=78783962-1822-48fa-a549-430ea37af3cf'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fph%20rise%2FDSC01737.jpg?alt=media&token=68b0e8a9-f9d3-476e-a07a-0feab8c09ea8'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fph%20rise%2FDSC01738.jpg?alt=media&token=b5ced25c-54a4-433d-a8c8-649250db4bdc'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fph%20rise%2FDSC01784.jpg?alt=media&token=f6993e14-95a8-4b11-870c-d5badc45bf67'},
  ]}];

  photos6 = [
  {name: 'WPS'}, {content: 'Scientists from the UP Marine Science Institute embarked on expeditions to the Kalayaan Island Group in the West Philippine Sea. RV Kasarinlan conducted oceanographic surveys while BRP Lapu-Lapu surveyed shallow marine ecosystems. This project, Predicting Responses between Ocean Transport and Ecological Connectivity of Threatened ecosystems in the West Philippine Sea (PROTECT WPS), was funded by the Department of Environment and Natural Resources (DENR)'},
  {gallery: [
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fwps%2FDSC00059.jpg?alt=media&token=d28669dd-3c1d-477a-8957-d3363a8f04c0'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fwps%2FDSC00077.jpg?alt=media&token=7050a910-bc3f-4c4c-b311-186f273a87cb'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fwps%2FDSC00083.jpg?alt=media&token=3f729a4c-9a41-4c8e-9f4b-2de86e051ceb'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fwps%2FDSC00092.jpg?alt=media&token=037d6e47-5621-4b87-8eef-6691136ea5f6'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fwps%2FDSC00098.jpg?alt=media&token=e4ce9783-dc8c-46a0-b227-a07606200461'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fwps%2FDSC00099.jpg?alt=media&token=78d286fe-c1c8-4c53-b938-2820236c2ec9'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fwps%2FDSC00100.jpg?alt=media&token=c793d201-6109-44de-9cee-6701bda03d2d'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fwps%2FDSC00101.jpg?alt=media&token=c0ded572-afe1-4f4a-be8f-c033920440a6'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fwps%2FDSC00108.jpg?alt=media&token=0bd68561-098d-4dfa-9969-8fff2f6e9cde'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery%2Fwps%2FDSC00120.jpg?alt=media&token=cec076f4-35e2-449d-99e0-a844e8f09c73'},
  ]}];

  dataGallery = [];
  upmroBool:boolean = false;
  constructor(public dialog:MatDialog, private router:Router) { }

  ngOnInit(): void {
    switch(this.router.url) {
      case '/Extension/gallery/Ed-Gomez-through-the-years':
        this.dataGallery = this.photos1;
        break;
      case '/Extension/gallery/BML-visit-of-chancellor-Tan-&-party-Jan-2016':
        this.dataGallery = this.photos2;
        break;
      case '/Extension/gallery/benham-rise-oceanographic-cruise':
        this.dataGallery = this.photos3;
        break;
      case '/Extension/gallery/UP-MPRO-visit-to-BML':
        this.dataGallery = this.photos4;
        this.upmroBool = true;
        break;
      case '/Extension/gallery/PH-rise-oceanographic-cruise':
        this.dataGallery = this.photos5;
        break;
      case '/Extension/gallery/WPS':
        this.dataGallery = this.photos6;
        break;
    }
  }

  openDialog(imgSrc, i){
    this.dialog.open(ImageDialogComponent, {
      height: '65%',
      width: 'auto',
      data: {
        imgSrc: imgSrc, i
      }
    });
  }

  galleryTab(){
    this.router.navigate(['/Extension/gallery']);
  }

}
