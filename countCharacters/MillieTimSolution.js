const countChars = (testString) =>
  testString.split("").reduce((prevValue, c) => {
    // adding to an existing var takes less computational power and time than spreading
    prevValue[c] ? (prevValue[c] = prevValue[c] + 1) : (prevValue[c] = 1);
    return prevValue;
  }, {});

module.exports = {
  countChars,
};

// You can see the difference in the time it takes by uncommented and running the code below:
/**
const { countChars: freddieCounter } = require("./freddieSolution");

const testData = `Snails that respire using a lung belong to the group Pulmonata. As traditionally defined, the Pulmonata were found to be polyphyletic in a molecular study per Jörger et al., dating from 2010.[3] But snails with gills also form a polyphyletic group; in other words, snails with lungs and snails with gills form a number of taxonomic groups that are not necessarily more closely related to each other than they are related to some other groups.Both snails that have lungs and snails that have gills have diversified so widely over geological time that a few species with gills can be found on land and numerous species with lungs can be found in freshwater. Even a few marine species have lungs.
    
Snails can be found in a very wide range of environments, including ditches, deserts, and the abyssal depths of the sea. Although land snails may be more familiar to laymen, marine snails constitute the majority of snail species, and have much greater diversity and a greater biomass. Numerous kinds of snail can also be found in fresh water.

Most snails have thousands of microscopic tooth-like structures located on a banded ribbon-like tongue called a radula. The radula works like a file, ripping food into small pieces. Many snails are herbivorous, eating plants or rasping algae from surfaces with their radulae, though a few land species and many marine species are omnivores or predatory carnivores. Snails cannot absorb colored pigments when eating paper or cardboard so their feces are also colored.[4]

Several species of the genus Achatina and related genera are known as giant African land snails; some grow to 15 in (38 cm) from snout to tail, and weigh 1 kg (2 lb).[5] The largest living species of sea snail is Syrinx aruanus; its shell can measure up to 90 cm (35 in) in length, and the whole animal with the shell can weigh up to 18 kg (40 lb). Recently, the smallest land snails, Angustopila dominikae, have been discovered in China, and measure 0.86mm long.[6]
File:Snail moving on ground.webmPlay media
Snail moving on a wet ground
File:Snail moving across leaves.webmPlay media
Snail moving across leaves.

The snail Lymnaea makes decisions by using only two types of neurons: one deciding whether the snail is hungry, and the other deciding whether there is food in the vicinity.[7]

The largest known land gastropod is the African giant snail Achatina achatina, the largest recorded specimen of which measured 39.3 centimetres (15.5 in) from snout to tail when fully extended, with a shell length of 27.3 cm (10.7 in) in December 1978. It weighed exactly 900 g (2 lb). Named Gee Geronimo, this snail was owned by Christopher Hudson (1955–79) of Hove, East Sussex, UK, and was collected in Sierra Leone in June 1976.[8]`;
const time = Date.now();
countChars(testData + testData + testData + testData);
const timeEnd = Date.now() - time;

const freddieTime = Date.now();
freddieCounter(testData + testData + testData + testData);
const freddieTimeEnd = Date.now() - freddieTime;

// 1ms vs 285ms
console.log(timeEnd, freddieTimeEnd);
*/
