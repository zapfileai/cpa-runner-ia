const iowaCities = [
  "Humeston", "Huxley", "Independence", "Indianola", "Iowa City",
  "Iowa Falls", "Ireton", "Janesville", "Jefferson", "Jesup",
  "Johnston", "Kalona", "Kanawha", "Kellogg", "Keokuk",
  "Keosauqua", "Keota", "Kingsley", "Knoxville", "La Porte City",
  "Lake City", "Lake Mills", "Lamoni", "Lamont", "Larchwood",
  "Laurens", "Lawton", "Le Claire", "Le Mars", "Leighton",
  "Lenox", "Leon", "Letts", "Little Rock", "Long Grove",
  "Lu Verne", "Lynnville", "Madrid", "Manchester", "Manilla",
  "Manly", "Manning", "Manson", "Maquoketa", "Marathon",
  "Marion", "Marshalltown", "Mason City", "Maxwell", "Mechanicsville",
  "Mediapolis", "Menlo", "Merrill", "Middletown", "Milford",
  "Minburn", "Mingo", "Missouri Valley", "Mitchellville", "Mondamin",
  "Monmouth", "Monona", "Montezuma", "Monticello", "Montrose",
  "Moorhead", "Moravia", "Mount Ayr", "Mount Pleasant", "Mount Union",
  "Mount Vernon", "Moville", "Muscatine", "Nemaha", "Nevada",
  "New Albin", "New Hampton", "New London", "New Market", "New Vienna",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < iowaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(iowaCities[i]);
}

module.exports = { batches };
