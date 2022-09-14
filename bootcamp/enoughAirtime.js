export default function enoughAirtime(usage, amount) {
    var callsDataAndSms = usage.split(',');
    var calls = 0;
    var sms = 0;
    var data = 0;
    for (var i=0; i<callsDataAndSms.length; i++) {
      var current = callsDataAndSms[i].trim();
            if (current.startsWith('c')) {
                 calls++; 
          } if (current.startsWith('s')) {
            sms++;
          } if (current.startsWith('d')) {
            data++;
  }
  } 
    var totalBills = (calls * 1.88 ) + (sms * 0.75) + (data * 12)
    let airtime = amount - totalBills
    if (airtime<=0) {
    return "R0.00";
    } else
      return 'R'+airtime.toFixed(2);
    
      
  }