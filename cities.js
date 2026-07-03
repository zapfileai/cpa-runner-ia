const iowaCities = [
  "New Virginia", "Newell", "Newton", "Nora Springs", "North English",
  "North Liberty", "Northwood", "Norwalk", "Norway", "Oakland",
  "Oelwein", "Ogden", "Okoboji", "Onawa", "Orange City",
  "Orient", "Osage", "Osceola", "Oskaloosa", "Ossian",
  "Otley", "Ottumwa", "Oxford", "Pacific Junction", "Palo",
  "Panora", "Parkersburg", "Pella", "Peosta", "Perry",
  "Pleasant Hill", "Pleasant Valley", "Polk City", "Portsmouth", "Postville",
  "Prairie City", "Princeton", "Prole", "Ralston", "Reasnor",
  "Red Oak", "Redfield", "Reinbeck", "Rembrandt", "Remsen",
  "Renwick", "Rhodes", "Robins", "Rock Rapids", "Rock Valley",
  "Rockwell", "Roland", "Runnells", "Sac City", "Saint Ansgar",
  "Saint Charles", "Salix", "Schaller", "Schleswig", "Sergeant Bluff",
  "Sheffield", "Shelby", "Sheldon", "Shell Rock", "Shenandoah",
  "Sherrill", "Sioux Center", "Sioux City", "Sioux Rapids", "Slater",
  "Solon", "Spencer", "Spirit Lake", "Springville", "Stanhope",
  "State Center", "Steamboat Rock", "Stockport", "Stockton", "Storm Lake",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < iowaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(iowaCities[i]);
}

module.exports = { batches };
