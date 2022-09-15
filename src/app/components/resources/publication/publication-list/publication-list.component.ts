import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {
  panelOpenState:boolean =false;
  panelOpenState2:boolean =false;
  panelOpenState3:boolean =false;
  panelOpenState4:boolean =false;
  panelOpenState5:boolean =false;
  panelOpenState6:boolean =false;

  publication2017 = [
    {content: "Abesamis R.A., Saenz-Agudelo P., Berumen M.L., Bode M., Jadloc C.R.L, Solera L.A., Villanoy C.L., Bernardo L.P.C., Alcala A.C., & Russ G.R. (2017). Reef-fish larval dispersal patterns validate no-take marine reserve network connectivity that links human communities. Coral Reefs, 36(3), 791–801."},
    {content: "Afiq-Rosli L., Taira D., Loke H.N., Toh T.C., Toh K.B., NG C.S.L., Cabaitan P.C., Chou L.M., & Song T. (2017). In situ nurseries enhance coral growth in sedimented waters. Mar. Biol. Res., 13(8), 878-887."},
    {content: "Al-Awadhi, F. H., Salvador, L.A., Law, B. K., Paul, V. J., & Luesch, H. (2017). Kempopeptin C, a novel marine-derived serine protease inhibitor targeting invasive breast cancer. Marine Drugs, 15(9), Article number 290"},
    {content: "Atienza L.W., & Conaco C. (2017). A coral's genetic response to stress. Philipp. Sci. Lett., 10(2), 109-110."},
    {content: "Atrigenio M., Aliño P.M., & Conaco C. (2017). Influence of the Blue Coral Heliopora coerulea on Scleractinian Coral Larval Recruitment. J. Mar. Bio.,l 1-5. "},
    {content: "Azanza R.V., Aliño P.M., Cabral R..B, Juinio-Meñez M.A., Pernia E.M., Mendoza R.U., & Siriban C.S. (2017). Valuing and managing the Philippines' marine resources toward a porsperous ocean-based blue economy. Public Policy, 18, 1-26."},
    {content: "Barnuevo A., Asaeda T., Sanjaya K., Kanesaka Y., Fortes M.D. (2017). Drawbacks of mangrove rehabilitation schemes: Lessons learned from the large-scale mangrove plantations. Estuar. Coast. Shelf Sci., 198, 432–437."},
    {content: "Bautista A.T., Miyake Y., Matsuzaki H., & Siringan F.P. (2017). A coral 129I/127I measurement method using ICP-MS and AMS with carrier addition. Anal., Methods, 9(35), 5181–5188."},
    {content: "Benjamin C.S., Punongbayan A.T., dela Cruz DW, Villanueva RD, Baria MVB, Yap HT. 2017. Use of Bayesian analysis with individual-based modelling to project outcomes of coral restoration. Restor Ecol 25(1):112-122."},
    {content: "Billones J.B., Carrillo M.C.O., Organo V.G., Sy J.B.A., Clavio N.A.B., Macalino S.J.Y., Emnacen I.A., Lee A.P., Ko P.L., & Concepcion G.P. (2017). In silico discovery and in vitro activity of inhibitors against Mycobacterium tuberculosis 7,8-diaminopelargonic acid synthase (Mtb BioA). Drug Des. Dev. Ther., 11, 563–574."},
    {content: "Cabaitan P.C., & Conaco C. (2017). Bringing back the giants: juvenile Tridacna gigas from natural spawning of restocked giant clams. Coral Reefs, 36(2), 519."},
    {content: "Cabaitan P.C., Malvicini C., Sabban F., & Conaco C. (2017). Versatile habitat conditioning by damselfish cultivating turf algae on giant clams. Hydrobiologia, 805(1), 89-96."},
    {content: "Dela Cruz D.W., & Harrison P.L. (2017). Enhanced larval supply and recruitment can replenish reef corals on degraded reefs. Scientific Reports, 7(1), 13985."},
    {content: "Da-Anoy J.P., Villanueva R.D., Cabaitan P.C., & Conaco C. (2017). Effects of coral extracts on survivorship, swimming behavior, and settlement of Pocillopora damicornis larvae. J. Exp. Mar. Biol. Ecol., 486, 93–97."},
    {content: "Dela Cruz D.W., & Harrison P.L. (2017). Enhanced larval supply and recruitment can replenish reef corals on degraded reefs. Scientific Reports, 7(1), 13985."},
    {content: "Distel D.L., Altamia M.A., Lin Z., Shipway R., Han A., Forteza I., Atemano R., Peñaflor-Limbaco M.G., Tebo A.G., Dechaves R., Albano J., Rosenberg G., Concepcion G.P., Schmidt E.W., & Haygood M.G. (2017). Discovery of chemoautotrophic symbiosis in the giant shipworm Kuphus polythalamia (Bivalvia: Teredinidae) extends wooden-steps theory. Proc. Natl. Acad. Sci. U.S.A., 114(18), E3652–E3658."},
    {content: "Dumilag R.V., Aguinaldo Z.A., Mintu, C.B., Quinto, M.P., Ame E.C., Andres R.C., Monotilla, W.D., Yap S.L., Cao E.P., Vital P.G., & Fontanilla I.K.C. (2017). A review of the current taxonomic status of foliose bangiales (Rhodophyta) in the Philippines. Phytotaxa, 312(1), 47–59."},
    {content: "Dumilag R.V., & Aguinaldo Z.A. (2017). Genetic differentiation and distribution of Pyropia acanthophora (Bangiales, Rhodophyta) in the Philippines. Eur J Phycol., 52(1), 1014-115."},
    {content: "Dumilag R.V., & Monotilla W.D. (2017). Molecular diversity and biogeography of Philippine foliose Bangiales (Rhodophyta). J. Appl. Phycol., 30(1), 173-186."},
    {content: "Ferrer, A.S.N.S., Elegado, A.F.K.P., Chiong, M.R., Alcober, L.K.G., Espita, D.M.L., Montano, M.N.E. (2017). High-throughput screening for quorum sensing-inhibitory compounds from selected Philippine marine algae and surface-associated marine microorganisms for potential anti-biofilm/biofouling applications. Science Diliman, 29(1):87-92."},
    {content: "Ferrera C.M., Jacinto G.S., Chen C-TA, San Diego-McGlone M.L., Datoc M.F.K.T, Lagumen M.C.T., Senal M.I.S. (2017). Carbonate parameters in high and low productivity areas of the Sulu Sea, Philippines. Mar. Chem., 195, 2-14."},
    {content: "Gajigan A.P., & Conaco C. (2017). A microRNA regulates the response of corals to thermal stress. Mol. Ecol., 26(3), 3472–3483."},
    {content: "Gajigan A.P., Diaz L.A., & Conaco C. (2017). Resilience of the prokaryotic microbial community of Acropora digitifera to elevated temperature. Microbiology Open. 00:e478."},
    {content: "Gong S-Y, Li H-C, Siringan F.P., Zhao M., Kang S-C, & Chou C-Y. (2017). AMS Carbon-14 dating of microbial carbonates in Holocene coral reefs, Western Luzon, Philippines. Quat. Int., 447, 27–34."},
    {content: "Gorospe J.C., Altamirano J.P., & Juinio-Meñez M.A. (2017). Viability of a bottom-set tray ocean nursery system for Holothuria scabra Jaeger 1833. Aquacult. Res., 48(12), 5984–5992."},
    {content: "Hirabayashi S., Yokoyama Y., Suzuki A., Miyairi Y., Aze T., Siringan F.P., Maeda Y. (2017). Radiocarbon variability recorded in coral skeletons from the northwest of Luzon Island, Philippines. Geosci. Lett., 4(15)."},
    {content: "Huang T.H., Chen C.T.A., Tseng H.C., Lou J.Y., Wang S.L., Yang L., Kandasamy S., Gao X., Wang J.T., Aldrian E., Jacinto G.S., Anshari G.Z., Sompongchaiyakul P., & Wang B.J. (2017). Riverine carbon fluxes to the South China Sea. J. Geophys. Res. Biogeosci., 122(5), 1239–1259."},
    {content: "Jago-on K.A.B., Siringan F.P., Balangue-Tarriela R., Taniguchi M., Reyes Y.K., Lloren R., Peña M.A., & Bagalihog E. (2017). Hot spring resort development in Laguna Province, Philippines: Challenges in water use regulation. J. Hydrol. Reg. Stud., 11, 96–106."},
    {content: "Jamodiong E.A., Maboloc E.A., Leriorato J.C., Tañedo M.C.S., Diaz L.A., Tabalanza T.D., Cabaitan P.C., & Villanueva R.D. (2017). Coral spawning and spawn-slick observation in the Philippines. Mar. Biodiv., 1–6."},
    {content: "Jimenez, E.C., Cruz, L.J. (2017) Conotoxins as tools in research on nicotinic receptors. Toxins Drug Discov, 1:189–204"},
    {content: "Juinio-Meñez M.A., Tech E.D., Ticao I.P., Gorospe J.R., Edullantes C.M.A., & Rioja R.A.V. (2017). Adaptive and integrated culture production systems for the tropical sea cucumber Holothuriascabra. Fish. Res., 186(2), 502-513. DOI: 10.1016/j.fishres.2016.07.017."},
    {content: "Labao A.B., Naval P.C. J., Yap D.L.T., & Yap H.T. (2017). Influencing rural livelihood switching through equipment assets for agroecosystems to alleviate pressure on resources. Agric. Ecosyst. Environ., 248, 96–104."},
    {content: "Lagan E., & Trono G.C. Jr. (2017). Notes on Ceramium Roth and Gayliella TO Cho, LJ McIvor et SM Boo (Rhodophyta, Ceramiaceae) from the Philippines. Philippine Science Letters, 10(1), 38–49.s"},
    {content: "Li Q., Barghi N., Lu A., Fedosov A.E., Bandyopadhyay P.K., Lluisma A.O., Concepcion G.P., Yandell M., Olivera B.M., & Safavi-Hemami H. (2017). Divergence of the venom exogene repertoire in two sister species of Turriconus. Genome Biol. Evol., 9(9), 2211–2225. "},
    {content: "Lin Z., Smith M.D., Concepcion G.P., Haygood M.G., Olivera, B.M., Light A., & Schmidt E.W. (2017). Modulating the serotonin receptor spectrum of Pulicatin natural products. J. Nat. Prod., 80(8), 2360–2370."},
    {content: "Luzon K.S., Lin M-F, Lagman, M.C., AA, Licuanan W.R.Y., & Chen C.A. (2017). Resurrecting a subgenus to genus: Molecular phylogeny of Euphyllia and Fimbriaphyllia (order Scleractinia; family Euphyllidae; clade V). Peerj, 2017(12), Article number e4074."},
    {content: "Maboloc E.A., & Villanueva R.D. (2017). Effects of salinity variations on the rates of photosynthesis and respiration of the juvenile giant clam (Tridacna gigas, Bivalvia, Cardiidae). Mar. Freshw. Behav. Physiol., 50(4), 273–284. "},
    {content: "Mizuno K., Asada A., Matsumoto Y., Sugimoto K, Fujii T., Yamamuro M., Fortes M.D., Sarceda M., & Jimenez L.A. (2017). A simple and efficient method for making a high-resolution seagrass map and quantification of dugong feeding trail distribution: A field test at the Mayo Bay, Philippines. Ecol. Inform, 38, 89–94."},
    {content: "Morimoto N., Umezawa Y., San Diego-McGlone M.L., Watanabe A., Siringan F.P., Tanaka Y., Regino G.L., & Miyajima T. (2017). Spatial dietary shift in bivalves from embayment with river discharge and mariculture activities to outer seagrass beds in northwestern Philippines. ‎Mar. Biol., 164(4), 1–16."},
    {content: "Nacorda H., Dizon R., Meñez L., Nañola C.L., Roa-Chio P.L., De Jesus D.O., Hernandez H.B., Quimpo F.T.R., Licuanan W.R.Y., Aliño P.M., & Villanoy C.L. (2017). Beneath 50 m of NW Pacific Water: Coral Reefs on the Benham Bank Seamount off the Philippine Sea. Journal of Envirnomental Science and Management, 20(2), 110–121."},
    {content: "Naval P.C.J., & David L.T. (2017). FishDrop: Estimation of reef fish population density and biomass using stereo cameras. In Techno-Ocean 2016: Return to the Oceans, 527–531."},
    {content: "Neo, M. L., Wabnitz, C. C. C., Braley, R. D., Heslinga, G. A., Fauvelot, C., Van Wynsberge, S., Andrefouet, S., Waters, C., Shau-Hwai, T.A., Gomez, E.D., Costello, M.J., & Todd, P. A. (2017). Giant clams (bivalvia: Cardiidae: Tridacninae): A comprehensive update of species and their distribution, current threats and conservation status. Oceanography and Marine Biology: An Annual Review, 55:87-154."},
    {content: "Noblezada M., Miyamoto H., Campos W.L., Yusoff F.M., Nishida S. (2017). Phylogeography of the planktonic shrimp Lucifer hanseni Nobili 1905 in the Indo-Malayan Archipelago. J. Mar. Biol. Assoc. U.K., 97(1), 129-140."},
    {content: "Obena R.P., Arco S. D.R., & Azanza R.V. (2017). Pyrodinium bahamense var. compressum Bohm survival in high and low cadmium levels. Philippine Journal of Science, 146(3), 287–292."},
    {content: "Omaga C.A., Carpio L.D., Imperial J.S., Daly N.L., Gajewiak J., Flores M.S., Espino S.S., Christensen S., Filchakova O.M., López-Vera E., Raghuraman S., Olivera B.M., & Concepcion G.P. (2017). Structure and Biological Activity of a Turripeptide from Unedo gemmula bisaya Venom. Biochemistry, 56(45), 6051–6060."},
    {content: "Orosco F.L., & Lluisma A.O. (2017). Prevalence, diversity and co-occurrence of the white spot syndrome virus, monodon baculovirus and Penaeus stylirostris densovirus in wild populations of Penaeus monodon in the Philippines. Dis Aquat Organ, 125(3), 199–206."},
    {content: "Orosco F.L., & Lluisma A.O. (2017). Variation in virome diversity in wild populations of Penaeus monodon (Fabricius 1798) with emphasis on pathogenic viruses. VirusDis., 28(3), 262-271"},
    {content: "Poquita-Du R.C., Toh K.B., Toh T.C., Ng C.S.L., Taira D., Loke H.X., Afiq-Rosli L., Chou L.M., Song T., & Cabaitan P. (2017). Effects of nursery table slope orientation on coral survival and growth. Mar. Biol. Res., 13(9), 975-982."},
    {content: "Palomar-Abesamis N., Abesamis R.A., & Juinio-Menez M.A. (2017). Distribution and microhabitat associations of the juveniles of a high-value sea cucumber, Stichopus cf. horrens, in northern Philippines. M. Aquat. Ecol., 51(1), 17-31."},
    {content: "Palomar-Abesamis N., & Juinio-Meñez M.A. (2017). Effects of light and microhabitat on activity pattern and behaviour of wild and hatchery-reared juveniles of Stichopus cf. horrens. J. Mar. Biol. Assoc. U. K., 1–11."},
    {content: "Quiros T.E.A.L., Croll D., Tershy B., Fortes M.D., & Raimondi P. (2017). Land use is a better predictor of tropical seagrass condition than marine protection. Biol. Conserv., 209, 454–463."},
    {content: "Ramos R.D., Goodkin N.F., Siringan F.P., & Hughen K.A. (2017). Dipl"},
    {content: "oastrea heliopora Sr/Ca and δ18O records from northeast Luzon, Philippines: an assessment of interspecies coral proxy calibrations and climate controls of sea surface temperature and salinity. Paleoceanography, 32(4), 424–438."},
    {content: "Roa M.B., Liles V.R., Torres B.C., Klinzing D.C., Lagamayo E., Navoa-Ng J., & Daroy M.L.G. (2017). Draft Whole-Genome Assemblies of Drug-Resistant Clinical Isolates of Klebsiella pneumoniae from the Philippines. Genome Announc, 5(28), e00475-17."},
    {content: "Roleda M., Rodrigora-Calala L., Hinaloc L., & Ganzon-Fortes E. (2017). Red, blue and green, and shades in between: diversity and plasticity in colour expression in the life cycle of Kappaphycus. Phycologia, 56(4 (Supplement S)), 161."},
    {content: "Roleda M., Jaraula C., Rodolfo R., San Diego-McGlone M.L., Cardenas M., Siringan F.P. (2017). The tough and tenacious: thriving in natural analogues of warmer and acidic tropical marine waters. Phycologia, 56(4 (Supplement S)), 160–161."},
    {content: "Saito N., Hirade H., Sirinmangkalakitti N., Concepcion G.P., Hiramatsu A., Kubota M., Fujino A., & Suwanborinux K. (2017). Chemistry of renieramycins. 16. Structure of 7-demethylrenieramycin o (= 14α-hydroxyrenieramycin s) from blue sponge, Xestospongia sp. Heterocycles, 95(2), 748–752."},
    {content: "Sanchez-Escalona K.P., Aliño P.M., & Juinio-Meñez M. (2017). Evidence of shape Sexual dimorphism in Strombus luhuanus linnaeus 1758 (Gastropoda: Strombidae). J. Conchol., 42(6), 395–400."},
    {content: "Sharma S., Nadaoka K., Nakaoka M., Uy W.H., MacKenzie R.A., Friess D.A., & Fortes M.D. (2017). Growth performance and structure of a mangrove afforestation project on a former seagrass bed, Mindanao Island, Philippines. Hydrobiologia, 803(1), 359-371"},
    {content: "Soria J.L.A., Switzer A.D., Pilarczyk J.E., Tang H., Weiss, R., Siringan F.P., Manglicmot M., Gallentes A., & Koh T.W.L. (2017). Surf beat-induced overwash during Typhoon Haiyan deposited two distinct sediment assemblages on the carbonate coast of Hernani, Samar, central Philippines. Mar. Geol., 396, 215-230."},
    {content: "Soria J.L.A., Switzer A.D., Pilarczyk J.E., Siringan F.P., Khan N.S., & Fritz H.M. (2017). Typhoon Haiyan overwash sediments from Leyte Gulf coastlines show local spatial variations with hybrid storm and tsunami signatures. Sediment. Geol., 358, 121–138."},
    {content: "Subong B.J.J., Benico G.A., Sulit A.K.L., Mendoza C.O., Cruz L.J., Azanza R.V., & Jimenez E.C. (2017). Toxicity and protein expression of alexandrium species collected in the Philippine waters. Philippine Journal of Science, 146(4), 425–436."},
    {content: "Taira D., Toh T.C., Ng C.S.L., Loke H.X., Afiq-Rosli L., Cabaitan P.C., Toh K.B., Poquita-Du R.C., Chou L.M., & Song T. (2017). Relocating bleached Platygyra sinensis facilitates recovery from thermal stress during a minor bleaching event. Mar. Freshw. Behav. Phy., 50(5-6), 375-385."},
    {content: "Toh T.C., Ng C.S.L., Loke H.X., Taira D., Toh K.B., Afiq-Rosli L., Poquita R.C., Cabaitan P.C., Sam S.Q., Kikuzuwa Y.P., Chou L.M., & Song T. (2017). A cost-effective approach to enhance scleractinian diversity on artificial shorelines. Ecol. Eng., 99, 349–357."},
    {content: "Torres, J.P., Tianero M.D., Robes J.D., Kwan J.C., Biggs J.S., Concepcion G.P., Olivera B.B., Haygood M.G., & Schmidta E.W. (2017). Stenotrophomonas-like bacteria are widespread symbionts in cone snail venom ducts. Appl. Environ. Microbiol., 83(23), Article number e01418-17."},
    {content: "Zamora P.B., Cardenas M.B., Lloren R., & Siringan F.P. (2017). Seawater-groundwater mixing in and fluxes from coastal sediment overlying discrete fresh seepage zones: A modeling study. J. Geophys. Res. Oceans., 122(8), 6565-6582."},
  ];

  publication2018 = [
    {content: "Abesamis R.A., Langlois T., Birt M., Thillainath E., Bucol A.A., Arceo H.O., & Russ G.R. (2018). Benthic habitat and fish assemblage structure from shallow to mesophotic depths in a storm-impacted marine protected area. Coral Reefs, 37(1), 81-97."},
    {content: "Austero, N.M., Azanza, R.V. (2018). Short-term assessment of phytoplankton composition and abundance in Cebu and Subic Bay Ports, Philippines. Science Diliman, 30(2):32-53."},
    {content: "Azanza R.V., Austero J.C.R., Dungca F., Caspe J.O., & Khandeparker L. (2018). Phytoplankton and Bacterial Communities in South Harbour, Manila Bay, Philippines. ASEAN J. Sci. Tech. Dev., 35(1-2), 107-113."},
    {content: "Azanza R.V., Brosnahan M.L., Anderson D.M., Hense I., Montresor M. (2018) The Role of Life Cycle Characteristics in Harmful Algal Bloom Dynamics. In: Glibert P., Berdalet E., Burford M., Pitcher G., Zhou M. (eds) Global Ecology and Oceanography of Harmful Algal Blooms. Ecological Studies (Analysis and Synthesis), vol 232., 133-161. Springer, Cham. (Book Chapter)"},
    {content: "Azcuna M., Tun J.O., Yap H.T., & Concepcion G.P. (2018). Callyspongia samarensis (Porifera) extracts exhibit anticancer activity and induce bleaching in Porites cylindrica (Scleractinia). Chem. Ecol., 34(5), 397–411."},
    {content: "Bangi H.G.P., & Junio-Meñez M.A. (2018). Resource allocation trade-offs in the sea urchin Tripneustes gratilla under relative storminess and wave exposure. Mar. Ecol. Prog. Ser. DOI: https://doi.org/10.3354/meps12797"},
    {content: "Baquiran, J. I. P., & Conaco, C. (2018). Sponge-microbe partnerships are stable under eutrophication pressure from mariculture. Mar. Pollut. Bull., 136, 125–134."},
    {content: "Belleza O.J.V., Tun J.O., Concepcion G.P., & Villaraza A.J.L. (2018). On the inhibition of capsaicin response in dorsal root ganglion neurons by nobilamide B and analogues: a structure–activity relationship study. Med. Chem. Commun., 9, 1673-1678."},
    {content: "Boncan D.A.T., David A.M., & Lluisma A. (2018). A CAZyme-rich genome of a taxonomically novel rhodophyte-associated carrageenolytic marine bacterium. Mar. Biotechnol.,  1–21. DOI: 10.1007/s10126-018-9840-6."},
    {content: "Breitburg D., Levin L.A., Oschlies A., Grégoire M., Chavez F.P., Conley D.J., Garçon V., Gilbert D., Gutiérrez D., Isensee K., Jacinto G.S., Limburg K.E., Montes I., Naqvi S.W.A., Pitcher G.C., Rabalais N.N., Roman M.R., Rose K.A., Seibel B.A., Telszewski M., Yasuhara M., & Zhang J. (2018). Declining oxygen in the global ocean and coastal waters. Science, 359(6371), 7240."},
    {content: "Cabaitan P.C., Malvicini C., Sabban F., & Conaco C. (2018). Versatile habitat conditioning by damselfish cultivating turf algae on giant clams. Hydrobiologia, 805(1), 89–96."},
    {content: "Cai W., Salvador-Reyes L.A., Zhang W., Chen Q.Y., Matthew S., Ratnayake R., Seo S.J., Dolles S., Gibson D.J., Paul V.J., & Luesch H. (2018). Apratyramide, a marine-derived peptidic stimulator of VEGF-A and other growth factors with potential application in wound healing. ACS Chem. Biol., 13(1), 91–99."},
    {content: "Dumilag R.V., & Monotilla W.D. (2018). Molecular diversity and biogeography of Philippine foliose Bangiales (Rhodophyta). J. Appl. Phycol., 30(1), 173–186. "},
    {content: "Feliciano, G.N.R., Mostrales, T.P.I., Acosta, A.K.M., Luzon, K., Bangsal, J.C.A., & Licuanan, W.Y. (2018). Is gardening corals of opportunity the appropriate response to reverse Philippine reef decline? Restoration Ecology, 26(6):1091-1097."},
    {content: "Fernández P.A., Roleda M.Y., Rautenberger R., & Hurd C.L. (2018). Carbonic anhydrase activity in seaweeds: overview and recommendations for measuring activity with an electrometric method, using Macrocystis pyrifera as a model species. Mar. Biol. 165(5), 88."},
    {content: "Ferrera C., Jacinto G.S., Chen, C.T.A., & Lui H.K. (2018). Organic Carbon Concentrations in High- and Low-Productivity Areas of the Sulu Sea. Sustainability, 10(6), 1867."},
    {content: "Fortes M.D., Ooi J.L., Tan Y.M., Prathep A., Bujang J.S., & Yaakub S.M. (2018). Seagrass in Southeast Asia: s review of status and knowledge gaps, and a road map for conservation. Botanica Marina, 61(3), 269–288."},
    {content: "Fortes M.D. (2018). Seagrass ecosystem conservation in Southeast Asia needs to link science to policy and practice. Ocean Coast Manag., 159, 51–56."},
    {content: "Fortes M.D., Ooi J.L., Tan Y.M., Prathep A., Bujang J.S., & Yaakub S.M. (2018). Seagrass in Southeast Asia: a review of status and knowledge gaps, and a road map for conservation. Botanica Marina, 61(3), 269–288."},
    {content: "Gajigan A.P., Yñiguez A.T., Villanoy C.L., San M.L., Jacinto, G.S., & Conaco C. (2018). Diversity and community structure of marine microbes around the Benham Rise underwater plateau, Northeastern Philippines (#22613) Structure and. Peer J., 1–17."},
    {content: "Gomez E.J., Jamodiong E.A., Maboloc E.A., Ligson C.A., Tabalanza T.D., Villanueva R.D., & Cabaitan P.C. (2018). Gametogenesis and reproductive pattern of the reef-building coral Acropora millepora in northwestern Philippines. Invertebr. Reprod. Dev., 1–7"},
    {content: "Guzman C., Shinzato C., Lu T.M., & Conaco C. (2018). Transcriptome analysis of the reef-building octocoral, Heliopora coerulea. Sci. Rep., 1–11."},
    {content: "Jago-on, K. A. B., Din, M. J. M., Bellen, C. S., & Siringan, F. P. (2018). Social Acceptability of Micro Hydropower in Laguna, Philippines. The Water-Energy-Food Nexus, 227–244. (Book Chapter)"},
    {content: "Jamodiong, E.A., Maboloc, E.A., Leriorato, J.C., Tañedo, M.C.S., Diaz, L.A., Tabalanza, T.D., Cabaitan, P.C., & Villanueva, R. D. (2017). Coral spawning and spawn-slick observation in the Philippines. Marine Biodiversity, 48:2187–2192."},
    {content: "Jamodiong E., Maboloc E., Villanueva R., & Cabaitan P. (2018). Gametogenesis and Inter-annual Variability in the Spawning Pattern of Acropora hyacinthus in Northwestern Philippines. Zool. Stud., 57, 46 2018."},
    {content: "Khandepaker L., Desai D.V., Anil D.V., Sawant S.S., Venkat K., Mapari K., Jolkifli Z., Karim N.A., Thoha H., Hadiyanto H., Dalasane S., Chounlamountry K., Khaing M.M.,  Dungca J.C.R., Azanza R.V., Lim C.S., Tan K.S., Kajonwattanakul S., Phuttapreecha R., & Lei H.M. (2018). Application of Fluorescence in situ hybridization-Flow cytometry (FISH-FCM) technique to detect and quantify Vibrio cholera populations from different geographic regions. ASEAN J. Sci. Tech. Dev., 35(1-2), 159-165. "},
    {content: "Leal P.P., Hurd C.L., Sander S.G., Armstrong E., Fernández P.A., Suhrhoff T.J., & Roleda M.Y. (2018). Copper pollution exacerbates the effects of ocean acidification and warming on kelp microscopic early life stages. Sci. Rep., 8(1), 14763."},
    {content: "Lim C.S., Jolkifli Z.J., Jair A., Karim N., Wahab R.A., Desai D.V., Krishnamurthy V., Khandeparker L., Mapari K., Sawant S., Thoha S., Hadiyanto H., Dirhamsyah D., Dalasane S., Chounlamountry K., Hing L.S., Yusof S.H., Khaing M.M., Nacorda H.M.E., Austero N., Azanza R.V., Pagdilao C., Kajonwattanakul S., Puttapreecha R., Poovachiranon S., Le H.M., Tran T.T., Nguyen V.C., Tan K.S., & Anil A.C. (2018). An inter-site study of biofouling recruitment on static immersion panels in major ports of South East Asia and India. ASEAN J. Sci. Tech. Dev., 35(1-2), 167-176."},
    {content: "Metillo, E.B., Campos, W.L., Villanoy, C.L., Hayashizaki, K., Tsunoda, T., & Nishida, S. (2018). Ontogenetic feeding shift and size-based zooplanktivory in Sardinella lemuru (Pisces, Clupeidae) during an upwelling in southeastern Sulu Sea, The Philippines. Fisheries Management and Ecology, 25(6):441–455."},
    {content: "Nacorda H.M.E., Austero N.M., Pagdilao C.R., Tan K.S., & Azanza R.V. (2018). Marine Biofouling Communities of Manila South Harbor, Philippines. ASEAN J. Sci. Tech. Dev., 35(1-2), 115-123"},
    {content: "Narciso, J.T., Nieva, J.A., Alcaraz, A.J.G., Anino, E.G.M., Gomez, N.C.F., Montaño, M.N.E. (2018). Fucoidan content in Philippine brown seaweeds. Science Diliman, 30(1): 45-59."},
    {content: "Orosco F.L., & Lluisma A.O. (2018). Genetic diversity of Penaeus monodon (Fabricius, 1798) in the Philippines as revealed by mitochondrial Cytochrome Oxidase I (COI). Philipp. Agric. Sci., 101(1), 84–92."},
    {content: "Palomar-Abesamis N., Juinio-Meñez M.A., & Slater M.J. (2018) Effects of light and microhabitat on activity pattern and behaviour of wild and hatchery-reared juveniles of Stichopus cf. horrens. J. Mar. Biol. Assoc. U.K., 98(7), 1703-1713."},
    {content: "Palomar-Abesamis N., Juinio-Meñez M.A., & Slater M.J. (2018). Macrophyte detritus as nursery diets for juvenile sea cucumber Stichopus cf. horrens. Aquac. Res., 3614–3623."},
    {content: "Quimpo T.J.R., Cabaitan P.C., Olavides R.D.D., Dumalagan E.E.J., Munar J., & Siringan F.P. (2018). Preliminary observations of macrobenthic invertebrates and megafauna communities in the upper mesophotic coral ecosystems in apo reef natural park, Philippines. Raffles Bull. Zool., 66, 1-11."},
    {content: "Racasa, E., Lloren, R., Manglicmot, M., Jago-On, K. A. B., Balangue, M. I. R. D., Taniguchi, M., & Siringan, F. P. (2018). Lacustrine groundwater discharge in southern Laguna de Bay, Philippines. The Water-Energy-Food Nexus, 87–100. (Book Chapter)"},
    {content: "Ravago-Gotanco R., De la Cruz T.L., Pante J.M., & Borsa P. (2018). Cryptic genetic diversity in the mottled rabbitfish Siganus fuscescens with mitochondrial introgression at a contact zone in the South China Sea. PLoS ONE, 13(2), 1–27. "},
    {content: "Ravago-Gotanco, R., De la Cruz T.L., Pante M.J., & Borsa P. (2018). Cryptic genetic diversity in the mottled rabbitfish Siganus fuscescens with mitochondrial introgression at a contact zone in the South China Sea.  PLoS ONE, 13(2), e0193220."},
    {content: "Ravelo S.F., & Conaco C. (2018). Comparison of the response of in hospite and ex hospite Symbiodinium to elevated temperature. Mar. Freshw. Behav. Physiol., 51(2), 93–108."},
    {content: "Roa, M. B., Tablizo, F. A., Morado, E. K. D., Cunanan, L. F., Uy, I. D. C., Ng, K. C. S., Manalastas-Cantos, K.G., Reyes, J.M., Ganchua, S.K.C., Ang, C.F., Kato-Maeda, M., Cattamanchi, A., Karaoz, U., Destura, R.V., & Lluisma, A. O. (2018). Whole genome sequencing and single nucleotide polymorphisms in multi-drug resistant clinical isolates of Mycobacterium tuberculosis from the Philippines. Journal of Global Antimicrobial Resistance, 15:239-245."},
    {content: "Robles L.E., Cabaitan P., & Aurellado M. (2018). Effects of competition on the territorial behaviour of a farmer damselfish, Plectroglyphidodon lacrymatus (Perciformes: Pomacentridae). Fish Biology. DOI: 10.1111/jfb.13841"},
    {content: "Rodrigo S.M.T., Villanoy C.L., Briones J.C., Bilgera, P.H.T., Cabrera O.C., & Narisma G.T.T. (2018). The mapping of storm surge-prone areas and characterizing surge-producing cyclones in Leyte Gulf, Philippines. Natural Hazards, 92(3), 1305-1320."},
    {content: "Roleda M.Y., Marfaing H., Desnica N., Jónsdóttir R., Skjermo J., Rebours C., & Nitschke U. (2018). Variations in polyphenol and heavy metal contents of wild-harvested and cultivated seaweed bulk biomass: health risk assessment and implication for food applications. Food Control, 95, 121–134."},
    {content: "Santianez W.J.E., Lee K.M., Uwai S., Kurihara A., Geraldino P.J.L., Ganzon-Fortes E.T., & Boo K. (2018). Untangling nets: elucidating the diversity and phylogeny of the clathrate brown algal genus Hydroclathrus, with the description of a new genus Tronoella (Scytosiphonaceae, Phaeophyceae). Phycologia, 57(1), 61–78."},
    {content: "Santiañez W.J.E., & Wynne M.J. (2018). Evidence for the treatment of Talarodictyon tilesii as an older taxonomic synonym of Hydroclathrus stephanosorus (Scytosiphonaceae, Phaeophyceae). Phycological Res., 67(1), 82-85."},
    {content: "Sinsona M.J., & Juinio-Meñez M.A. (2018). Effects of sediment enrichment with macroalgae, Sargassum spp., on the behavior, growth, and survival of juvenile sandfish, Holothuria scabra. Aquaculture Reports, 12, 56–63."},
    {content: "Siringan F.P., Racasa E.D.R., David C.P.C., & Saban R.C. (2018). Increase in dissolved silica of rivers due to a volcanic eruption in an Estuarine Bay (Sorsogon Bay, Philippines). Estuaries Coast, 41(8), 2277-2288."},
    {content: "Shipway J.R., Altamia M.A., Haga T., Velásquez M., Albano J., Dechavez R., Concepcion G.P., Haygood M.G., & Distel D.L. (2018). Observations on the life history and geographic range of the Giant Chemosymbiotic Shipworm Kuphus polythalamius (Bivalvia: Teredinidae). Biol. Bull., 235(3). DOI: 10.1086/700278"},
    {content: "Soria J.L.A., Switzer A.D., Pilarczyk J.E., Tang H., Weiss R., Siringan F., Manglimot M., Gallentes Lau A.Y.A., Cheong A.Y.L, & Koh T.W.L. (2018). Surf beat-induced overwash during Typhoon Haiyan deposited two distinct sediment assemblages on the carbonate coast of Hernani, Samar, Central Philippines. Mar. Geol., 396, 215–230."},
    {content: "Stiefel, K.M., Barrett, G.A. (2018) Sea Urchins as an Inspiration for Robotic Designs. Journal of Marine Science and Engineering, 6(4):112."},
    {content: "Tamayo, N.C.A., Anticamara, J.A., & Acosta-Michlik, L. (2018). National Estimates of Values of Philippine Reefs’ Ecosystem Services. Ecological Economics, 146:633–644."},
    {content: "Torres A.F., & Ravago-Gotanco R. (2018). Rarity of the “common” coral Pocillopora damicornis in the Western Philippine archipelago. Coral Reefs, 37, 1209–1216."},
    {content: "Vacarizas J., Benico G., Austero N., & Azanza R. (2018).  Taxonomy and toxin production of Gambierdiscus carpenteri (Dinophyceae) in a tropical marine ecosystem: the first record from the Philippines. Mar. Pollut. Bull., 137, 430-443."},
    {content: "Yñiguez A.T., Maister J., Villanoy C.L., Deauna J.D., Peñaflor E., Almo A., David L.T., Benico G.A., Hibay E., Mora I., Arcamo S., Relox J., & Azanza R.V. (2018). Insights into the dynamics of harmful algal blooms in a tropical estuary through an integrated hydrodynamic-Pyrodinium-shellfish model. Harmful Algae, 80, 1-14."},
  ];

  publication2019 = [
    {content: "Albelda, R.L., D.J.E. Purganan, N.C.F. Gomez, B.C.dV. Narvarte, P.C. Calalang, T.G.T. Genovia, E.G.M. Gernato, K.G.V. Bondoc, M.L. San Diego-McGlone, D.F.L. Onda.  2019.  Summer phytoplankton community structure and distribution in a mariculture-affected coastal environment. Philippine Science Letters 12(2):157-166."},
    {content: "Altamia M.A., Shipway J.R., Concepcion G.P., Haygood M.G., & Distel D.L. (2019). Thiosocius teredinicola gen. nov., sp. nov., a sulfur-oxidizing chemolithoautotrophic endosymbiont cultivated from the gills of the giant shipworm, Kuphus polythalamius. Int. J. Syst. Evol. Microbiol., 69(3), 638-644."},
    {content: "Amedo-Repollo C.L., Flores-Vidal X., Chavanne C., Villanoy C., & Flament P. (2019). Low-frequency surface currents and generation of Island Lee Eddy in Panay Island, Philippines. J. Phys. Oceanogr., 49(3), 765-787s"},
    {content: "Andres J.K.A., Yñiguez A.T., Maister J.M., Turner A.D., Olanao D.E.B., Mendoza J., Salvador-Reyes L., & Azanza R.V. Paralytic shellfish toxin uptake, assimilation, depuration, and transformation in the Southeast Asian Green-Lipped Mussel (Perna viridis). Toxins, 11(8), 1-13."},
    {content: "Austero, N.M., Sawant, S.S., Azanza, R.V.(2019). Viability of Phytoplankton from Ballast Waters of International Vessels Berthing at Ports of Cebu and Subic Bay, Philippines. Science Diliman, 31(1):69-78."},
    {content: "Bangi H.G.P., & Juinio-Meñez M.A. (2019). Resource allocation trade-offs in the sea urchin Tripneustes gratilla under relative storminess and wave exposure. Mar. Ecol. Prog. Ser., 608, 165-182."},
    {content: "Baria-Rodriguez, M.V., Dela Cruz, D.W., Dizon R.M., Yap H.T., & Villanueva R.D. (2019). Performance and cost‐effectiveness of sexually produced Acropora granulosa juveniles compared with asexually generated coral fragments in restoring degraded reef areas. Aquat. Conserv., 29(6), 891-900."},
    {content: "Barett, G.A., Revell, D., Harding, L., Mills, I., Jorcin, A., & Stiefel, K.M. (2019). Tool use by four species of Indo-Pacific sea urchins. J. Mar. Sci. Eng, 69(7):1-12."},
    {content: "Benico G.A., Takahashi K., Lum W.M., Yñiguez A.T., Azanza R.V., Leong S.C.Y., Lim P.T., & Iwataki M. (2019). First report of Biecheleriopsis adriatica in Bolinao, Northwestern Philippines and its wide distribution in Southeast Asia and adjacent waters. Phil. J. of Nat. Sci., 24, 34-41."},
    {content: "Benjamin C.S., Cadeliña P.L.P., Yñiguez A.T., & Villanoy C.L. (2019). Development and application of a low-cost rapid assessment system for coastal benthic habitats. Environ. Monit. Assess., 191, 633."},
    {content: "Bischof, K., Buschbaum, C., Fredriksen, S., Gordillo, F.J.L., Heinrich, S., Jiménez, C., Lütz, C., Molis, M., Roleda, M.Y., Schwanitz, M., Wiencke, C. (2019) Kelps and environmental changes in Kongsfjorden: stress perception and responses. In: The Ecosystem of Kongsfjorden, Svalbard. (eds H Hop & C Wiencke) Advances in Polar Ecology, vol 2. pp 373-422. Springer, Cham"},
    {content: "Bischof, K., Convey, P., Duarte, P., Gattuso, J.-P., Granberg, M., Hop, H., Hoppe, C., Jiménez, C., Lisitsyn, L., Martinez, B., Roleda, M.Y., Thor, P., Wiktor, J., Gabrielsen, G.W. (2019) Kongsfjorden as harbinger of the future Arctic: knows, unknowns and research priorities. In: The Ecosystem of Kongsfjorden, Svalbard. (eds H Hop & C Wiencke) Advances in Polar Ecology, vol 2. pp 537-562. Springer, Cham"},
    {content: "Cabaitan, P.C. Quimpo, T.J.R., Dumalagan, E.E. Jr., Munar, J., Calleja, M.A.C., Olavides, R.D.D., Go, K., Albelda, R., Cabactulan, D., Tinacba, E.J.C., Doctor, M.A.A., Villanoy, C.L., Siringan, F.P. (2019) The Philippines. In: Loya Y., Puglise K., Bridge T. (eds) Mesophotic Coral Ecosystems. Coral Reefs of the World, vol 12. Springer, Cham."},
    {content: "Cantarero D.L.M., Blanco A., Cardenas B.M., Nadaoka K., & Siringan F.P. (2019). Offshore submarine groundwater discharge at a coral reef front controlled by faults.  Geochemistry, Geophysics, Geosystems, 20(7), 3170-3185"},
    {content: "Da-Anoy J.P., Cabaitan P.C., & Conaco C. (2019). Species variability in the response to elevated temperature of select corals in north-western Philippines. J Mar Biol Assoc U.K, 99(6), 1273-1279."},
    {content: "de la Moneda, A., Carro, M.D., Weisbjerg, M.R., Roleda, M.Y., Lind, V., Novoa-Garrido, M., Molina-Alcaide, E. (2019). Variability and potential of seaweeds as ingredients of ruminant diets: an in vitro study. Animals, 9(10):851."},
    {content: "Duffy, J.E., Benedetti-Cecchi, L., Trinanes, J., Muller-Karger, F.E., Ambo-Rappe, R., Boström, C., Buschmann, A.H., Byrnes, J., Coles, R.G., Creed, J., Cullen-Unsworth, L.C., Diaz-Pulido, G., Duarte, C.M., Edgar, G.J., Fortes, M.D., Goni, G., Hu, C., Huang, X., Hurd, C.L., Johnson, C., Konar, B., Krause-Jensen, D., Krumhansl, K., Macreadie, P., Marsh, H., McKenzie, L.J., Mieszkowska, N., Miloslavich, P., Montes, E., Nakaoka, M., Norderhaug, K.M., Norlund, L.M., Orth, R.J., Prathep, A., Putman, N.F., Samper-Villarreal, J., Serrao, E.A., Short, F., Pinto, I.S., Steinberg, P., Stuart-Smith, R., Unsworth, R.K.F., van Keulen, M., van Tussenbroek, B.I., Wang, M., Waycott, M., Weatherdon, L.V., Wernberg, T. and Yaakub, S.M. (2019) Toward a coordinated global observing system for seagrasses and marine macroalgae. Front. Mar. Sci. 6:317."},
    {content: "Dumalan R.J.P., Bondoc K.G.V., & Juinio-Meñez M.A. (2019). Grow-out culture trial of sandfish Holothuria scabra in pens near a mariculture-impacted area. Aquaculture, 507, 481-492."},
    {content: "Dumalagan E.E. Jr., Cabaitan P.C., Bridge T.CL., Go K.T., Quimpo T.J.R., Olavides R.D.D., Munar J.C., Villanoy C.L., & Siringan F.P. (2019). Spatial variability in benthic assemblage composition in shallow and upper mesophotic coral ecosystems in the Philippines. Marine Environmental Research, 150, 104772."},
    {content: "Dumilag R.V., Aguinaldo, Z-ZA, Alcoriza V.A.M, Balucanag M.P.S.B., Dulalia A.R.T., & Sayaa A.R. (2019). DNA barcodes of Caulerpa Species (Caulerpaceae, Chlorophyta) from the Northern Philippines. Philipp. J. Sci., 148(2), 343-353."},
    {content: "Dungca-Santos J.C.R., Caspe F.J.O., Tablizo F.A., Purganan D.J.E., Azanza R.V., & Onda D.F.L. (2019). Algicidal potential of cultivable bacteria from pelagic waters against the toxic dinoflagellate Pyrodinium bahamense (Dinophyceae). J. Appl. Phycol., 31(6), 3721-3735."},
    {content: "Ecube K.M.A., Villanueva E.G., Dolorosa R.G., &amp; Cabaitan P.C. (2019). Notes on the first record of Tridacna noae (Röding, 1798) (Cardiidae: Tridacninae) in Palawan, Philippines. The Palawan Scientist, 11, 112-115."},
    {content: "Enricuso O.B., Conaco C., Sayco S.L.G., Neo M.L., & Cabaitan P.C. (2019). Elevated seawater temperatures affect embryonic and larval development in the giant clam Tridacna gigas (Cardiidae: Tridacninae).  J. Molluscan Stud., 85, 66-72."},
    {content: "Flores P.C.M., Siringan F.P., Albelda R.L., Go K.T.B., & Cabaitan P.C. (2019). Identifying potential upper mesophotic coral ecosystems in Masinloc, Zambales, Philippines using recreational-grade side scan sonars. Phil. Sci. Lett., 12(1), 95-101."},
    {content: "Furukawa K., Loma R.J.A., Coching J.D., Siringan F.P., Primavera J.H., Montilijao C.L., Sta. Maria, Y.Y. (2019). A community based mangrove rehabilitation of high energy coasts in Pedada Bay, Philippines. Journal of Tropical Forest Research, 3(1), 36-53."},
    {content: "Gorospe J.R.C., Junio-Meñez M.A., & Southgate P.C. (2019). Effects of shading on periphyton characteristics and performance of sandfish, Holothuria scabra Jaeger 1833, juveniles. Aquaculture, 512, 734307. DOI: 10.1016/j.aquaculture.2019.734307."},
    {content: "Guzman C., Atrigenio M., Shinzato C., Aliño P.M., & Conaco C. (2019). Warm seawater temperature promotes substrate colonization by the blue coral, Heliopora coerulea. Peer J., 2019(9), e7785."},
    {content: "Hirabayashi S., Yokohama Y., Suzuki A., Esat T., Miyari Y., Aze T., Siringan F.P., & Maeda Y. (2019). Local marine reservoir age variability at Luzon Strait in the South China Sea during the Holocene. Nucl. Instrum. Methods. Phys. Res. B. DOI:10.1016/j.nimb.2018.12.001"},
    {content: "Labrador K., Agmata A., Palermo J.D., Follante J., Pante M.J. (2019). Authentication of processed Philippine sardine products using Hotshot DNA extraction and minibarcode amplification. Food Control, 95, 150-155"},
    {content: "Lacerna N.M., Miller B.W., Lim A.L., Tun J.O., Robes J.M.D., Cleofas M.J.B., Lin Z., Salvador-Reyes L.A., Haygood M.G., Schmidt E.W., Concepcion G.P. (2019). Mindapyrroles A−C, pyoluteorin analogues from a shipworm-associated bacterium. J. Nat. Prod., 82, 1024−1028"},
    {content: "Liang X., Luo D., Yan J-L, Rezzaei M.A., Salvador-Reyes L.A., Gunasekera S.P., Li C., Ye T., Paul V.J., & Luesch H. (2019). Discovery of amantamide, a selective CXCR7 agonist from marine cyanobacteria. Org. Lett., 21(6), 1622-1626"},
    {content: "Lum W.M., Azanza R.V., Furio E., Lim P.T., Lim H.C., Takahashi K., & Iwataki M. (2019). Morphology and molecular phylogeny of the harmful raphidophyte Chattonella subsalsa isolated from Bolinao, Philippines. Phil. J. of Nat. Sci., 24, 50-56."},
    {content: "Mendoza C.B., Masacupan D.J.M., Batoctoy D.C.R., Yu E.T., Lluisma A.O., & Salvador‐Reyes L.A. (2019). Conomarphins cause paralysis in mollusk: Critical and tunable structural elements for bioactivity. J. Pept. Sci., 25(7), e3179."},
    {content: "Moncada C., Hassenruch C., Gardes A., & Conaco C. (2019). Microbial community composition of sediments influenced by intensive mariculture activity. FEMS Microbiol. Ecol., 95(2). fiz006.s"},
    {content: "Mualil R.N., Deocadez M.R., Martinez R.J.S., & Aliño P.M. (2019). Data on the biomass of commercially important coral reef fishes inside and outside marine protected areas in the Philippines. Data in brief, 25, 104176."},
    {content: "Muallil R.N., Deocadez M.R., Martinez R.J.S., Campos W.L., Mamauag S.S., Nañola C.l. Jr, & Aliño P.M. (2019). Effectiveness of small locally-managed marine protected areas for coral reef fisheries management in the Philippines. Ocean Coast Manag., 179, 104831.s"},
    {content: "Onda D.F.L., Santos M.A.G., Dela Cruz-Papa D., Yñiguez A.T., Azanza R.V., Siringan M.A.T. (2019). Microbial oceanography studies in the context of climate change in the Philippines. Philipp. Sci. Lett., 12(1), 9-23"},
    {content: "Pata P.R., & Yñiguez A.T. (2019). Larval connectivity patterns of the North Indo-West Pacific coral reefs. PLoS ONE, 14(7). e02199313."},
    {content: "Punongbayan, A. T. (2019). Markov chain analysis of sessile community dynamics in a degraded Philippine reef to support restoration of coral populations. Population Ecology, 61(1):45–61."},
    {content: "Quimpo T.J.R., Cabaitan P.C., Go K.T.B., Dumalagan E.E., Villanoy C., & Siringan F.P. (2019). Similarity in benthic habitat and fish assemblages in the upper mesophotic and shallow water reefs in the West Philippine Sea. J. Mar. Biol. Assoc. U.K., 99(7), 1507-1517."},
    {content: "Quimpo T.J.R, Cabaitan P.C., Hoey A.S. (2019). Differential consumption of scleractinian and non-scleractinian coral larvae by planktivorous damselfishes. Coral Reefs, 38(6), 1293-1301.s"},
    {content: "Quimpo T.J.R, Cabaitan P.C., Olavides R.D.D., Dumalagan E.E. Jr., Munar J, & Siringan F.P. (2019). Spatial variability in reef-fish assemblages in shallow and upper mesophotic coral ecosystems in the Philippines. J. Fish Biol., 94(1), 17-28"},
    {content: "Ramin M., Franco M., Roleda M.Y., Aasen I.M., Hetta M., & Steinshamn H. (2019). In vitro evaluation of utilisable crude protein and methane production for a diet in which grass silage was replaced by different levels and fractions of extracted seaweed proteins. Anim. Feed Sci. Technol., 255, 114225."},
    {content: "Ramos R.D., Goodkin N.F., Siringan, & Hughjen K.A. (2019). Coral records of temperature and salinity in the tropical western pacific reveal influence of the pacific decadal oscillation since the late nineteenth century. Paleoceanography and Paleoclimatology, 34(8), 1344-1358."},
    {content: "Ramos R.D., Goodkin N.F., Druffel E.R.M., Fan T.Y., & Siringan F.P. (2019). Interannual coral Δ 14 C records of surface water exchange across the Luzon Strait.  J. Geophys. Res., 124(1), 491-505."},
    {content: "Ravago-Gotanco R., & Kim K.M. (2019). Regional genetic structure of sandfish Holuthuria (Metriatyla) scabra populations across the Philippine archipelago. Fish. Res., 209, 143-155."},
    {content: "Roleda M.Y., Hurd C.L. (2019) Seaweed nutrient physiology: application of concepts to aquaculture and bioremediation. Phycologia, 58(5), 552-562."},
    {content: "Roleda M.Y., Marfaing H., Desnica N., Jónsdóttir R., Skjermo J., Rebours C., & Nitschke U. (2019). Variations in polyphenol and heavy metal contents of wild-harvested and cultivated seaweed bulk biomass: health risk assessment and implication for food applications. Food Control, 95, 121-134."},
    {content: "Ryzhik I., Pugovkin D., Makarov M., Roleda M.Y., Basova L., & Voskoboynikov G. (2019). Tolerance of Fucus vesiculosus exposed to diesel water-accommodated fraction (WAF) and degradation of hydrocarbons by the associated bacteria. Environ. Pollut., 254, 113072."},
    {content: "Santiago V.S., Manzano G.G., Yu C.C., Aliño P.M., & Salvador-Reyes L.A. (2019). Mariculture potential of renieramycin-producing Philippine blue sponge Xestospongia sp. (Porifera: Haplosclerida). Aquaculture, 502, 356-364."},
    {content: "Santiañez W.J.E., & Wynne M.J. (2019). Evidence for the treatment of Talarodictyon tilesii as an older taxonomic synonym of Hydroclathrus stephanosorus (Scytosiphonaceae, Phaeophyceae). Phycological Res., 67, 82-85."},
    {content: "Santiañez W.J.E., & West J.A. (2019). New records of Rosenvingea (Scytosiphonaceae, Phaeophyceae) from the Philippines. Philippine Journal of Systematic Biology, 13(1), 19."},
    {content: "Santiañez W.J.E., & Kogame K. (2019). Proposals to recognize Petalonia tenella comb. nov. and to resurrect Hapterophycus canaliculatus (Scytosiphonaceae, Phaeophyceae). Botanica Marina, 62(2), 149-153"},
    {content: "Sayco S.L.G., Conaco C., Neo M.L., & Cabaitan P.C. (2019). Reduced salinities negatively impact fertilization success and early larval development of the giant clam Tridacna gigas (Cardiidae: Tridacninae). J. Exp. Mar. Biol. Ecol., 516, 35-43"},
    {content: "Servonnat M., Kaye R., Siringan F.P., Munar J., & Yap H.T. (2019). Imperatives for conservation in a threatened center of biodiversity. Coast Manage., 47(5), 453-472."},
    {content: "Shipway R.J., Altamia M.A., Rosenberg G., Concepcion G.P., Haygood M.G., Distel D.L. (2019). A rock-boring and rock-ingesting freshwater bivalve (shipworm) from the Philippines. Proc. Biol. Sci., 286(1905), 20190434"},
    {content: "Shipway J.R., Altamia M.A., Rosenberg G., Concepcion G.P., Haygood M.G., & Distel D.L. (2019). Tamilokus mabinia, a new, anatomically divergent genus and species of wood-boring bivalve from the Philippines. PeerJ, 7, e6256a"},
    {content: "Shipway R.J., Rosenber G., Concepcion G.P., Haygood M.G., Savrda C., & Distel D.L. (2019). Shipworm bioerosion of lithic substrates in a freshwater setting, Abatan River, Philippines: Ichnologic, paleoenvironmental and biogeomorphical implications. PLoS ONE, 14(10), e0224551."},
    {content: "Sinsona M.J., & Juinio-Meñez M.A. (2019). Periphyton characteristics influence the growth and survival of Holothuria scabra early juveniles in an ocean nursery system. Aquac. Res., 50(9), 2655-2665."},
    {content: "Trono, G. C., & Largo, D. B.(2019). The seaweed resources of the Philippines. Botanica Marina, 62(5):483-498."},
    {content: "Tun J.O., Salvador-Reyes L.A., Velarde M.C., Saito N., Suwanborirux K., & Concepcion G.P. (2019). Synergistic cytotoxicity of Renieramycin M and Doxorubicin in MCF-7 breast cancer cells. Marine Drugs, 17(9), 536."},
    {content: "Yap H.T. (2019). One-ecosystem analysis for environmental conservation and sustainble livelihood. F1000Research 2019, 8(F1000 Faculty Rev), 328."},
  ];

  pulication2020 = [
    {content: "Abrina, T.A.S., & Bennett J. (2020). Using choice modelling to estimate the non-market benefits of coral reef restoration in the Philippines. Ocean and Coastal Management 186:1-8."},
    {content: "Abrogueña, J.R., Range, P., Cruz, W., Tentia-Lagumen, M.C., & Chicharo, L. (2020). Fish communities and environmental variables during dry season in Pampanga estuary (Philippines). Regional Studies in Marine Science, 34:1-8."},
    {content: "Al-Awadhi, F.H., Salvador-Reyes, L.A., Elsadek, L.A., Ratnayake, R., Chen, Q.Y., Luesch, H. (2020). Largazole is a Brain-Penetrant Class I HDAC Inhibitor with Extended Applicability to Glioblastoma and CNS Diseases. ACS Chemical Neuroscience, 11(13):193701943."},
    {content: "Albelda, R.L., Cabaitan, P.C., Sinniger, F.P., Dumalagan, E.E. Jr., Quimpo, T.J.R., Olavides R.D.D., Munar, J.C., Villanoy, C.L., Siringan, F.P. (2020). Juvenile scleractinian assemblage and its association with adults and benthos at shallow and upper mesophotic depths in fringing and atoll reefs in the Philippines. Regional Studies in Marine Science, 40:101514."},
    {content: "Altamia, M.A., Lin, Z., Trinaldade-Silva, A.E., Uy, I.D., Shipway R.J., Wilke, D.V., Concepcion G.P., Distel, D.L. (2020). Secondary metabolism in the gill microbiota of shipworms (teredinidae) as revealed by comparison of metagenomes and nearly complete symbiont genomes. mSystems, 5(3): e00261-20"},
    {content: "Arceo, H.O., Cabasan, J.P., Luciano, R.M.A., Heyres, L.J.D., Mamauag, S.S., Aliño, P.M. Estimating the potential fisheries production of three offshore reefs in the West Philippine Sea, Philippines. Philippine Journal of Science, 149(3):647-658."},
    {content: "Atrigenio, M.P., Conaco, C., Guzman, C., Yap, H.T., Aliño, P.M. (2020). Distribution and abundance of Heliopora coerulea (Cnidaria: Coenothecalia) and notes on its aggressive behavior against scleractinian corals: Temperature mediated? Regional Studies in Marine Science, 40:101502"},
    {content: "Azcuna, M., Salvador-Reyes, L.A., Tun, J.O., Lluisma, A.O., Uy, I.D., Cunanan, L., Siringan, M.A., Concepcion, G.P. (2020). Characterization of the biosynthetic potential of the β-proteobacterium Achromobacter xylosoxidans strain ISP2-142-O-2-A using microbiological, chemical, and genomic approaches. Philippine Journal of Science. 148(1):199-218."},
    {content: "Baquiran, J.I., Nada, M.A.L., Campos, C.L.D., Sayco, S.L.G., Cabaitan, P.C., Rosenberg, Y., Ayalon, I., Levy, O., Conaco, C. (2020). The Prokaryotic microbiome of Acropora digitifera is stable under short-term artificial light pollution. Microorganisms, 8(10):1566."},
    {content: "Baquiran, J.I.P., Nada, M.A.L., Posadas, N., Manogan, D.P., Cabaitan, P.C., Conaco, C. (2020). Population structure and microbial community diversity of two common tetillid sponges in a tropical reef lagoon. Peer J, 8:e9017"},
    {content: "Benico, G., Takahashi, K., Lum, W.M., Yñiguez, A.T., Iwataki, M. (2020). The harmful unarmored dinoflagellate Karlodinium in Japan and Philippines, with reference to ultrastructure and micropredation of Karlodinium azanzae sp. nov. (Kareniaceae, Dinophyceae). Journal of Phycology, 56(5):1265-1282"},
    {content: "Beringuela, R.T., Purganan, D.J.E., Azanza, R.V., Onda, D.F.L. (2020). Spatio-temporal variability and association of diatom-dinoflagellate assemblages of Acanthophora,Hypnea and Gracilaria (Rhodophyta), European Journal of Phycology, 55(3):1-11"},
    {content: "Cardenas, M.B., Rodolfo, R.S., Lapus, M.R., Cabria, H.B., Fullon, J., Gojunco, G.R., Breecker, D.O., Cantarero, D.M., Evaristo, J., Siringan, F.P., Zhang, T. (2020). Submarine groundwater and vent discharge in a volcanic area associated with coastal acidification. Geophysical Research Letters, 47(1):e2019GL085730."},
    {content: "Chua, V.M., Gajewiak, J., Watkins, M., Espino, S.S., Ramiro, I.B.L., Omaga, C.A., Imperial, J.S., Carpio LPD, Fedosov A, Safavi-Hemami H, Salvador-Reyes LA, Olivera BM, Concepcion GP. (2020). Purification and characterization of the pink-floyd drillipeptide, a bioactive venom peptide from clavus davidgilmouri (Gastropoda: Conoidea: Drilliidae). Toxins, 12(8): 508."},
    {content: "Conaco, C., Cabaitan, P.C. (2020). Influence of salinity and temperature on the survival and settlement of Helipora coerulea larvae. Marine Pollution Bulletin, 150:110703."},
    {content: "Da-Anoy, J.P., Cabaitan, P.C., Conaco, C. (2020). Warm temperature alters the chemical cue preference of Acropora tenuis and Heliopora coerulea larvae. Marine Pollution Bulletin, 161:111755."},
    {content: "dela Cruz, D.W., & Harrison, P.L. (2020) Enhancing coral recruitment through assisted mass settlement of cultured coral larvae. PLOS ONE 15(11): e0242847."},
    {content: "dela Cruz, D.W., & Harrison, P.L. (2020). Optimising conditions for in vitro fertilization success of acropora tenuis, A. millepora and favites colemani corals in northwestern Philippines. Journal of Experimental Marine Biology and Ecology, 524:1-8."},
    {content: "Dingkuhn, E.L, Wezel, A., Bianchi, F.J.J.A., Groot, J.C.J., Wagner, A., Yap, H.T., Schulte RPO. (2020). A multi-method approach for the integrative assessment of soil functions: application on a coastal mountainous site of the Philippines. J ENVIRON MANAGE, 265:110461."},
    {content: "Dumilag, R.V., Dumago, F.S., Cabudo, R.K.R., Peralta, M.C.E., Li, C.C., Gamus, G.C.V., Romero, R.G.T., Yap, S.L., Roleda, M.Y., Gerladino, P.J.L., Vebruggem, H., Leliaert, F., Draisma, S.G.A., Liao, L.M., Kraft, G.T. (2020). The Ulvophyceae (Chlorophyta) of eastern Sorsogon, Philippines, including Halimeda magnicuneata sp. nov. (Bryopsidales). Botanica Marina, 63(5):439-453"},
    {content: "Eyal-Shaham, L., Eyal, G., Ben-Zvi, O., Sakai, K., Harii, S., Sinniger, F., Hirose, M., Cabaitan, P.C., Bronstein, O., Feldman, B., Shlesinger, T., Levy, O., Loya, Y. (2020). A unique reproductive strategy in the mushroom coral Fungia fungites. Coral Reefs, 39:1793–1804."},
    {content: "Feng, Y., Roleda, M.Y., Armstrong, E., Summerfield, T.C., Law, C.S., Hurd, C.L., Boyd, P.W. (2020). Effects of multiple drivers of ocean global change on the physiology and functional gene expression of the coccolithophore Emiliania huxleyi. Global Change Biology, 26(10):5630-5645."},
    {content: "Herrero, M.L., Brurberg, M.B., Ojeda, D.I., Roleda, M.Y. (2020). Occurrence and pathogenicity of Pythium (Oomycota) on Ulva species (Chlorophyta) at different salinities. Algae, 35(1)-79-89."},
    {content: "Hu, D., Wang, F., Sprintall, J., Wu, L., Riser, S., Cravatte, S., Gordon, A., Zhang, L., Chen, D., Zhou, H., Ando, K., Wang, J., Lee, J.-H., Hu, S., Wang, J., Zhang, D., Feng, J., Liu, L., Villanoy, C.L., Kaluwin, C., Qu, T., Ma, Y. (2020). Review on observational studies of western tropical Pacific Ocean circulation and climate. Journal of Oceanology and Limnology, 38:906–929"},
    {content: "Itang, C.E.M.M., Gaza, J.T., Masacupan, D.J.M., Batoctoy, D.C.R., Chen, Y.-J., Nellas, R.B., Yu, ET. (2020). Identification of conomarphin variants in the Conus eburneus venom and the effect of sequence and PTM variations on conomarphin conformations. Marine Drugs, 18(10):1-18"},
    {content: "Itang CEMM, Gaza JT, Masacupan DJM, Batoctoy DCR, Chen Y-J, Nellas RB and Yu ET. Identification of Conomarphin Variants in the Conus eburneus Venom and the Effectbof Sequence and PTM Variations on Conomarphin Conformations. Mar. Drugs 2020, 18, 503."},
    {content: "Jackisch, D., Yeo, B.-X., Switzer, A.D., He, S., Cantarero, D.L.M., Siringan, F.P., Goodkin, N.F. (2020). Precipitation stable isotopic signatures of tropical cyclones in Metropolitan Manila, Philippines show significant negative isotopic excursions. Earth Syst. Sci. Discuss. (Article in Review)."},
    {content: "Lacerna, N.M. II, Ramones, C.M.V., Robes, J.M.D., Picart, M.R.D., Tun, J.O., Miller, B.W, Haygood MG, Schmidt EW, Salvador-Reyes LA, Concepcion GP. (2020). Inhibition of Biofilm Formation by Modified Oxylipins from the Shipworm Symbiont Teredinibacter turnerae. Mar Drugs. 18(12):656."},
    {content: "Labao, A.B., Naval, P.C. Jr., Yap, D.L.T., Yap, H.T. (2020). Using deep‐belief networks to understand propensity for livelihood change in a rural coastal community to further conservation. Conservation Biology, 34(4):1006-1016."},
    {content: "Li, T., Lin, X., Yu, L., Lin, S., Rodriguez, I.B., Ho, T.-Y. (2020). RNA-seq profiling of Fugacium kawagutii reveals strong responses in metabolic processes and symbiosis potential to deficiencies of iron and other trace metals. Sci Total Environ, 705: 135767."},
    {content: "Liesner, D., Fouqueau, L., Valero, M., Roleda, M.Y., Pearson, G.A., Bischof, K., Valentin, K., Bartsch, I. (2020). Heat stress responses and population genetics of the kelp Laminaria digitata (Phaeophyceae) across latitudes reveal differentiation among North Atlantic populations. Ecology and Evolution, 10(17):9144-9177."},
    {content: "Limburg, K.E., Breitburg, D., Swaney, D.P., Jacinto GS. (2020). Ocean Deoxygenation: A Primer. One Earth 2(1):24-29."},
    {content: "Ligson, C.A., Tabalanza, T.D., Villanueva, R.D., Cabaitan, P.C. (2020). Feasibility of early outplanting of sexually propagated Acropora verweyi for coral reef restoration demonstrated in the Philippines. Restoration Ecology, 28(1):244-251."},
    {content: "Lu, A., Watkins, M., Li, Q., Robinson, S.D., Concepcion, G.P., Yandell, M., Weng, Z., Olivera, B.M., Safavi-Hemami, H. (2020). Transcriptomic Profiling Reveals Extraordinary Diversity of Venom Peptides in Unexplored Predatory Gastropods of the Genus Clavus, (12)5:684-700."},
    {content: "Miller, B.W., Torres, J.P., Flores, M.S., Forteza, I., Rosenber, G., Haygood, M.G., Schmidt, E.W., Concepcion, G.P. (2020). Synergistic anti-methicillin-resistant Staphylococcus aureus (MRSA) activity and absolute stereochemistry of 7,8-dideoxygriseorhodin C. Journal of Antibiotics 73:290-298."},
    {content: "Muallil, R.N., Deocadez, M.R., Martinez, R.J.S., Panga, F.M., Atrigenio, M.P., Aliño, P.M. (2020). Negative trophic relationship between parrotfish biomass and algal cover on Philippine coral reefs. Regional Studies in Marine Science, 39: 101471."},
    {content: "Muallil, R.N., Tambihasan, A.M., Enojario, M.J., Ong, Y.N., & Nañola, C.L. (2020). Inventory of commercially important coral reef fishes in Tawi-Tawi Islands, Southern Philippines: The Heart of the Coral Triangle. Fisheries Research, 230:1-12."},
    {content: "Nada, M.A.L, Baquiran, J.I.P., Cabaitan, P.C., Conaco, C. (2020). Behavior and development of larvae in the sponge Haliclona amboinensis. Invertebrate Biology, 139(3): e12296."},
    {content: "Narvarte, B.C.N., Nelson, W.A., Roleda, M.Y. (2020). Inorganic carbon utilization of tropical calcifying macroalgae and the impacts of intensive mariculture-derived coastal acidification on the physiological performance of the rhodolith Sporolithon sp. Environmental Pollution, 266:115344."},
    {content: "Olano, D.E.B., Salvador-Reyes, L.A., Montaño, M.N.E., Azanza, R.V. (2020). Sorpiton of paralytic shellfish toxins (PSTs) in algal polysaccharide gels. Algal Research 45:101655."},
    {content: "Onda, D.F.L., Gomez, N.C. (2020). Marine microbes and plastic debris research status and opportunities in the Philippines. Philippine Journal of Science, 149(1):89-100."},
    {content: "Palermo, J.D.H., Labrador, K.L., Follante, J.D., Agmata, A.B., Pante, M.J.R., Rollon, R.N., David, L.T. (2020). Susceptibility of Sardinella lemuru to emerging marine microplastic pollution. Global J. Environ. Sci. Manage. 6(3): 373-384."},
    {content: "Poza, A.M., Santiañez, W.J.E., Croce, M.E., Gauna, M.C., Kogame, K., Parodi, E.R. (2020). Cryptic haploid stages in the life cycle of Leathesia marina (Chordariaceae, Phaeophyceae) under in vitro culture. Journal of Phycology, 56(5):1349-1361"},
    {content: "Quimpo, T.J.R., Cabaitan, P.C., Hoey, A.S. (2020). Detachment of Porites cylindrica nubbins by herbivorous fishes. Restor Ecol, 28(2):418-426"},
    {content: "Quimpo, T.J.R., Ligson, C.A., Manogan, D.P., Requilme, J.N.C., Albelda, R.L., Conaco, C., Cabaitan, P.C. (2020). Fish farm effluents alter reef benthic assemblages and reduce coral settlement. Mar. Pollut. Bull., 153:111025."},
    {content: "Quimpo, T.J.R., Requilme, J.N.C., Gomez, E.J., Sayco, S.L.G., Tolentino, M.P.S., Cabaitan, P.C. (2020). Low coral bleaching prevalence at the Bolinao-Anda Reef Complex, northwestern Philippines during the 2016 thermal stress event. Marine Pollution Bulletin, 160:111567"},
    {content: "Reich, H.G., Rodriguez, I.B., LaJeunesse, T.C., Ho, T.-Y. (2020). Endosymbiotic dinoflagellates pump iron: differences in iron and other trace metal needs among the Symbiodiniaceae. Coral Reefs, 39:915–927."},
    {content: "Rioja, R.A., Palomar-Abesamis, N., Juinio-Meñez, M.A. (2020). Development of nocturnal feeding and photosensitivity in early juveniles of the warty sea cucumber Stichopus cf. horrens. Behavioural Processes, 178:104181s"},
    {content: "Rodriguez, M.V.B., Segumalian, C.S., Lalas, J.A.A., & Maningas, J.M.C. (2020). Octocorals outcompete scleractinian corals in a degraded reef. IOP Conf. Ser.: Earth Environ. Sci. 420:1-8."},
    {content: "Santiañez, W.J.E., Al-Bader, D., West, J.A., Bolton, J.J., Kogame, K. (2020). Status, morphology, and phylogenetic relationships of Iyengaria (Scytosiphonaceae, Phaeophyceae), a brown algal genus with a disjunct distribution in the Indian Ocean. Phycological Research, 68(4):323-331."},
    {content: "Santiañez, W.J.E., Wynne, M.J. (2020). Establishment of Mimica gen. nov. to accommodate the anaxiferous species of the economically important red seaweed Eucheuma (Solieriaceae, Rhodophyta). Phytotaxa 439(2): 167-170"},
    {content: "Stiefel, K.M. (2020) Evolutionary trends in large pelagic filter-feeders, Historical Biology, 1-12."},
    {content: "Tabalanza, T.D., Jamodiong, E.A., Diaz, L.A., Tañedo, M.C.S., Leriorato, J.C., Villanueva, R.D., Cabaitan, P.C. (2020). Successfully cultured and reared coral embryos from wild caught spawn slick in the Philippines. Aquaculture, 525: 734354"},
    {content: "Tatsumi, E., Matsumoto, T., Itoh, S., Zhang, J., Senjyu, T., Sakai, A., Lee, K., Yanagimoto, D., Yasuda, I., Ogawa, H., Villanoy, C. (2020). Vertical fluxes of nutrients enhanced by strong turbulence and phytoplankton bloom around the ocean ridge in the Luzon Strait. Scientific Reports, 10: 17879"},
    {content: "Torres, A.F., Forsman, Z.H., Ravago-Gotanco, R. (2020). Shifts in coral clonality along a gradient of disturbance: insights on reproduction and dispersal of Pocillopora acuta. Marine Biology, 167:161"},
    {content: "Torres, J.P., Lin, Z., Fenton, D.S., Leavitt, L.U., Niu, C., Lam, P.-Y., Robes, J.M., Peterson, R.T., Concepcion GP, Haygood MG, Olivera BM, Schmidt EW. (2020). Boholamide A, an APD-Class, Hypoxia-Selective Cyclodepsipeptide. Journal of Natural Products 83(4):1249-1257."},
    {content: "Tuo, S. -, Rodriguez, I.B., Ho, T. (2020). H2 accumulation and N2 fixation variation by ni limitation in cyanothece. Limnology and Oceanography, 65(2): 377-386."},
    {content: "Winther, J.-G., Dai, M., Rist, T., Hoel, A.H., Li, Y., Trice, A., Morrissey, K., Juinio-Meñez, M.A., Fernandes, L., Unger, S., Scaranao FR,Halpin P, Sandra Whitehouse. (2020). Integrated ocean management for a sustainable ocean economy. Nature Ecology & Evolution, 4:1451–1458"},
    {content: "Yñiguez, A.T., Lim, P.T., Leaw, C.P., Jipanin, S.J., Iwataki, M., Benico, G. (2020). Over 30 years of HABs in the Philippines and Malaysia: What have we learned? Harmful Algae, 101776. Article in Press"},
    {content: "Yñiguez, A.T., Ottong, Z.J. (2020). Predicting fish kills and toxic blooms in an intensive mariculture site in the Philippines using a machine learning model. Sci Total Environ, 707:136173.s"},
  ]

  publication2021 = [
    {content: "Altamia, M. A., Lin, Z., Trindade-Silva, A. E., Uy, I. D., Shipway, J. R., Wilke, D. V., Concepcion, G.P., Distel, D.L., Schmidt, E.W., Haygood, M. G. (2021). Erratum: Secondary metabolism in the gill microbiota of shipworms (teredinidae) as revealed by comparison of metagenomes and nearly complete symbiont genomes.  mSystems, 6(2), Article number e00288-21."},

    {content: "Altamirano, J.P., Sinsona, M.J., Caasi, O.J.C.,de la Torre-de la Cruz, M., Uy, W.H., Noran-Baylon, R., Juinio-Meñez, M.A. (2021). Factors affecting the spatio-temporal variability in the production of sandfish Holothuria scabra juveniles in floating hapa ocean nursery systems. Aquaculture 541, Article Number 736743"},

    {content: "Amedo-Repollo, C.A., Flores-Vidal, X., Chavanne, C., Villanoy, C.L., Flament, P. (2021). Barotropic and baroclinic tides in Panay Strait, Philippines. Regional Studies in Marine Science 41, Article Number 101612"},

    {content: "Ando, K., Lin, X., Villanoy, C., Danchenkov, M., Lee, J. -., He, H. -., Liu, Q., Liu, Y., Lobanov, V, Ma, X.-L., Mulyadi, H.A., Nagano, A., Ren, J.-L., Syahailatua, A., Tian, Y., Wu, L., Zhang, J., Zhang, L, Zhao, N., Zheng, J., Ma, S., & Zhu, W. (2021). Half-century of scientific advancements since the cooperative study of the Kuroshio and adjacent regions (CSK) programme - need for a new Kuroshio research. Progress in Oceanography, 193, Article Number 102513"},

    {content: "Aquino, G.A.G., Cabaitan, P.C. & Secor, D.H. (2021). Locomotor activity and growth response of glass eel Anguilla marmorata exposed to different salinity levels. Fish Sci 87:253–262"},

    {content: "Ayalon, I., Rosenberg, Y., Benichou, J. I. C., Campos, C. L. D., Sayco, S. L. G., Nada, M. A. L., Baquiran, J. I. P., Ligson, C. A., Avisar, D., Conaco, C., Kuechly, H. U., Kyba, C. C. M., Cabaitan, P. C., & Levy, O. (2021). Coral gametogenesis collapse under artificial light pollution. Current Biology, 31(2), 413-419."},

    {content: "Baird, A. H., Guest, J. R., Edwards, A. J., Bauman, A. G., Bouwmeester, J., Mera, H., Abrego, D., Alvarez-Noriega, M., Babcock, R. C., Barbosa, M. B.,Bonito, V. Burt, J., Cabaitan, P. C., Chang, C.-F., Chavanich, S., Chen, C. A., Chen, C.-J., Chen, W.-J., Chung, F.-C., Connolly, S. R., Cumbo, V. R., Dornelas, M., Doropoulos, C., Eyal, G., Eyal-Shaham, L., Fadli, N., Figueiredo, J. Flot, J.-F., Gan, S.-Z. Gomez, E. J.,  Graham, E. M., Grinblat, M., Gutiérrez-Isaza, N., Harii, S., Harrison, P. L., Hatta, M., Ho, N. A. J., Hoarau, G. Hoogenboom, M., Howells, E. J., Iguchi, A., Isomura, N., Jamodiong, E. A., Jandang, S., Keyse, J., Kitanobo, S., Kongjandtre, N., Kuo, C.-Y., Ligson, A., Lin, C.-H., Low, J., Loya, Y., Maboloc, E. A., Madin, J. S., Mezaki, J., Min, C., Morita, M., Moya, a., Neo, S.-H., Nitschke, M. R., Nojima, S., Nozawa, Y., Piromvaragorn, S., Plathong, S., Puill-Stephan, S., Quigley, K., Ramirez-Portilla, C., Ricardo, G., Sakai, K., Sampayo, E., Shlesinger, T., Sikim, L., Simpson, C., Sims, C. A., Sinniger, F., Spiji, D. A., Tabalanza, T., Tan, C.-H., Terraneo, T. I., Torda, G., True, J., Tun, K., Vicentuan, K., Viyakarn, V., Waheed, Z., Ward, S., Willis, B., Woods, R. M., Woolsey, E. S., Yamamoto, H. H. & Yusuf, S.(2021). An indo-pacific coral spawning database. Scientific Data, 8(1)."},

    {content: "Baran, C.C. & Baria-Rodriguez, M.V.B. (2021). Sexual reproduction in the soft coral Lobophytum schoedei in Bolinao‐Anda Reef Complex, Pangasinan, northwestern Philippines. Inverebrate Biology, e12316."},

    {content: "Batucan, J.D., Susana, S.R., Ochoa, M.M.T., Salvador-Reyes, L.A. (2021). Biological activity and chemical profiling of terrestrial and freshwater cyanobacteria from the Philippines. Philippine Journal of Science 150(5), pp. 1245-1254"},

    {content: "Bautista VII, A. T., Limlingan, S. J. M., Bauyon, M. M. T., Jagonoy, A. M., Racho, J. M. D., Valdez, J. D. G., Monsada, A. M., Salon, B. J. T., Tabuso, A. J. E., Valerio, J. K. C., Dumalagan, E. E., & Siringan, F. P. (2021). 3D X-ray computed tomography gray value and age model datasets of coral cores Baler 2 and 3 (Philippines). Data in Brief, 34:1-6."},
    {content: "Bautista, A. T., Limlingan, S. J. M., Bauyon, M. M. T., Jagonoy, A. M., Racho, J. M. D., Valdez, J. D. G., Salon, B.J.T., Tabuso, A.J.E., Valerio, J.H.C., Dumalagan, E.E. Jr., Kusuno, H., Siringan, F.P., & Matsuzaki, H. (2021). A historical record of the impact of nuclear activities based on 129I in coral cores in Baler, Philippines: An update. Journal of Environmental Radioactivity, 227:1-9."},

    {content: "Benico, G., Lum, W.M., Takahashi, K., Yñiguez, A.T., Iwataki, M. (2021). Thecal tabulation, body scale morphology and phylogeny of Heterocapsa philippinensis sp. nov. (Peridiniales, Dinophyceae) from the Philippines. European Journal of Protistology, 80, Article Number 125811."},

     {content: "Bonilla, K.G., Guest, J.R., dela Cruz, D.W., Baria-Rodriguez, M.V. (2021). Onset of sexual maturity of sexually propagated and wild colonies of the massive coral Favites abdita in northwestern Philippines. Invertebrate Reproduction and Development, 65(3), pp. 201–209"},

    {content: "Cadeliña, P.L.P., Yñiguez, A.T. (2021). Measuring up to the challenge: Enhancing the capacity of ARAICoBeH system by enabling coral colony size measurement. Philippine Journal of Science 150(4), pp. 777-788."},

    {content: "Cordero-Bailey, K., Bollozos, I.S.F., Plaermo, J.D.H., Silvano, K.M., Escobar, M.T.L, San Diego-Mchlone, M.L., David, L.T., Yñiguez, A.T. (2021). Characterizing the vertical phytoplankton distribution in the Philippine Sea off the northeastern coast of Luzon. Estuarine, Coastal and Shelf Science, 254:1-13."},

    {content: "Cordero-Bailey, K., I.S.F. Bollozos, J.D.H. Palermo, K.M. Silvano, M.T.L. Escobar, G.S. Jacinto, M.L. San Diego-McGlone, L.T. David, A.T. Yñiguez.  2021.  Characterizing the vertical phytoplankton distribution in the Philippine Sea off the northeastern coast of Luzon.  Estuarine, Coastal and Shelf Science 254: 107322, Doi.10.1016/j.ecss.2021.107322."},

    {content: "Deauna, J. D. L., Yatco, K. M. B., Villanoy, C. L., & Juinio-Meñez, M. A. (2021). Identification of priority sites to support management of commercially important sea cucumber species by applying infomap and habitat filters to larval dispersal data. Frontiers in Marine Science, 7, Article Number 571712."},

    {content: "Dela Peña, L.B.R.O., Tejada, A.J.P., Quijano, J.B.Q., Alonzo, K.H., Gernanto, E.G., Caril, A., Dela Cruz, M.A.M.D., & Onda, D.F.L. Diversity of marine eukaryotic picophytoplankton communities with emphasis on mamiellophyceae in Northwestern Philippines. Philippine Journal of Science, 150 (1): 27-42."},

    {content: "Dizon, E.G.S, Da-Anoy, J.P., Roth, M.S., Conaco, C. (2021). Fluorescent protein expression in temperature tolerant and susceptible reef-building corals. J. Mar. Biolog. Assoc. U.K.:1-10 (Article in Press) DOI: 10.1017/S0025315421000059."},
    {content: "Elsadek, L. A., Matthews, J. H., Nishimura, S., Nakatani, T., Ito, A., Gu, T., Luo, D., Salvador-Reyes, L.A., Kakeya, H. & Luesch, H. (2021). Genomic and targeted approaches unveil the cell membrane as a major target of the antifungal cytotoxin amantelide A. ChemBioChem, doi:10.1002/cbic.202000685 (Article in Press)."},

    {content: "Galarpe, V. R. K. R., Jaraula, C. M. B., & Paler, M. K. O. (2021). The nexus of macroplastic and microplastic research and plastic regulation policies in the Philippines marine coastal environments. Marine Pollution Bulletin, 167, Article Number 112343."},

    {content: "Gallentes, A. T., Manglicmot, M. T., Gong, S. -., Hu, H. -., Shen, C. -., & Siringan, F. P. (2021). Coral boulder transport and gravel bar formation by storms in Lumaniag Village, Batangas, northwestern Philippines. Geomorphology, 376, Article Number 107554."},

    {content: "Gorospe, J. R., Juinio-Meñez, M. A., & Southgate, P. C. (2021). Is culture performance of juvenile sandfish, Holothuria scabra, in ocean-based nursery systems influenced by proximity to milkfish (Chanos chanos) farms and hapa net mesh size? Aquaculture, 531, Article Number 735812."},

    {content: "Hinaloc, L.A.R., Roleda, M.Y.  (2021). Phenotypic diversity, growth and sexual differentiation in the progeny of wild Kappaphycus alvarezii (Gigartinales, Florideophyceae). Phycologia (Article in Press)."},

    {content: "Labrador, K., Agmata, A., Palermo, J. D., De Guzman, A., Naguit, M. R., Garcia, J., & Pante, M. J. (2021). DNA Barcoding of Dominant Species in the Sardine Fishery of Northern Mindanao. Philippine Journal of Science, 150(Special Issue on Biodiversity), 433–437."},

    {content: "Labrador, K., Agmata, A., Palermo, J. D., Ravago-Gotanco, R., & Pante, M. J. (2021). Mitochondrial DNA reveals genetically structured haplogroups of Bali sardinella (Sardinella lemuru) in Philippine waters. Regional Studies in Marine Science, 41, Article Number 101588."},

    {content: "Lal, M.M., Macahig, D.A.S., Brown, K.T., Juinio-Meñez, M.A., Southgate, P.C., Ravago-Gotanco, R. (2021). Preliminary population genomic study on the sandfish Holothuria (Metriatyla) scabra. Animal Genetics 52(5), pp. 775-776."},
    {content: "Lalas, J. A. A., Benayahu, Y., & Baria-Rodriguez, M. V. (2021). Community structure and size-frequency distribution of soft corals in a heavily disturbed reef system in northwestern Philippines. Marine Pollution Bulletin, 162: 1-11."},

    {content: " Leal, P.P., Roleda, M.Y., Fernández, P.A., Nitschke, U., Hurd, C.L. (2021). Reproductive phenology and morphology of Macrocystis pyrifera (Laminariales, Ochrophyta) from southern New Zealand in relation to wave exposure. Journal of Phycology (Article in Press)."},

    {content: "Ligson, C.A., Cabaitan, P.C. (2021). Survival and sexual maturity of sexually propagated Acropora verweyi corals 4 years after outplantation. Restoration Ecology 29(5),e13363."},

    {content: "Ligson CA, & Cabaitan PC. (2021). Survival and sexual maturity of sexually propagated Acropora verweyi corals 4 years after outplantation. Restoration Ecology. Article in Press. DOI: https://doi.org/10.1111/rec.13363"},

  

    {content: "Lin, B., Liu, Z., Eglinton, T.I., Blattmann, T.M., Kandasamy, S, Haghipour, N., Siringan, F.P. (2021). Organic Matter Compositions and Loadings in River Sediments From Humid Tropical Volcanic Luzon Island of the Philippines. Journal of Geophysical Research: Biogeosciences 126(7),e2020JG006192"},

    {content: "Lum, W.M., Benico, G., Doan-Nhu, H., Furio, E., Leaw, C.P., Leong, S.C.Y., Lim, P.T., Lim, W.A., Lirdwitayaprasit, T., Lu, S., Muawanahi, Nguyen, N.V., Orlova, T.Y., Rachman, A., Sakamoto, ., Takahashi, K., Teng, S.T., Thoha, M., Wang, P., Yñiguez, A.T., Wakita, K., Iwataki, M. (2021). The harmful raphidophyte Chattonella (Raphidophyceae) in Western Pacific: Its red tides and associated fisheries damage over the past 50 years (1969–2019). Harmful Algae, 107, Article Number 102070."},

   

    {content: "Manuel, A., A. Blanco, O. Cabrera, M.L. San Diego-McGlone.  2021.  Mapping coloured dissolved organic matter in Manila Bay using SENTINEL-3 and WASI.  Int. Arch. Photogramm. Remote Sens. Spatial Inf. Sci., XLVI-4/W6-2021, 207–212, https://doi.org/10.5194/isprs-archives-XLVI-4-W6-2021-207-2021, 2021."},


    {content: "Matriano, D., Alegado, R., Conaco, C. (2021). Detection of horizontal gene transfer in the genome of the choanoflagellate Salpingoeca rosetta. Sci. Rep., 11(1):1-11."},

    {content: "Mendiola, M. J. R., & Ravago-Gotanco, R. (2021). Genetic differentiation and signatures of local adaptation revealed by RADseq for a highly dispersive mud crab Scylla olivacea (Herbst, 1796) in the Sulu Sea. Ecology and Evolution, doi:10.1002/ece3.7625."},

    {content: "Nguyen, X. V., Lau, V. K., Nguyen-Nhat, N. T., Nguyen, T. H., Phan, K. H., Dao, V. H., … Papenbrock, J. (2021). Update of seagrass cover and species diversity in Southern Viet Nam using remote sensing data and molecular analyses. Regional Studies in Marine Science, 44, Article number 101803. https://doi.org/10.1016/j.rsma.2021.101803."},

    {content: "Onda, D.F.L., Sharief, K.M. (2021) Identification of Microorganisms Related to Microplastics. IN: Rocha-Santos T., Costa M., Mouneyrac C. (eds) Handbook of Microplastics in the Environment. Springer, Cham."},


    {content: "Ordoñez, J.F.F., Galindez, G.G.S.T., Gulay, K.T., Ravago-Gotanco, R. (2021). Transcriptome analysis of growth variation in early juvenile stage sandfish Holothuria scabra. Comparative Biochemistry and Physiology - Part D: Genomics and Proteomics, 40, Article Number 100904."},

    {content: "Panga, F.M., Anticamara, J.A., Quibilan, M.C.C., Atrigenio, M.P., Aliño, P.M. (2021). Through the Boundaries: Environmental Factors Affecting Reef Benthic Cover in Marine Protected Areas in the Philippines. Frontiers in Marine Science, 8, Article Number 702071."},

    {content: "Pata, P.R., Yñiguez, A.T., Deauna, J.D.L., De Guzman, A.B., Jimenez, C.R., Borja-Del Rosario, R.T., Villanoy, C.L. (2021). Corrigendum to Insights into the environmental conditions contributing to variability in the larval recruitment of the tropical sardine Sardinella lemuru (Ecological Modelling (2021) 451, (S0304380021001290), (10.1016/j.ecolmodel.2021.109570)). Ecological Modelling, 456, Article Number 109677."},

    {content: "Pata, P.R., Yñiguez, A.T., Deauna, J.D.L., De Guzman, A.B., Jimenez, C.R., Borja-Del Rosario, R.T., Villanoy, C.L. (2021). Insights into the environmental conditions contributing to variability in the larval recruitment of the tropical sardine Sardinella lemuru. Ecological Modelling, 451, Article Number 109570."},

    {content: "Pata, P.R., Yñiguez, A.T. (2021). Spatial Planning Insights for Philippine Coral Reef Conservation Using Larval Connectivity Networks. Frontiers in Marine Science 8, Article Number 719691."},

    {content: "Posadas, N., Baquiran, J.I.P., Nada, M.A.L., Kelly, M., Conaco, C. (2021). Microbiome diversity and host immune functions influence survivorship of sponge holobionts under future ocean conditions. ISME Journal (Article in Press)."},


    {content: "Ray, R., Miyajima, T., Watanabe, A., Yoshikai, M., Ferrera, C.M., Orizar, I., Nakamura, T., San Diego-McGlone, M.L., Herrera, E.C., Nadaoka, K., Herrera, E.C., Nadaoka, K. (2021). Dissolved and particulate carbon export from a tropical mangrove-dominated riverine system Limnology and Oceanography (Article in Press)."},

    {content: "Ray, R., T. Miyajima, A. Watanabe, M. Yoshikai, C.M. Ferrera, I. Orizar, T. Nakamura, M.L San Diego-McGlone, E.C. Herrera, K. Nadaoka.  2021.  Dis"},

    {content: "Reich, H. G., Tu, W. -., Rodriguez, I. B., Chou, Y., Keister, E. F., Kemp, D. W., LaJeunesse T. C. & Ho, T. -. (2021). Iron availability modulates the response of endosymbiotic dinoflagellates to heat stress. Journal of Phycology, 57(1), 3-13."},

    {content: "Requilme, J.N.C, Conaco, C., Sayco, S.L.G., Roa-Quiaoit, H.A., Cabaitan, P.C. (2021). Using citizen science and survey data to determine the recruitment envelope of the giant clam, Tridacna gigas (Cardiidae: Tridacninae). Ocean and Coastal Management, 202, Article Number 105515."},

     {content: "Reyes, M., San Diego-McGlone, M.L., Pavia, R., Opiňa, J., Isah, R., Magyaya, R., Morris, J., Tamayo, N., Licianan, W. (2022). Low pH and low coral cover at a shallowhydrothermal vent site in Batangas, Philippines. Philippine Journal ofScience. 151 (2): 665-670."},

    {content: "Rioja, R.A., Palomar-Abesamis, N., Juinio-Meñez, M.A. (2021). Associated effects of shading on the behavior, growth, and survival of Stichopus cf. horrens juveniles. Aquaculture International 29(5), pp. 1991-2007."},

    {content: "Rioja, R.A., Palomar-Abesamis, N., Juinio-Meñez, M.A. (2021). Correction to: Associated effects of shading on the behavior, growth, and survival of Stichopus cf. horrens juveniles (Aquaculture International, (2021), 29, 5, (1991-2007), 10.1007/s10499-021-00732-3). Aquaculture International."},

    {content: "Roleda, M. Y., Lage, S., Fonn Aluwini, D., Rebours, C., Bente Brurberg, M., Nitschke, U., & Gentili, F. G. (2021). Corrigendum to “Chemical profiling of the arctic sea lettuce Ulva lactuca (Chlorophyta) mass-cultivated on land under controlled conditions for food applications” [Food Chemistry, 341 (2021) 127999] (Food Chemistry (2021) 341(P1), (S0308814620318616), (10.1016/j.foodchem.2020.127999)). Food Chemistry, 347, Article Number 129059."},

    {content: "Roleda, M.Y., Aguinaldo, Z-Z.A., Crisostomo, B.A., Hinalom L.A.R., Projimo, V.Z., Dumilag, R.V., & Lluisma, A.O. (2021). Discovery of novel haplotypes from wild populations of Kappaphycus (Gigartinales, Rhodophyta) in the Philippines. Algae, 36(1):1-12."},

    {content: "Roleda, M.Y., Heesch, S. (2021). Chemical profiling of Ulva species for food applications: What is in a name? Food Chemistry, 361, 130084."},

    {content: "Roleda, M.Y., Lage, S., Aluwini, D.F., Rebours, C., Brurberg, M.B., Gentili, F.G. (2021). Chemical profiling of the Arctic sea lettuce Ulva lactuca (Chlorophyta) mass-cultivated on land under controlled conditions for food applications. Food Chemistry, 341, Article Number 127999."},



    {content: " Rula, N.A.M., Ganzon-Fortes, E.T., Pante, M.J.R., Trono, G.C. (2021). Influence of light, water motion, and stocking density on the growth and pigment content of Halymenia durvillei (Rhodophyceae) under laboratory conditions. Journal of Applied Phycology 33(4), pp. 2367-2377."},

    {content: "Schmidtchen, L., Roleda, M.Y., Majschak, J.-P., Mayser, M. (2021). Processing technologies for solid and flexible packaging materials from macroalgae. Algal Research (Article in Press)."},

    {content: "Soria, J.L.A., Switzer, A.D., Pile, J., Siringan, F.P., Brill, D., Daag, A. (2021). Geomorphological and sedimentological records of recent storms on a volcaniclastic coast in Bicol, Philippines. Geomorphology, 386, Article Number 107753."},

     {content: "Soria, J.L.A., M A Angelique, A., Ramos, R.D., Siringan, F.P. (2021). Prograding shoreline, emerging gravel bars, and mangrove recolonization in 40 years on a mixed siliciclastic-carbonate coast in Southwestern Luzon, Philippines. Philippine Journal of Science 150(5), pp. 997-1012."},

    {content: "Subong, B.J.J., Lluisma, A.O., Azanza, R.V., Salvador-Reyes, L.A. (2021). Differentiating two closely related Alexandrium Species using comparative Quantitative Proteomics. I, 13(1):1-22."},

    {content: "Tan, K., Conaco, C. (2021). Characterization of the hidden break in giant clam 28S ribosomal RNA. Journal of Molluscan Studies, 87(3), eyab029"},

    {content: "Tañedo, M.C.S., R.D. Villanueva, A.F. Torres, R. Ravago-Gotanco, M.L. San Diego-McGlone.  2021.   Individual and interactive effects of ocean warming and acidification on adult Favites colemani. Frontiers in Marine Science 8:704487. doi: 10.3389/fmars.2021.704487"},

    {content: "Tañedo, M.C.S., Villanueva, R.D., Torres, A.F., Ravago-Gotanco, R., San Diego-McGlone, M.L. (2021). Individual and Interactive Effects of Ocean Warming and Acidification on Adult Favites colemani. Frontiers in Marine Science, 8, Article Number 704487."},

    {content: "Torreno VPM, Dumalan, RJP, Batoctoy, DCR, Juinio-Meñez, MA and Yu, ET. (2021) Rapid Profiling of Saponin Extracts from Stichopus horrens Sea Cucumbers by Mass Spectrometry. Philippine Journal of Science. In press."},


    {content: "Torres, J.P., Lin, Z., Watkins, M., Salcedo, P.F., Baskin, R.P., Elhabian, S., Safvi-Hemami, H., Taylor, D., Tun, J., Concepcion, G.P., Saguil, N., Yanagiharam A.A., Fang, Y., McArthur, J.R., Tae, H.-S., Finol-Urdaneta, R.K., Ozpolat, B.D., Olivera, B.M., & Schmidt, E.W. (2021). Small-molecule mimicry hunting strategy in the imperial cone snail, Conus imperialis. Science Advances, 7(11): eabf2704."},

    {content: "Valino, D. A. M., Baria-Rodriguez, M V., Dizon, R.M., Aliño, P. M. (2021). Responses of Buluan Island turbid fringing reefs, southern Philippines to the 2016 thermal anomaly. Regional Studies in Marine Science, 43, Article Number 101704."},

    {content: "Yñiguez, A. T., Lim, P. T., Leaw, C. P., Jipanin, S. J., Iwataki, M., Benico, G., & Azanza, R. V. (2021). Over 30 years of HABs in the Philippines and Malaysia: What have we learned? Harmful Algae, 102, Article number 101776. https://doi.org/10.1016/j.hal.2020.101776."},

    {content: "Yoshikai, M., T. Nakamura, Y. Tanaka, M. Nakaoka, A. Watanabe, E. Herrera, T. Tshuchiya, T. Miyajima, M.L. San Diego-McGlone, M.D. Fortes, A.C. Blanco, A.M. Tamondong, K. Nadaoka.  2021.  Modeling seagrass bed dynamics under environmental impacts of intensive mariculture activities in Bolinao and Anda, the Philippines.  2020.  Estuarine, Coastal and Shelf Science 250: 107152, Doi.10.1016/j.ecss  2020.107152."},

    {content: "Yoshikai, M. Nakamura, T., Tanaka, Y., Nakaoka, M. Watanabe, A. Herrera, E. Tsuchiya, T. Miyajima, T. San Diego-McGlone, M.L., Fortes, M., Blanco, A., Tamondong, A., Nadaoka, K.(2021). Modeling seagrass bed dynamics under environmental impacts of intensive mariculture activities in Bolinao and Anda, the Philippines. Estuarine, Coastal and Shelf Science, 250: 1-14."},

    
  ]

  publication2022 = [

    {content: "Azminuddin, F., Lee, J. H., Jeon, D., Shin, C. W., Villanoy, C., Lee, S., Min, H. S., & Kim, D. G. (2022). Effect of the intensified sub-thermocline eddy on strengthening the Mindanao undercurrent in 2019. Journal of Geophysical Research: Oceans, 127(2), e2021JC017883. https://doi.org/10.1029/2021JC017883"},

    {content: "Baluyot, J. C., Santos, H. K., Batoctoy, D. C., Torreno, V. P., Ghimire, L. B., Joson, S. E., Obusan, M. C., Yu, E. T., Bela-ong, D. B., Gerona, R. R., & Velarde, M. C. (2022). Diaporthe/Phomopsis longicolla degrades an array of bisphenol analogues with secreted laccase. Microbiological Research, 257, 126973. https://doi.org/10.1016/j.micres.2022.126973"},


    {content: "Bauyon, M.M.T., Magtaas, R.A.H., Limlingan, S.J.M., Jagonoy, A.M., Racho, J.M.D., Valdez, J.D.G., Monsada, A.M., Salon, B.J.T., Tabuso, A.J.E., Valerio, J.K.C., Sarmiento, K.J.S., Dumalagan, Jr., E.E., Siringan, F.P., Bautista VII, A.T. (2022). Sea surface temperature reconstruction using 3D x-ray computed tomography in coral cores from Baler, Aurora, Philippines: An initial study. Mindanao Journal of Science and Technology: MJST Special Issue on the Philippine Nuclear Research and Development Conference 2020 20(S1). https://mjst.ustp.edu.ph/index.php/mjst/article/view/1063/211"},


    {content: "Gabuyo, M. R. P., & Siringan, F. P. (2022). Utility of low-cost recreational-grade echosounders in imaging and characterizing bubbly coastal submarine groundwater discharge. Journal of Hydrology X, 14, 100118. https://doi.org/10.1016/j.hydroa.2021.100118 "},


    {content: "Gabuyo, M. R. P., & Siringan, F. P. (2022). Utility of low-cost recreational-grade echosounders in imaging and characterizing bubbly coastal submarine groundwater discharge. Journal of Hydrology X, 14, 100118. https://doi.org/10.1016/j.hydroa.2021.100118 Jackisch, D., Yeo, B. X., Switzer, A. D., He, S., Cantarero, D. L. M., Siringan, F. P., & Goodkin, N. F. (2022). Precipitation stable isotopic signatures of tropical cyclones in Metropolitan Manila, Philippines, show significant negative isotopic excursions. Natural Hazards and Earth System Sciences, 22(1), pp. 213-226. https://doi.org/10.5194/nhess-22-213-2022"},


    {content: "Labiros, D.A., Catalig, A.M.P., Ymbong, R.R.J., Sakuntabhai, A., Lluisma, A.O., Edillo, F.E. (2022). Novel and broadly applicable microsatellite markers in identified chromosomes of the Philippine dengue mosquitoes, Aedes aegypti (diptera: culicidae). Journal of Medical Entomology, 2022;, tjab194. https://doi.org/10.1093/jme/tjab194"},


    {content: "Lalas, J. A. A., Lim, R. T. S., Cabasan, J. P., Segumalian, C. S., Luciano, R. M. A., Valino, D. A. M., Jacinto, M. R., Arceo, H. O., Baria-Rodriguez, M. V. (2022). Spatial and short-term temporal patterns of octocoral assemblages in the West Philippine Sea. Frontiers in Marine Science, 8,782977. https://doi.org/10.3389/fmars.2021.782977 "},


    {content: "Liverman, D., von Hedemann, N., Nying’uro, P., Rummukainen, M., Stendahl, K., Gay-Antaki, M., Craig, M., Aguilar, L., Bynoe, P., Call, F., Connors, S., David, L., Ferrone, A., Hayward, B., Jayawardena, S., Touray, L.M., Parikh, J., Ppathak, M., Perez, R., Pirani, A., Prakash, A., Textor, C., Tibig, L., Tignor, M., Tugac, C., Vera, C., Wagle, R. (2022). Survey of gender bias in the IPCC. Nature, 602(7895), pp. 30-32. https://media.nature.com/original/magazine-assets/d41586-022-00208-1/d41586-022-00208-1.pdf"},


    {content: "Ma, J., Hu, S., Hu, D., Villanoy, C., Wang, Q., Lu, X., & Yuan, X. (2022). Structure and variability of the Kuroshio and Luzon undercurrent observed by a mooring array. Journal of Geophysical Research: Oceans, 127(2), e2021JC017754. https://doi.org/10.1029/2021JC017754 "},


    {content: "Malto, Z. B. L., Benico, G. A., Batucan, J. D., Cruz, J. D., Romero, M. L. J., Azanza, R. V., & Salvador-Reyes, L. A.  (2022). Global mass spectrometric analysis reveals chemical diversity of secondary metabolites and 44-methylgambierone production in Philippine gambierdiscus strains. Frontiers in Marine Science.8,767024. https://doi.org/10.3389/fmars.2021.767024" },


    {content: "Narvarte, B. C. V., Genovia, T. G. T., Hinaloc, L. A. R., & Roleda, M. Y. (2022). Growth, nitrate uptake kinetics, and biofiltration potential of eucheumatoids with different thallus morphologies. Journal of Phycology.58(1), pp. 12-21. https://doi.org/10.1111/jpy.13229"},


    {content: "Posadas, N., Baquiran, J. I. P., Nada, M. A. L., Kelly, M., & Conaco, C. (2022). Microbiome diversity and host immune functions influence survivorship of sponge holobionts under future ocean conditions. The ISME Journal, 16(1), 58-67. https://doi.org/10.1038/s41396-021-01050-5  "},


    {content: "Punongbayan, A. T., Wang, Y. D., Villanoy, C. L., & Yñiguez, A. T. (2022). Connections and clustering of paralytic shellfish toxin events among coastal embayments in an archipelago partly mediated by adcavection. Harmful algae, 111, 102147. https://doi.org/10.1016/j.hal.2021.102147"},

    {content: "Ravelo, S. F., Posadas, N., & Conaco, C. (2022). Transcriptome analysis reveals the expressed gene complement and acute thermal stress response of acropora digitifera endosymbionts. Frontiers in Marine Science, 9, 758579. https://doi.org/10.3389/fmars.2022.758579"},

    {content: "Reyes, R., Bauzon, M., Angela, D., Pasaje, N. A., Alfante, R. M., De Lara, P. M., Ordillano, M.,Flores, P. C., Rediang, A., Nota, P. A., Siringan, F., Blanco, A. & Bringas, D. (2022). Quantifying vertical land motion at tide gauge sites using permanent scatterer interferometric synthetic aperture radar and global navigation satellite system solutions. Spatial Information Research, 1-11. https://doi.org/10.1007/s41324-022-00431-y "},

    {content: "Sarmiento, K. J. S., Aurelio, M. A., Flores, P. C. M., Carrillo, A. D. V., Marfito, B. J., Abigania, M. I. T., Daag, A. S., & Siringan, F. P. (2022). Seafloor structures and static stress changes associated with two recent earthquakes in offshore southern Batangas, Philippines. Frontiers in Earth Science, 9, 801670. https://doi.org/10.3389/feart.2021.801670  "},

    {content: "Schmidtchen, L., Roleda, M. Y., Majschak, J. P., & Mayser, M. (2022). Processing technologies for solid and flexible packaging materials from macroalgae. Algal Research, 61,102300. https://doi.org/10.1016/j.algal.2021.102300" },

    {content: "Yñiguez, A. T., Apego, G. C. M., Mendoza, N., Gomez, N. C., & Jacinto, G. S. (2022). Nearshore to offshore trends in plankton assemblage and stable isotopes in reefs of the West Philippine Sea. Frontiers in Marine Science, 8,724504. https://doi.org/10.3389/fmars.2021.724504  "},

    
  ]

  constructor() { }

  scrollUp(event){
    setTimeout(() => {
      this.scroll(event.path[3].attributes[1].nodeValue);
    }, 300);
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView(true);
  }

  ngOnInit(): void {
  }

}



