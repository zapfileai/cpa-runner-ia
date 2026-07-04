const iowaCities = [
  "Story City", "Stuart", "Sully", "Sumner", "Sutherland",
  "Swan", "Swisher", "Tama", "Thornton", "Thurman",
  "Tiffin", "Tipton", "Titonka", "Toddville", "Toledo",
  "Traer", "Tripoli", "Underwood", "Unionville", "Urbandale",
  "Van Meter", "Villisca", "Vinton", "Walcott", "Walford",
  "Walker", "Wall Lake", "Wapello", "Washington", "Waterloo",
  "Waukee", "Waukon", "Waverly", "Webster City", "West Branch",
  "West Burlington", "West Des Moines", "West Liberty", "West Point", "West Union",
  "Wheatland", "Whittemore", "Williamsburg", "Windsor Heights", "Winfield",
  "Winterset", "Woden", "Woodbine", "Woodward", "Zearing",
  "Zwingle",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < iowaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(iowaCities[i]);
}

module.exports = { batches };
