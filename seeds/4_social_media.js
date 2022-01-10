
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('social_media').del()
    .then(function () {
      // Inserts seed entries
      return knex('social_media').insert([
        {farm_id: 1, date: '2022-1-7', visit:822},
        {farm_id: 1, date: '2022-1-6', visit:602},
        {farm_id: 1, date: '2022-1-5', visit:1037},
        {farm_id: 1, date: '2022-1-4', visit:1022},
        {farm_id: 1, date: '2022-1-3', visit:1419},
        {farm_id: 1, date: '2022-1-2', visit:1445},
        {farm_id: 1, date: '2022-1-1', visit:1061},
        {farm_id: 1, date: '2021-12-31', visit:636},
        {farm_id: 1, date: '2021-12-30', visit:1050},
        {farm_id: 1, date: '2021-12-29', visit:611},
        {farm_id: 1, date: '2021-12-28', visit:786},
        {farm_id: 1, date: '2021-12-27', visit:450},
        {farm_id: 1, date: '2021-12-26', visit:482},
        {farm_id: 1, date: '2021-12-25', visit:416},
        {farm_id: 1, date: '2021-12-24', visit:639},
        {farm_id: 1, date: '2021-12-23', visit:1453},
        {farm_id: 1, date: '2021-12-22', visit:1139},
        {farm_id: 1, date: '2021-12-21', visit:1164},
        {farm_id: 1, date: '2021-12-20', visit:634},
        {farm_id: 1, date: '2021-12-19', visit:912},
        {farm_id: 1, date: '2021-12-18', visit:704},
        {farm_id: 1, date: '2021-12-17', visit:691},
        {farm_id: 1, date: '2021-12-16', visit:671},
        {farm_id: 1, date: '2021-12-15', visit:1136},
        {farm_id: 1, date: '2021-12-14', visit:930},
        {farm_id: 1, date: '2021-12-13', visit:1336},
        {farm_id: 1, date: '2021-12-12', visit:322},
        {farm_id: 1, date: '2021-12-11', visit:1326},
        {farm_id: 1, date: '2021-12-10', visit:1323},
        {farm_id: 1, date: '2021-12-9', visit:632},
        {farm_id: 1, date: '2021-12-8', visit:1278},
        {farm_id: 1, date: '2021-12-7', visit:708},
        {farm_id: 1, date: '2021-12-6', visit:646},
        {farm_id: 1, date: '2021-12-5', visit:966},
        {farm_id: 1, date: '2021-12-4', visit:1451},
        {farm_id: 1, date: '2021-12-3', visit:820},
        {farm_id: 1, date: '2021-12-2', visit:703},
        {farm_id: 1, date: '2021-12-1', visit:942},
        {farm_id: 1, date: '2021-11-30', visit:1481},
        {farm_id: 1, date: '2021-11-29', visit:1109},
        {farm_id: 1, date: '2021-11-28', visit:494},
        {farm_id: 1, date: '2021-11-27', visit:662},
        {farm_id: 1, date: '2021-11-26', visit:1119},
        {farm_id: 1, date: '2021-11-25', visit:737},
        {farm_id: 1, date: '2021-11-24', visit:1314},
        {farm_id: 1, date: '2021-11-23', visit:731},
        {farm_id: 1, date: '2021-11-22', visit:305},
        {farm_id: 1, date: '2021-11-21', visit:404},
        {farm_id: 1, date: '2021-11-20', visit:447},
        {farm_id: 1, date: '2021-11-19', visit:502},
        {farm_id: 1, date: '2021-11-18', visit:1029},
        {farm_id: 1, date: '2021-11-17', visit:315},
        {farm_id: 1, date: '2021-11-16', visit:895},
        {farm_id: 1, date: '2021-11-15', visit:1036},
        {farm_id: 1, date: '2021-11-14', visit:1311},
        {farm_id: 1, date: '2021-11-13', visit:386},
        {farm_id: 1, date: '2021-11-12', visit:1364},
        {farm_id: 1, date: '2021-11-11', visit:619},
        {farm_id: 1, date: '2021-11-10', visit:835},
        {farm_id: 1, date: '2021-11-9', visit:1183},
        {farm_id: 1, date: '2021-11-8', visit:950},
        {farm_id: 1, date: '2021-11-7', visit:1449},
        {farm_id: 1, date: '2021-11-6', visit:1030},
        {farm_id: 1, date: '2021-11-5', visit:1173},
        {farm_id: 1, date: '2021-11-4', visit:1364},
        {farm_id: 1, date: '2021-11-3', visit:1258},
        {farm_id: 1, date: '2021-11-2', visit:1064},
        {farm_id: 1, date: '2021-11-1', visit:305},
        {farm_id: 1, date: '2021-10-31', visit:1115},
        {farm_id: 1, date: '2021-10-30', visit:469},
        {farm_id: 1, date: '2021-10-29', visit:702},
        {farm_id: 1, date: '2021-10-28', visit:622},
        {farm_id: 1, date: '2021-10-27', visit:615},
        {farm_id: 1, date: '2021-10-26', visit:489},
        {farm_id: 1, date: '2021-10-25', visit:745},
        {farm_id: 1, date: '2021-10-24', visit:377},
        {farm_id: 1, date: '2021-10-23', visit:1317},
        {farm_id: 1, date: '2021-10-22', visit:1209},
        {farm_id: 1, date: '2021-10-21', visit:784},
        {farm_id: 1, date: '2021-10-20', visit:703},
        {farm_id: 1, date: '2021-10-19', visit:307},
        {farm_id: 1, date: '2021-10-18', visit:526},
        {farm_id: 1, date: '2021-10-17', visit:853},
        {farm_id: 1, date: '2021-10-16', visit:534},
        {farm_id: 1, date: '2021-10-15', visit:1480},
        {farm_id: 1, date: '2021-10-14', visit:366},
        {farm_id: 1, date: '2021-10-13', visit:1368},
        {farm_id: 1, date: '2021-10-12', visit:1466},
        {farm_id: 1, date: '2021-10-11', visit:489},
        {farm_id: 1, date: '2021-10-10', visit:711},
        {farm_id: 1, date: '2021-10-9', visit:449},
        {farm_id: 1, date: '2021-10-8', visit:403},
        {farm_id: 1, date: '2021-10-7', visit:1040},
        {farm_id: 1, date: '2021-10-6', visit:896},
        {farm_id: 1, date: '2021-10-5', visit:941},
        {farm_id: 1, date: '2021-10-4', visit:579},
        {farm_id: 1, date: '2021-10-3', visit:926},
        {farm_id: 1, date: '2021-10-2', visit:1355},
        {farm_id: 1, date: '2021-10-1', visit:500},
        {farm_id: 1, date: '2021-9-30', visit:670},
        {farm_id: 1, date: '2021-9-29', visit:1472},
        {farm_id: 1, date: '2021-9-28', visit:720},
        {farm_id: 1, date: '2021-9-27', visit:381},
        {farm_id: 1, date: '2021-9-26', visit:1382},
        {farm_id: 1, date: '2021-9-25', visit:1150},
        {farm_id: 1, date: '2021-9-24', visit:1478},
        {farm_id: 1, date: '2021-9-23', visit:1203},
        {farm_id: 1, date: '2021-9-22', visit:604},
        {farm_id: 1, date: '2021-9-21', visit:1007},
        {farm_id: 1, date: '2021-9-20', visit:884},
        {farm_id: 1, date: '2021-9-19', visit:446},
        {farm_id: 1, date: '2021-9-18', visit:608},
        {farm_id: 1, date: '2021-9-17', visit:1301},
        {farm_id: 1, date: '2021-9-16', visit:904},
        {farm_id: 1, date: '2021-9-15', visit:1388},
        {farm_id: 1, date: '2021-9-14', visit:395},
        {farm_id: 1, date: '2021-9-13', visit:305},
        {farm_id: 1, date: '2021-9-12', visit:871},
        {farm_id: 1, date: '2021-9-11', visit:1256},
        {farm_id: 1, date: '2021-9-10', visit:330},
        {farm_id: 1, date: '2021-9-9', visit:639},
        {farm_id: 1, date: '2021-9-8', visit:678},
        {farm_id: 1, date: '2021-9-7', visit:1294},
        {farm_id: 1, date: '2021-9-6', visit:1444},
        {farm_id: 1, date: '2021-9-5', visit:979},
        {farm_id: 1, date: '2021-9-4', visit:1450},
        {farm_id: 1, date: '2021-9-3', visit:1360},
        {farm_id: 1, date: '2021-9-2', visit:647},
        {farm_id: 1, date: '2021-9-1', visit:845},
        {farm_id: 1, date: '2021-8-31', visit:1324},
        {farm_id: 1, date: '2021-8-30', visit:713},
        {farm_id: 1, date: '2021-8-29', visit:605},
        {farm_id: 1, date: '2021-8-28', visit:1409},
        {farm_id: 1, date: '2021-8-27', visit:1013},
        {farm_id: 1, date: '2021-8-26', visit:866},
        {farm_id: 1, date: '2021-8-25', visit:856},
        {farm_id: 1, date: '2021-8-24', visit:1006},
        {farm_id: 1, date: '2021-8-23', visit:1040},
        {farm_id: 1, date: '2021-8-22', visit:531},
        {farm_id: 1, date: '2021-8-21', visit:1478},
        {farm_id: 1, date: '2021-8-20', visit:764},
        {farm_id: 1, date: '2021-8-19', visit:656},
        {farm_id: 1, date: '2021-8-18', visit:1099},
        {farm_id: 1, date: '2021-8-17', visit:729},
        {farm_id: 1, date: '2021-8-16', visit:754},
        {farm_id: 1, date: '2021-8-15', visit:442},
        {farm_id: 1, date: '2021-8-14', visit:528},
        {farm_id: 1, date: '2021-8-13', visit:667},
        {farm_id: 1, date: '2021-8-12', visit:753},
        {farm_id: 1, date: '2021-8-11', visit:488},
        {farm_id: 1, date: '2021-8-10', visit:1201},
        {farm_id: 1, date: '2021-8-9', visit:727},
        {farm_id: 1, date: '2021-8-8', visit:441},
        {farm_id: 1, date: '2021-8-7', visit:1109},
        {farm_id: 1, date: '2021-8-6', visit:862},
        {farm_id: 1, date: '2021-8-5', visit:1020},
        {farm_id: 1, date: '2021-8-4', visit:733},
        {farm_id: 1, date: '2021-8-3', visit:616},
        {farm_id: 1, date: '2021-8-2', visit:1118},
        {farm_id: 1, date: '2021-8-1', visit:563},
        {farm_id: 1, date: '2021-7-31', visit:618},
        {farm_id: 1, date: '2021-7-30', visit:790},
        {farm_id: 1, date: '2021-7-29', visit:678},
        {farm_id: 1, date: '2021-7-28', visit:334},
        {farm_id: 1, date: '2021-7-27', visit:939},
        {farm_id: 1, date: '2021-7-26', visit:557},
        {farm_id: 1, date: '2021-7-25', visit:932},
        {farm_id: 1, date: '2021-7-24', visit:1362},
        {farm_id: 1, date: '2021-7-23', visit:442},
        {farm_id: 1, date: '2021-7-22', visit:1496},
        {farm_id: 1, date: '2021-7-21', visit:740},
        {farm_id: 1, date: '2021-7-20', visit:433},
        {farm_id: 1, date: '2021-7-19', visit:1285},
        {farm_id: 1, date: '2021-7-18', visit:540},
        {farm_id: 1, date: '2021-7-17', visit:1346},
        {farm_id: 1, date: '2021-7-16', visit:625},
        {farm_id: 1, date: '2021-7-15', visit:469},
        {farm_id: 1, date: '2021-7-14', visit:679},
        {farm_id: 1, date: '2021-7-13', visit:888},
        {farm_id: 1, date: '2021-7-12', visit:1169},
        {farm_id: 1, date: '2021-7-11', visit:539},
        {farm_id: 1, date: '2021-7-10', visit:1354},
        {farm_id: 1, date: '2021-7-9', visit:923},
        {farm_id: 1, date: '2021-7-8', visit:603},
        {farm_id: 1, date: '2021-7-7', visit:1407},
        {farm_id: 1, date: '2021-7-6', visit:1376},
        {farm_id: 1, date: '2021-7-5', visit:1325},
        {farm_id: 1, date: '2021-7-4', visit:479},
        {farm_id: 1, date: '2021-7-3', visit:534},
        {farm_id: 1, date: '2021-7-2', visit:558},
        {farm_id: 1, date: '2021-7-1', visit:750},
        {farm_id: 1, date: '2021-6-30', visit:658},
        {farm_id: 1, date: '2021-6-29', visit:349},
        {farm_id: 1, date: '2021-6-28', visit:409},
        {farm_id: 1, date: '2021-6-27', visit:1007},
        {farm_id: 1, date: '2021-6-26', visit:899},
        {farm_id: 1, date: '2021-6-25', visit:745},
        {farm_id: 1, date: '2021-6-24', visit:982},
        {farm_id: 1, date: '2021-6-23', visit:1391},
        {farm_id: 1, date: '2021-6-22', visit:888},
        {farm_id: 1, date: '2021-6-21', visit:666},
        {farm_id: 1, date: '2021-6-20', visit:1494},
        {farm_id: 1, date: '2021-6-19', visit:1144},
        {farm_id: 1, date: '2021-6-18', visit:797},
        {farm_id: 1, date: '2021-6-17', visit:1223},
        {farm_id: 1, date: '2021-6-16', visit:1334},
        {farm_id: 1, date: '2021-6-15', visit:931},
        {farm_id: 1, date: '2021-6-14', visit:615},
        {farm_id: 1, date: '2021-6-13', visit:1316},
        {farm_id: 1, date: '2021-6-12', visit:1468},
        {farm_id: 1, date: '2021-6-11', visit:736},
        {farm_id: 1, date: '2021-6-10', visit:1321},
        {farm_id: 1, date: '2021-6-9', visit:999},
        {farm_id: 1, date: '2021-6-8', visit:467},
        {farm_id: 1, date: '2021-6-7', visit:935},
        {farm_id: 1, date: '2021-6-6', visit:1414},
        {farm_id: 1, date: '2021-6-5', visit:874},
        {farm_id: 1, date: '2021-6-4', visit:582},
        {farm_id: 1, date: '2021-6-3', visit:848},
        {farm_id: 1, date: '2021-6-2', visit:389},
        {farm_id: 1, date: '2021-6-1', visit:775},
        {farm_id: 1, date: '2021-5-31', visit:1493},
        {farm_id: 1, date: '2021-5-30', visit:939},
        {farm_id: 1, date: '2021-5-29', visit:1431},
        {farm_id: 1, date: '2021-5-28', visit:1245},
        {farm_id: 1, date: '2021-5-27', visit:644},
        {farm_id: 1, date: '2021-5-26', visit:686},
        {farm_id: 1, date: '2021-5-25', visit:838},
        {farm_id: 1, date: '2021-5-24', visit:584},
        {farm_id: 1, date: '2021-5-23', visit:1413},
        {farm_id: 1, date: '2021-5-22', visit:982},
        {farm_id: 1, date: '2021-5-21', visit:1343},
        {farm_id: 1, date: '2021-5-20', visit:1290},
        {farm_id: 1, date: '2021-5-19', visit:1406},
        {farm_id: 1, date: '2021-5-18', visit:1228},
        {farm_id: 1, date: '2021-5-17', visit:1269},
        {farm_id: 1, date: '2021-5-16', visit:357},
        {farm_id: 1, date: '2021-5-15', visit:910},
        {farm_id: 1, date: '2021-5-14', visit:1278},
        {farm_id: 1, date: '2021-5-13', visit:552},
        {farm_id: 1, date: '2021-5-12', visit:458},
        {farm_id: 1, date: '2021-5-11', visit:1223},
        {farm_id: 1, date: '2021-5-10', visit:618},
        {farm_id: 1, date: '2021-5-9', visit:956},
        {farm_id: 1, date: '2021-5-8', visit:582},
        {farm_id: 1, date: '2021-5-7', visit:1088},
        {farm_id: 1, date: '2021-5-6', visit:1479},
        {farm_id: 1, date: '2021-5-5', visit:318},
        {farm_id: 1, date: '2021-5-4', visit:572},
        {farm_id: 1, date: '2021-5-3', visit:336},
        {farm_id: 1, date: '2021-5-2', visit:1462},
        {farm_id: 1, date: '2021-5-1', visit:612},
        {farm_id: 1, date: '2021-4-30', visit:1108},
        {farm_id: 1, date: '2021-4-29', visit:415},
        {farm_id: 1, date: '2021-4-28', visit:451},
        {farm_id: 1, date: '2021-4-27', visit:475},
        {farm_id: 1, date: '2021-4-26', visit:657},
        {farm_id: 1, date: '2021-4-25', visit:745},
        {farm_id: 1, date: '2021-4-24', visit:823},
        {farm_id: 1, date: '2021-4-23', visit:1157},
        {farm_id: 1, date: '2021-4-22', visit:1068},
        {farm_id: 1, date: '2021-4-21', visit:557},
        {farm_id: 1, date: '2021-4-20', visit:1341},
        {farm_id: 1, date: '2021-4-19', visit:815},
        {farm_id: 1, date: '2021-4-18', visit:648},
        {farm_id: 1, date: '2021-4-17', visit:534},
        {farm_id: 1, date: '2021-4-16', visit:304},
        {farm_id: 1, date: '2021-4-15', visit:1025},
        {farm_id: 1, date: '2021-4-14', visit:797},
        {farm_id: 1, date: '2021-4-13', visit:1435},
        {farm_id: 1, date: '2021-4-12', visit:1095},
        {farm_id: 1, date: '2021-4-11', visit:567},
        {farm_id: 1, date: '2021-4-10', visit:1271},
        {farm_id: 1, date: '2021-4-9', visit:751},
        {farm_id: 1, date: '2021-4-8', visit:474},
        {farm_id: 1, date: '2021-4-7', visit:321},
        {farm_id: 1, date: '2021-4-6', visit:1456},
        {farm_id: 1, date: '2021-4-5', visit:1293},
        {farm_id: 1, date: '2021-4-4', visit:515},
        {farm_id: 1, date: '2021-4-3', visit:1280},
        {farm_id: 1, date: '2021-4-2', visit:1329},
        {farm_id: 1, date: '2021-4-1', visit:1087},
        {farm_id: 1, date: '2021-3-31', visit:467},
        {farm_id: 1, date: '2021-3-30', visit:421},
        {farm_id: 1, date: '2021-3-29', visit:930},
        {farm_id: 1, date: '2021-3-28', visit:1470},
        {farm_id: 1, date: '2021-3-27', visit:675},
        {farm_id: 1, date: '2021-3-26', visit:1284},
        {farm_id: 1, date: '2021-3-25', visit:1157},
        {farm_id: 1, date: '2021-3-24', visit:369},
        {farm_id: 1, date: '2021-3-23', visit:1167},
        {farm_id: 1, date: '2021-3-22', visit:693},
        {farm_id: 1, date: '2021-3-21', visit:406},
        {farm_id: 1, date: '2021-3-20', visit:389},
        {farm_id: 1, date: '2021-3-19', visit:689},
        {farm_id: 1, date: '2021-3-18', visit:793},
        {farm_id: 1, date: '2021-3-17', visit:762},
        {farm_id: 1, date: '2021-3-16', visit:521},
        {farm_id: 1, date: '2021-3-15', visit:1233},
        {farm_id: 1, date: '2021-3-14', visit:926},
        {farm_id: 1, date: '2021-3-13', visit:1471},
        {farm_id: 1, date: '2021-3-12', visit:1216},
        {farm_id: 1, date: '2021-3-11', visit:432},
        {farm_id: 1, date: '2021-3-10', visit:1110},
        {farm_id: 1, date: '2021-3-9', visit:1128},
        {farm_id: 1, date: '2021-3-8', visit:579},
        {farm_id: 1, date: '2021-3-7', visit:454},
        {farm_id: 1, date: '2021-3-6', visit:1447},
        {farm_id: 1, date: '2021-3-5', visit:1493},
        {farm_id: 1, date: '2021-3-4', visit:866},
        {farm_id: 1, date: '2021-3-3', visit:1155},
        {farm_id: 1, date: '2021-3-2', visit:1022},
        {farm_id: 1, date: '2021-3-1', visit:1417},
        {farm_id: 1, date: '2021-2-28', visit:1182},
        {farm_id: 1, date: '2021-2-27', visit:1014},
        {farm_id: 1, date: '2021-2-26', visit:349},
        {farm_id: 1, date: '2021-2-25', visit:965},
        {farm_id: 1, date: '2021-2-24', visit:1214},
        {farm_id: 1, date: '2021-2-23', visit:1279},
        {farm_id: 1, date: '2021-2-22', visit:727},
        {farm_id: 1, date: '2021-2-21', visit:839},
        {farm_id: 1, date: '2021-2-20', visit:895},
        {farm_id: 1, date: '2021-2-19', visit:1474},
        {farm_id: 1, date: '2021-2-18', visit:993},
        {farm_id: 1, date: '2021-2-17', visit:914},
        {farm_id: 1, date: '2021-2-16', visit:1021},
        {farm_id: 1, date: '2021-2-15', visit:1173},
        {farm_id: 1, date: '2021-2-14', visit:1203},
        {farm_id: 1, date: '2021-2-13', visit:1370},
        {farm_id: 1, date: '2021-2-12', visit:1133},
        {farm_id: 1, date: '2021-2-11', visit:784},
        {farm_id: 1, date: '2021-2-10', visit:857},
        {farm_id: 1, date: '2021-2-9', visit:878},
        {farm_id: 1, date: '2021-2-8', visit:759},
        {farm_id: 1, date: '2021-2-7', visit:443},
        {farm_id: 1, date: '2021-2-6', visit:1371},
        {farm_id: 1, date: '2021-2-5', visit:1384},
        {farm_id: 1, date: '2021-2-4', visit:416},
        {farm_id: 1, date: '2021-2-3', visit:850},
        {farm_id: 1, date: '2021-2-2', visit:1255},
        {farm_id: 1, date: '2021-2-1', visit:1367},
        {farm_id: 1, date: '2021-1-31', visit:358},
        {farm_id: 1, date: '2021-1-30', visit:885},
        {farm_id: 1, date: '2021-1-29', visit:1005},
        {farm_id: 1, date: '2021-1-28', visit:528},
        {farm_id: 1, date: '2021-1-27', visit:1064},
        {farm_id: 1, date: '2021-1-26', visit:827},
        {farm_id: 1, date: '2021-1-25', visit:969},
        {farm_id: 1, date: '2021-1-24', visit:1103},
        {farm_id: 1, date: '2021-1-23', visit:1091},
        {farm_id: 1, date: '2021-1-22', visit:685},
        {farm_id: 1, date: '2021-1-21', visit:466},
        {farm_id: 1, date: '2021-1-20', visit:1361},
        {farm_id: 1, date: '2021-1-19', visit:1331},
        {farm_id: 1, date: '2021-1-18', visit:1240},
        {farm_id: 1, date: '2021-1-17', visit:595},
        {farm_id: 1, date: '2021-1-16', visit:580},
        {farm_id: 1, date: '2021-1-15', visit:339},
        {farm_id: 1, date: '2021-1-14', visit:1012},
        {farm_id: 1, date: '2021-1-13', visit:597},
        {farm_id: 1, date: '2021-1-12', visit:683},
        {farm_id: 1, date: '2021-1-11', visit:1083},
        {farm_id: 1, date: '2021-1-10', visit:1241},
        {farm_id: 1, date: '2021-1-9', visit:589},
        {farm_id: 1, date: '2021-1-8', visit:925},
        {farm_id: 1, date: '2021-1-7', visit:568},
        {farm_id: 2, date: '2022-1-7', visit:822},
        {farm_id: 2, date: '2022-1-6', visit:602},
        {farm_id: 2, date: '2022-1-5', visit:1037},
        {farm_id: 2, date: '2022-1-4', visit:1022},
        {farm_id: 2, date: '2022-1-3', visit:1419},
        {farm_id: 2, date: '2022-1-2', visit:1445},
        {farm_id: 2, date: '2022-1-1', visit:1061},
      ]);
    });
};
