const iowaCities = [
  "Corydon", "Council Bluffs", "Crescent", "Cresco", "Creston",
  "Cumming", "Dallas Center", "Dana", "Danville", "Davenport",
  "De Witt", "Decorah", "Delmar", "Denison", "Denver",
  "Des Moines", "Diagonal", "Dike", "Dixon", "Donahue",
  "Doon", "Dow City", "Dubuque", "Dunkerton", "Dunlap",
  "Durango", "Durant", "Dyersville", "Dysart", "Eagle Grove",
  "Earlham", "Eldora", "Eldridge", "Elk Horn", "Elkader",
  "Elkhart", "Ellsworth", "Ely", "Emerson", "Emmetsburg",
  "Epworth", "Essex", "Estherville", "Evansdale", "Fairfax",
  "Fairfield", "Farley", "Fonda", "Fontanelle", "Forest City",
  "Fort Dodge", "Fort Madison", "Fremont", "Garner", "Gilbert",
  "Gilman", "Gladbrook", "Glenwood", "Goldfield", "Grafton",
  "Grand Junction", "Granger", "Greenfield", "Grimes", "Grinnell",
  "Griswold", "Grundy Center", "Guthrie Center", "Guttenberg", "Hampton",
  "Harlan", "Harpers Ferry", "Hiawatha", "Hinton", "Holstein",
  "Holy Cross", "Homestead", "Hudson", "Hull", "Humboldt",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < iowaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(iowaCities[i]);
}

module.exports = { batches };
