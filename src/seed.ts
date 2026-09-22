import type {Lead,Store,Vehicle} from './types';
const capturedAt='2026-09-22T12:00:00-07:00';
// Public Dealer.com inventory snapshot captured 2026-09-22. No private dealership fields are inferred.
const rows=[
['C1090',1993,'Asve','Cobra','Cobra','B51902ST05FF',23739,65985,'Yellow','Manual','RWD','used/Asve/1993-Asve-Cobra-9a3cbfbfac181c46cdfd0dfea24504ad.htm'],
['1082',2018,'Audi','A5','2.0T Premium','WAUENCF53JA042988',53293,20985,'Brilliant Black','7-Speed Automatic S tronic','AWD','used/Audi/2018-Audi-A5-732e891aac1824b1018118ba0f8bc3fe.htm'],
['1074',2021,'Audi','RS 5','2.9T','WUANWAF5XMA903109',29648,55590,'Daytona Gray Pearl','8-Speed Automatic with Tiptronic','AWD','used/Audi/2021-Audi-RS-5-461fc068ac183ebb689d7c6dec9de59b.htm'],
['1130',2021,'Audi','RS 7','4.0T','WUAPCBF24MN900857',44283,77985,'Nardo Gray','8-Speed Automatic with Tiptronic','AWD','used/Audi/2021-Audi-RS-7-ad4c33adac1811a5b94575c6f5d92c1b.htm'],
['1068',2019,'Audi','S5','3.0T Premium','WAUR4AF55KA048527',35639,33485,'Daytona Gray Pearl Effect','8-Speed Automatic with Tiptronic','AWD','used/Audi/2019-Audi-S5-20cad0ebac181c7f9d356bdd15e0d51a.htm'],
['C1135',2022,'Audi','e-tron GT','Premium Plus','WAUEJBFW8N7009650',30406,44985,'','1-Speed Automatic','AWD','used/Audi/2022-Audi-e-tron-GT-c6a9668dac18275d9ef73f1118ccc2b9.htm'],
['1123',2024,'BMW','M2','M2','3MF13DM00R8E89190',16649,65515,'Black Sapphire','8-Speed Automatic Sport','RWD','used/BMW/2024-BMW-M2-8a8ebc56ac185b7043adb35bb546671c.htm'],
['1112',2022,'BMW','M3','Competition','WBS33AY04NFM71838',36227,70985,'Brooklyn Gray Metallic','8-Speed Automatic Steptronic','RWD','used/BMW/2022-BMW-M3-5c321383ac1827bdf324c55b4f88e43b.htm'],
['1104',2023,'BMW','M8','Competition','WBSAE0C00PCM57684',34314,82485,'Marina Bay Blue Metallic','8-Speed Automatic Sport','AWD','used/BMW/2023-BMW-M8-3829a3a6ac18090da9ed9f9d52cac225.htm'],
['1118',2025,'BMW','X6 M','X6 M','5YM23ET06S9X77846',17961,107985,'Dravit Grey Metallic','8-Speed Automatic Sport','AWD','used/BMW/2025-BMW-X6-M-70cc9f7bac1813b262e6ac10478e3044.htm'],
['1132',2025,'CADILLAC','CT5-V','V-Series Blackwing','1G6D35R60S0810389',4039,106985,'Summit White','10-Speed Automatic','RWD','used/CADILLAC/2025-CADILLAC-CT5-V-b3bc466aac182917f2b47494f76d93e9.htm'],
['1133',2025,'CADILLAC','CT5-V','V-Series Blackwing','1G6D25R60S0860342',4041,106985,'Deep Space','6-Speed Manual','RWD','used/CADILLAC/2025-CADILLAC-CT5-V-b3bc4794ac1851979897d886285270b9.htm'],
['1120',2022,'CADILLAC','Escalade','Sport Platinum','1GYS4GKL6NR313791',32268,74985,'Black Raven','10-Speed Automatic','4WD','used/CADILLAC/2022-CADILLAC-Escalade-7e1dc109ac1838ffae3a022a23f9ffc6.htm'],
['1046',2013,'Chevrolet','Corvette','Grand Sport','1G1YV2DW9D5105247',14512,49985,'Supersonic Blue Metallic','6-Speed Automatic Paddle Shift','RWD','used/Chevrolet/2013-Chevrolet-Corvette-b49e9d95ac18401abea45d0a1b2a0dd3.htm'],
['1109',2017,'Chevrolet','Corvette','Z06','1G1YS2D69H5601437',11223,80985,'Black','8-Speed Paddle Shift','RWD','used/Chevrolet/2017-Chevrolet-Corvette-502f552dac1827bd9540ac6734b6785f.htm'],
['1114',2016,'Chevrolet','Corvette','Z06','1G1YU2D60G5600945',16741,80950,'Laguna Blue Metallic Tintcoat','8-Speed Paddle Shift','RWD','used/Chevrolet/2016-Chevrolet-Corvette-64ccf452ac1849bfafd15ef55b4a23e8.htm'],
['1127',2015,'Chevrolet','Corvette','Z06','1G1YU2D60F5604444',10902,80985,'Black','8-Speed Paddle Shift','RWD','used/Chevrolet/2015-Chevrolet-Corvette-ad4c3620ac182917f2b4749428325676.htm'],
['C1117',2007,'Chevrolet','Corvette','Corvette','1G1YY36UX75136617',16132,33985,'Victory Red','6-Speed Automatic Paddle Shift','RWD','used/Chevrolet/2007-Chevrolet-Corvette-667d35afac185ca9e7e2cb7ff0158338.htm'],
['C1134',2026,'Chevrolet','Corvette Stingray','Stingray w/3LT','1G1YC3D41T5102531',492,97985,'Sebring Orange Tintcoat','8-Speed Dual Clutch','RWD','used/Chevrolet/2026-Chevrolet-Corvette-Stingray-c6a9642fac184e0e3aa6268c64f8cc0a.htm'],
['1089',2014,'Chevrolet','Corvette Stingray','Z51','1G1YM2D79E5103026',34315,46485,'Arctic White','6-Speed Automatic Paddle Shift','RWD','used/Chevrolet/2014-Chevrolet-Corvette-Stingray-973a9c2aac1851c1f80656ff29ef7bb2.htm'],
['1052',2021,'Dodge','Charger','SRT Hellcat Widebody','2C3CDXL96MH630437',24275,76985,'White Knuckle','8-Speed Automatic','RWD','used/Dodge/2021-Dodge-Charger-ce6567f3ac184e80a244154a34708bd8.htm'],
['C1126',2017,'Ferrari','488 Spider','488 Spider','ZFF80AMA7H0221099',59233,280985,'','7-Speed Automatic','RWD','used/Ferrari/2017-Ferrari-488-Spider-a44ca07dac185bc6fc1af9b56fc7e947.htm'],
['1079A',2017,'Ford','F-150','Raptor','1FTFW1RG7HFB67107',84284,37485,'Ruby Red Tinted','10-Speed Automatic','4WD','used/Ford/2017-Ford-F-150-6f137b58ac1813b262e6ac10f29c4f7d.htm'],
['1087',2022,'Ford','F-150','F-150','1FTFW1ED2NFA70954',54483,45985,'White Metallic','10-Speed Automatic','4WD','used/Ford/2022-Ford-F-150-973a9f0dac1824b1018118ba6bb7bf9e.htm'],
['1116',2022,'Ford','Mustang','Mach 1','1FA6P8R05N5552018',19901,55485,'Shadow Black','Tremec 6-Speed Manual','RWD','used/Ford/2022-Ford-Mustang-64ccf31fac1811b6affbc9b70b9286be.htm'],
['1131',2018,'Ford','Shelby GT350','Shelby GT350','1FA6P8JZXJ5503286',18060,59985,'Oxford White','Tremec 6-Speed Manual','RWD','used/Ford/2018-Ford-Shelby-GT350-ae982445ac183ecbd73d4eae04c883fb.htm'],
['1128',2025,'Honda','Civic Type R','Civic Type R','JHMFL5G42SX000307',8096,52985,'Championship White','6-Speed Manual','FWD','used/Honda/2025-Honda-Civic-Type-R-ad4c3257ac1851979897d8864391f630.htm'],
['1105',2018,'Jeep','Grand Cherokee','Trackhawk 4x4','1C4RJFN96JC449097',23262,83985,'Bright White','8-Speed Automatic','4WD','used/Jeep/2018-Jeep-Grand-Cherokee-40bab32cac184f13ca20cd186f46767d.htm'],
['1081',2023,'Land Rover','Range Rover','P530 SE','SALKP9E74PA011952',47684,80985,'Portofino Blue Metallic','ZF 8-Speed Automatic','AWD','used/Land-Rover/2023-Land-Rover-Range-Rover-6794323fac18083a2914417f8318bfbc.htm'],
['1101A',2019,'Land Rover','Range Rover Sport','SVR','SALWZ2SE9KA865687',47435,50985,'Fuji White','8-Speed Automatic','4WD','used/Land-Rover/2019-Land-Rover-Range-Rover-Sport-99fddef9ac1811a5b94575c6444a1ee1.htm'],
['1040B',2019,'LEXUS','IS 300','IS 300','JTHBA1D25K5098907',99245,21485,'Liquid Platinum','8-Speed Automatic with Direct Shift','RWD','used/LEXUS/2019-LEXUS-IS-300-a2a5febaac180452357e7dbbd315be22.htm'],
['C1137',2020,'McLaren','GT','GT','SBM22GCA3LW000325',11307,140985,'','7-Speed Automatic','RWD','used/McLaren/2020-McLaren-GT-c6a967c7ac185bc6fc1af9b5bed69703.htm'],
['1113',2022,'Mercedes-Benz','AMG E 53','4MATIC','W1K1J6BBXNF182674',23223,59985,'Black','9-Speed Automatic','AWD','used/Mercedes-Benz/2022-Mercedes-Benz-AMG-E-53-5c32126dac180b7620d871aeda2de8d4.htm'],
['C1077',2019,'Mercedes-Benz','AMG G 63','4MATIC','WDCYC7HJ0KX306166',63938,117985,'Designo Night Black Magno','9-Speed Automatic','AWD','used/Mercedes-Benz/2019-Mercedes-Benz-AMG-G-63-558f95d7ac182381677b0ba92ffd60ef.htm'],
['1111',2024,'Mercedes-Benz','AMG GLC 43','4MATIC','W1NKM8HB0RF202907',17159,58485,'Graphite Gray Metallic','9-Speed Automatic','AWD','used/Mercedes-Benz/2024-Mercedes-Benz-AMG-GLC-43-5c32113bac18460669bf3210e96fd8e8.htm'],
['1098',2024,'Mercedes-Benz','AMG GLE 63','S','4JGFB8KB3RB142499',17016,87985,'Black','9-Speed Automatic','AWD','used/Mercedes-Benz/2024-Mercedes-Benz-AMG-GLE-63-f8a1e97eac180936a0a72ed80bfd6788.htm'],
['1086',2020,'Mercedes-Benz','AMG GT 53','4MATIC','WDD7X6BB0LA012522',43686,57985,'Graphite Gray Metallic','9-Speed Automatic','AWD','used/Mercedes-Benz/2020-Mercedes-Benz-AMG-GT-53-87c8f5e5ac18347aee8c697df4136e8f.htm'],
['C1122',2022,'Mercedes-Benz','AMG SL 63','4MATIC','W1KVK8BB9NF010131',7500,116985,'Manufaktur Alpine Gray','9-Speed Automatic','AWD','used/Mercedes-Benz/2022-Mercedes-Benz-AMG-SL-63-8a8ec256ac180e99be2ff67d08289950.htm'],
['C1015',2023,'Mercedes-Benz','Maybach S 580','4MATIC','W1K6X7GB4PA197786',31047,110985,'Manufaktur Cashmere White Magno','9-Speed Automatic','AWD','used/Mercedes-Benz/2023-Mercedes-Benz-Maybach-S-580-b73bb08fac180cb6fbf5ec4917462f52.htm'],
['1115',2019,'Porsche','718 Cayman','GTS','WP0AB2A83KS278350',6836,89985,'GT Silver','7-Speed PDK','RWD','used/Porsche/2019-Porsche-718-Cayman-64ccf5afac18155969bd56a94e1c1ab1.htm'],
['1129',2013,'Porsche','911','Carrera S','WP0AB2A92DS121713',10474,100985,'White','7-Speed','RWD','used/Porsche/2013-Porsche-911-ad4c350dac182917f2b474940bcf03f5.htm'],
['1097',2014,'Porsche','911','Turbo','WP0AD2A98ES167526',35733,125993,'Agate Gray','7-Speed PDK','AWD','used/Porsche/2014-Porsche-911-f8a1eafaac185c8404187aceb5fa3dd0.htm'],
['C1121',2024,'Porsche','911','Turbo S','WP0CD2A92RS257026',1392,325985,'','8-Speed PDK','AWD','used/Porsche/2024-Porsche-911-8a8ebf85ac180ee004f7d21ea58413b0.htm'],
['C1102',2022,'Porsche','911','Turbo S','WP0CD2A94NS260116',19268,240985,'Chalk','8-Speed PDK','AWD','used/Porsche/2022-Porsche-911-1cb0493bac1840bc3dde7e4320a8c2c6.htm'],
['C1136',2021,'Porsche','Taycan','4S','WP0AB2Y1XMSA44544',63360,55985,'','2-Speed Automatic','AWD','used/Porsche/2021-Porsche-Taycan-c6a96558ac1859095d9be20d603c19ce.htm'],
['1110',2024,'Ram','1500','TRX','1C6SRFU92RN113689',41393,85985,'Diamond Black Crystal Pearlcoat','8-Speed Automatic','4WD','used/Ram/2024-Ram-1500-5a81d6daac1827bdf324c55b8617d20d.htm'],
['1080',2022,'Ram','1500','TRX','1C6SRFU95NN216115',50949,72485,'Bright White','8-Speed Automatic','4WD','used/Ram/2022-Ram-1500-6504cb3aac18013719a6da34777772bb.htm'],
['C1091',2019,'Rolls-Royce','Cullinan','Cullinan','SLA689X52KU114092',54951,199985,'Arctic White','8-Speed Automatic','AWD','used/Rolls-Royce/2019-Rolls-Royce-Cullinan-a18758b1ac184121ce021fae375882ff.htm'],
['1107A',2024,'Toyota','Camry','SE','4T1G11AK1RU880029',51794,25985,'Celestial Silver','8-Speed Automatic','FWD','used/Toyota/2024-Toyota-Camry-a3050feeac180452357e7dbbbee2905b.htm'],
['1067',2021,'Toyota','GR Supra','3.0 Premium','WZ1DB0C09MW046048',75623,44385,'Nitro Yellow','8-Speed Automatic','RWD','used/Toyota/2021-Toyota-GR-Supra-1cec0705ac182cb32dbc2639026f0df7.htm'],
['C1125',2023,'Toyota','GR Supra','3.0 Special Edition','WZ1DB0G06PW056194',8193,70985,'CU Later','6-Speed Manual','RWD','used/Toyota/2023-Toyota-GR-Supra-a44ca201ac18431504067597adfc8229.htm'],
['1088',2024,'Volkswagen','Golf GTI','2.0T Autobahn','WVWVA7CD3RW113400',41623,29985,'Reflex Silver Metallic','7-Speed DSG Automatic','FWD','used/Volkswagen/2024-Volkswagen-Golf-GTI-973aa0b8ac180aac8449eac6c53f02dc.htm'],
['1065A',2024,'Volkswagen','Jetta','1.5T Sport','3VWBM7BU9RM053728',42712,18985,'Pure White','8-Speed Automatic','FWD','used/Volkswagen/2024-Volkswagen-Jetta-2bbc71f8ac1829bdac25aaf18c6e4166.htm']
] as const;

