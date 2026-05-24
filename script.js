let vouchers = 5;

function useVoucher(){

  if(vouchers > 0){

    vouchers--;

    document.getElementById("voucher-count").innerText = vouchers;
  }
}
