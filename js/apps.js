// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v1 = {
  name: "Travis",
  version: "A",
  date: "2022",
  folder: "asset-v1/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 12000,
  bpm: 80,
  totalframe: 576,
  nbpolo: 7,
  bonusloopA: true, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "#001c44",
  col0: "#0086d1",
  col1: "#1b4e91",
  col2: "#193e6f",
  col3: "#0d284c",
  col4: "#0a1c33",
  animearray: [
    {
      name: "1_kick",
      color: "860788",
      uniqsnd: !1, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "2_clap",
      color: "860788",
      uniqsnd: !1,
    },
    {
      name: "3_snap",
      color: "860788",
      uniqsnd: !0,
    },
    {
      name: "4_tuctuc",
      color: "860788",
      uniqsnd: !1,
    },
    {
      name: "5_poom",
      color: "860788",
      uniqsnd: !1,
    },
    {
      name: "6_bass",
      color: "35b535",
      uniqsnd: !1,
    },
    {
      name: "7_clicky",
      color: "35b535",
      uniqsnd: !1,
    },
    {
      name: "8_satellite",
      color: "35b535",
      uniqsnd: !1,
    },
    {
      name: "9_echo",
      color: "35b535",
      uniqsnd: !1,
    },
    {
      name: "10_steam",
      color: "35b535",
      uniqsnd: !1,
    },
    {
      name: "11_hooh",
      color: "cb2d3e",
      uniqsnd: !1,
    },
    {
      name: "12_flute",
      color: "cb2d3e",
      uniqsnd: !1,
    },
    {
      name: "13_euphoria",
      color: "cb2d3e",
      uniqsnd: !1,
    },
    {
      name: "14_siren",
      color: "cb2d3e",
      uniqsnd: !0,
    },
    {
      name: "15_arp",
      color: "cb2d3e",
      uniqsnd: !1,
    },
    {
      name: "16_lie",
      color: "005090",
      uniqsnd: !1,
    },
    {
      name: "17_mosaic",
      color: "005090",
      uniqsnd: !1,
    },
    {
      name: "18_knowledge",
      color: "005090",
      uniqsnd: !1,
    },
    {
      name: "19_toina",
      color: "005090",
      uniqsnd: !1,
    },
    {
      name: "20_clock",
      color: "005090",
      uniqsnd: !1,
    },
  ],
  bonusarray: [
    {
      name: "Terror",
      src: "b1-terror",
      code: "1,2,6,8,13",
      sound: "bonus-terror",
      aspire: "aspire-terror",
      loop: 3, // ← Every bonus have its own loops in this version
    },
    {
      name: "Time",
      src: "b2-time",
      code: "4,5,6,9,20",
      sound: "bonus-time",
      aspire: "aspire-time",
      loop: 3, // ← Every bonus have its own loops in this version
    },
    {
      name: "Travis",
      src: "b3-travis",
      code: "3,6,7,11,12",
      sound: "bonus-travis",
      aspire: "aspire-travis",
      loop: 3, // ← Every bonus have its own loops in this version
    },
  ],
};

// versions.v2 = {
//  name: "New Version",
// version: "2",
// date: "2025",
// ...