const iowaCities = [
  "Ackley", "Adair", "Adel", "Afton", "Agency",
  "Ainsworth", "Albert City", "Albia", "Algona", "Alleman",
  "Alta", "Alta Vista", "Alton", "Altoona", "Alvord",
  "Amana", "Ames", "Anamosa", "Anita", "Ankeny",
  "Aplington", "Arcadia", "Arion", "Armstrong", "Arnolds Park",
  "Atkins", "Atlantic", "Audubon", "Aurora", "Avoca",
  "Bagley", "Bancroft", "Barnum", "Bedford", "Belle Plaine",
  "Bellevue", "Belmond", "Bernard", "Bettendorf", "Bloomfield",
  "Blue Grass", "Bode", "Bondurant", "Boone", "Brandon",
  "Breda", "Bridgewater", "Britt", "Bronson", "Brooklyn",
  "Burlington", "Calamus", "Camanche", "Cambridge", "Carlisle",
  "Carroll", "Cascade", "Cedar Falls", "Cedar Rapids", "Center Point",
  "Centerville", "Central City", "Chariton", "Charles City", "Charter Oak",
  "Cherokee", "Clare", "Clarence", "Clarinda", "Clarion",
  "Clarksville", "Clear Lake", "Clinton", "Clive", "Colfax",
  "Colo", "Conrad", "Coon Rapids", "Coralville", "Corning",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < iowaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(iowaCities[i]);
}

module.exports = { batches };
