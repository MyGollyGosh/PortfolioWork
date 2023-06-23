// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
}
  
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
}
//The above was the pre-provided code.

function pAequorFactory (num, dna) {
    return {
        specimenNum: num,
        dna: dna,
        mutate: function () {
            let mutated = false;
            while (!mutated) {
                const randIndex = Math.floor(Math.random() * this.dna.length);
                const mutation = returnRandBase();
                if (this.dna[randIndex] !== mutation) {
                    this.dna[randIndex] = mutation;
                    mutated = true;
                }
            };
        return this.dna;
        }, /*first function for pAequor. This will randomly access one of the bases (A, T, C, or G at a random index) in the dna key and
            retrun the new dna value with the random base mutated into a diferent base*/
        compareDNA: function (otherSpecimen) {
            let sharedDNA = 0;
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === otherSpecimen.dna[i])
                sharedDNA += 6.6667;
            }
            console.log(`P. eaquor specimen  #${this.specimenNum} and #${otherSpecimen.specimenNum} share ${sharedDNA}% DNA with eachother!`)
        }, /*the second function for the object. Compares the dna key value pairs of the other entered object and logs to the console the 
            specimen numbers entered and what % DNA they share.*/
        willLikelySurvive: function () {
            let survivalChance = 0;
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === `C` || this.dna[i] === `G`) {
                    survivalChance += 6.6667;
                };
            }
            return survivalChance >= 60;
        }, /*final function of the object. This object will determine whether the survival chance of the DNA is over 60%. It checks
            whether the C and G DNA bases are present and stores the value. When it has checked all the DNA values it will return true
            if the survival chance is above 60% or false if below */
    };
};

function createViablePAequor(numRequired) {
    let pAequor = [];
    let i = 0;
  
    while (pAequor.length < numRequired) {
      let specimen = pAequorFactory(i, mockUpStrand());
      if (specimen.willLikelySurvive()) {
        pAequor.push(specimen);
      }
      i++;
    }
  
    console.log(pAequor.length);
    return pAequor;
  }
  
  console.log(createViablePAequor(30));
  
/*this is a function to create pAequor with a high survival chance. When called with the desired amount of specimens wanted it 
will run and create specimen checking if the survival chance is over 60% (if the willLikelySurvive function above returns true)
and stores them the array pAequor until the desired number is met.

Below is some commented out code from testing and trouble shooting the code.*/
// const specimen1 = pAequorFactory(1);
// const specimen2 = pAequorFactory(2);
// console.log(specimen1.dna);
// console.log(specimen2.dna);
// console.log(specimen1.willLikelySurvive());
// console.log(specimen2.willLikelySurvive());
// specimen1.compareDNA(specimen2)
// console.log(specimen1);
// console.log(specimen1.mutate());