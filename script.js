let studyVouchers = 5;
let relaxVouchers = 5;

function useStudyVoucher(){

  if(studyVouchers > 0){

    studyVouchers--;

    document.getElementById("study-count").innerText =
    studyVouchers;
  }
}

function useRelaxVoucher(){

  if(relaxVouchers > 0){

    relaxVouchers--;

    document.getElementById("relax-count").innerText =
    relaxVouchers;
  }
}
