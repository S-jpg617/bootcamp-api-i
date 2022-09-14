export default function totalPhoneBill(bills) {
    var callsAndSms = bills.split(',');
    var calls = 0;
    var sms = 0;
    for (var i=0; i<callsAndSms.length; i++) {
      var current = callsAndSms[i].trim();
            if (current.startsWith('c')) {
                 calls++; 
          } if (current.startsWith('s')) {
            sms++;
  }
  } 
    var totalBills = (calls * 2.75) + (sms * 0.65)
    return 'R'+totalBills.toFixed(2);
  }