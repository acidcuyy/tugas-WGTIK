function kenaRazia(date, data) {
  let tilang = [];
  for (let i = 0; i < data.length; i++) {
    let plat = data[i].plat;
    let rute = data[i].rute;
    let isGanjilGenap = false;
    for (let j = 0; j < rute.length; j++) {
      if (rute[j] === "Gajah Mada" || rute[j] === "Hayam Wuruk" || rute[j] === "Sisingamangaraja" || rute[j] === "Panglima Polim" || rute[j] === "Fatmawati" || rute[j] === "Tomang Raya") {
        let lastDigit = parseInt(plat.split(" ")[1].slice(-1));
        if (lastDigit % 2 === 0) {
          isGanjilGenap = true;
          break;
        }
      }
    }
    if (!isGanjilGenap) {
      tilang.push({ name: data[i].name, tilang: 1 });
    }
  }
  return tilang;
}

console.log(
  kenaRazia(27, [
    {
      name: "Denver",
      plat: "B 2791 KDS",
      type: "Mobil",
      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
    },
    {
      name: "Toni",
      plat: "B 1212 JBB",
      type: "Mobil",
      rute: [
        "Pintu Besar Selatan",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang"
      ]
    },
    {
      name: "Stark",
      plat: "B 444 XSX",
      type: "Motor",
      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
    },
    {
      name: "Anna",
      plat: "B 678 DD",
      type: "Mobil",
      rute: [
        "Fatmawati",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
        "Gajah Mada"
      ]
    }
  ])
);
