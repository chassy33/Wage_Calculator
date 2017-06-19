
var hourlyRate = 19.25;
var overtimeRate = hourlyRate * 1.5;

var myTime = function(week1, week2) {
  var week1OverTime = week1 - 40;
  var week2OverTime = week2 - 40;
  var totalOverTime = week1OverTime + week2OverTime;
  var regularPay = 80 * hourlyRate
  var overTimePay = totalOverTime * overtimeRate
    if (week1 > 40 && week2 > 40) {
      console.log('regurlar hours: 80');
      console.log('overtime hours: ' + (week1OverTime + week2OverTime));
      console.log('total hours: ' + (week1 + week2));
      console.log('regular pay: $' + (80 * hourlyRate));
      console.log('overtime pay: $' + (totalOverTime * overtimeRate));
      console.log('total pay: $' + (overTimePay + regularPay));
    }
  
      else if (week1 > 40 && week2 <= 40) {
        console.log('regular hours: ' + (week2 + (week1 - week1OverTime)));
        console.log('overtime hours: ' + week1OverTime);
        console.log('total hours: ' + (week1 + week2));
        console.log('regular pay: $' + ((40 + week2) * hourlyRate));
        console.log('overtime pay: $' + (week1OverTime * overtimeRate));
        console.log('total pay: $' + (((40 + week2) * hourlyRate) + (week1OverTime * overtimeRate)));
    
  }
  
  else if (week1 <= 40 && week2 > 40) {
        console.log('regular hours: ' + (week1 + (week2 - week2OverTime)));
        console.log('overtime hours: ' + week2OverTime);
        console.log('total hours: ' + (week1 + week2));
        console.log('regular pay: $' + ((40 + week1) * hourlyRate));
        console.log('overtime pay: $' + (week2OverTime * overtimeRate));
        console.log('total pay: $' + (((40 + week1) * hourlyRate) + (week2OverTime * overtimeRate)));
}
  
  else if (week1 <= 40 && week2 <= 40) {
        console.log('no overtime');
        console.log('total hours: ' + (week1 + week2));
        console.log('total pay: $' + ((week1 + week2) * hourlyRate));
  }
}

  myTime(42,42);