const ago=(days:number)=>new Date(new Date(capturedAt).getTime()-days*86400000).toISOString();
export const vehicles:Vehicle[]=rows.map((r,i)=>{const days=7+(i*11)%94,marketDelta=[-1800,-500,0,900,1700,2600][i%6],median=r[7]-marketDelta,leadCount=(i*3)%12;return{id:r[0],year:r[1],make:r[2],model:r[3],trim:r[4],vin:r[5],mileage:r[6],price:r[7],color:r[8],transmission:r[9],drivetrain:r[10],listingUrl:`https://www.lemastermotorcars.com/${r[11]}`,publicListing:true,cost:Math.round(r[7]*(.78+(i%5)*.018)/100)*100,marketLow:median-Math.round(r[7]*.035),marketMedian:median,marketHigh:median+Math.round(r[7]*.04),comps:5+(i*7)%24,acquiredAt:ago(days),source:['Trade','Auction','Consignment','Direct purchase'][i%4],status:'In stock',photosComplete:i%7!==0,recordsComplete:i%6!==0,views:180+(i*137)%2100,leads:leadCount,qualifiedLeads:Math.min(leadCount,(i*2)%5),testDrives:Math.min(leadCount,i%4),lastLeadAt:ago(i%13),lastFollowupAt:ago(i%8),consignment:i%4===2,remoteDeal:i%11===0,blockedStep:i%11===0?'Transport quote':undefined,owner:['Rob','Sales','Internet'][i%3],notes:'Public vehicle facts verified from LemasterMotorcars.com. Operational fields are synthetic demo estimates.',priceHistory:[{date:ago(days).slice(0,10),price:r[7]+(i%3)*1500},{date:'2026-09-22',price:r[7]}]}});
const stages=['New','Contacted','Qualified','Finance','Remote docs','Transport / title','Closed won','Closed lost'];
const leadSources=['Dealer website','Autotrader','Cars.com','Referral','Instagram'];
export const leads:Lead[]=Array.from({length:32},(_,i)=>({id:`DEMO-L-${1201+i}`,name:`Demo Shopper ${String(i+1).padStart(2,'0')}`,vehicleId:vehicles[(i*5)%vehicles.length].id,source:leadSources[i%leadSources.length],stage:stages[i%stages.length],createdAt:ago(1+(i*2)%28),lastActivityAt:ago(i%7),score:52+(i*7)%45,state:['AZ','CA','TX','CO','NV'][i%5]}));
export const seedStore:Store={vehicles,leads,actions:[],lastUpdated:capturedAt,dataSource:'hybrid-demo',sourceUrl:'https://www.lemastermotorcars.com/all-inventory/index.htm',dealership:{name:'Lemaster Motorcars',phone:'480-978-4120',address:'565 E Germann Rd Ste 101, Gilbert, AZ 85297',hours:'Mon–Fri 9–6 · Sat 10–4 · Sun closed'}};
