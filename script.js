/********************************

assume you have 3 subjects with 3 reqs each subject, not 1st quarter
- get tentative grades per subject
- ask for previous grade
- get final grades
- get average grade (of the 3 final grades)
- round to nearest Pisay GWA grade for the quarter


*********************************/

var prevbio = parseInt(prompt("Previous Quarter's Grade for Biology (Grade Equivalent, ex. 95 - not converted please)", "0"));
var prevchem = parseInt(prompt("Previous Quarter's Grade for Chemistry (Grade Equivalent, ex. 95 - not converted please)", "0"));
var prevphy = parseInt(prompt("Previous Quarter's Grade for Physics (Grade Equivalent, ex. 95 - not converted please)", "0"));
askScores(prevbio, prevchem, prevphy);

function getScores(){
  let bioreq1 = parseInt(document.querySelector("#bioreq1").value);
  let bioreq2 = parseInt(document.querySelector("#bioreq2").value);
  let bioreq3 = parseInt(document.querySelector("#bioreq3").value);

  let chemreq1 = parseInt(document.querySelector("#chemreq1").value);
  let chemreq2 = parseInt(document.querySelector("#chemreq2").value);
  let chemreq3 = parseInt(document.querySelector("#chemreq3").value);

  let phyreq1 = parseInt(document.querySelector("#phyreq1").value);
  let phyreq2 = parseInt(document.querySelector("#phyreq2").value);
  let phyreq3 = parseInt(document.querySelector("#phyreq3").value);

  console.log(bioreq1 + bioreq2 + bioreq3);
  console.log(chemreq1 + chemreq2 + chemreq3);
  console.log(phyreq1 + phyreq2 + phyreq3);
  
  getSum(bioreq1, bioreq2, bioreq3, chemreq1, chemreq2, chemreq3, phyreq1, phyreq2, phyreq3, prevbio, prevchem, prevphy);
}

function getSum(br1, br2, br3, cr1, cr2, cr3, pr1, pr2, pr3, prevbio, prevchem, prevphy){
  let biosum = br1+br2+br3;
  let chemsum = cr1+cr2+cr3;
  let physum = pr1+pr2+pr3;

  console.log(biosum);
  console.log(chemsum);
  console.log(physum);
  getPercent(biosum, chemsum, physum, prevbio, prevchem, prevphy);
}

function getPercent(biosum, chemsum, physum, prevbio, prevchem, prevphy){
  
  const HPS = 20+30+50;
  biopercentage = biosum/HPS * 100;
  chempercentage = chemsum/HPS * 100;
  phypercentage = physum/HPS * 100;
  
  console.log(biopercentage);
  console.log(chempercentage);
  console.log(phypercentage);
  document.write("Your tentative grade for Biology this quarter is " + biopercentage);
  document.write("<br>Your tentative grade for Chemistry this quarter is " + chempercentage);
  document.write("<br>Your tentative grade for Physics this quarter is " + phypercentage);
  getFinal(biopercentage, chempercentage, phypercentage, prevbio, prevchem, prevphy);
}


function getFinal(bp, cp, pp, prevbio, prevchem, prevphy) {
  let biofinal = (1/3 * prevbio) + (2/3 * bp);
  console.log(biofinal);
  let chemfinal = (1/3 * prevchem) + (2/3 * cp);
  console.log(chemfinal);
  let phyfinal = (1/3 * prevphy) + (2/3 * pp);

  console.log(biofinal);
  console.log(chemfinal);
  console.log(phyfinal);
  document.write("<br>Your final grade for Biology this quarter is " + biofinal);
  document.write("<br>Your final grade for Chemistry this quarter is " + chemfinal);
  document.write("<br>Your final grade for Physics this quarter is " + phyfinal);

  getAverage(biofinal, chemfinal, phyfinal);
}

function getAverage(bf, cf, pf) {
  let average = (bf+cf+pf)/3;
  console.log(average);

  document.write("<br>Your final grade for three subjects is " + average);

  getPisayGrade(average);
}

function getPisayGrade(a) {
  if (a>= 96){
    document.write("<br>Hi your pisay GWA grade is 1.00.");
  }
  if (a>= 90 && a<96){
    document.write("<br>Hi your pisay GWA grade is 1.25.");
  }
  if (a>= 84 && a<90){
    document.write("<br>Hi your pisay GWA grade is 1.50.");
  }
  if (a>= 78 && a<84){
    document.write("<br>Hi your pisay GWA grade is 1.75.");
  }
  if (a>= 72 && a<78){
    document.write("<br>Hi your pisay GWA grade is 2.00.");
  }
  if (a>= 66 && a<72){
    document.write("<br>Hi your pisay GWA grade is 2.25.");
  }
  if (a>= 60 && a<66){
    document.write("<br>Hi your pisay GWA grade is 2.50.");
  }
  if (a>= 55 && a<60){
    document.write("<br>Hi your pisay GWA grade is 2.75.");
  }
  if (a>= 50 && a<55){
    document.write("<br>Hi your pisay GWA grade is 3.00.");
  }
  if (a>= 40 && a<50){
    document.write("<br>Hi your pisay GWA grade is 4.00.");
  }
  if (a<40){
    document.write("<br>Hi your pisay GWA grade is 5.00.");
  }
}

function askScores(prevbio, prevchem, prevphy) {
  console.log(prevbio);
  console.log(prevchem);
  console.log(prevphy);
}
function calcGrade() {
  getScores();
}