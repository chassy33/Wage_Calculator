
var hourlyRateX = prompt('What is your Hourly Rate?');
var hourlyRate = (parseFloat(hourlyRateX, 10).toFixed(2));
var overtimeRate = hourlyRate * 1.5;

var week1X = prompt('How many hours did you work for Week 1?');
var week1 = parseFloat(week1X, 10);

var week2X = prompt('How many hours did you work for week 2?');
var week2 = parseFloat(week2X, 10);

document.write('Hourly Rate: $' + hourlyRate + "<br>");
document.write('Over Time Rate: $' + overtimeRate + "<br>");

var myTime = function(week1, week2) {
  var week1OverTime = week1 - 40;
  var week2OverTime = week2 - 40;
  var totalOverTime = week1OverTime + week2OverTime;
  var regularPay = 80 * hourlyRate
  var overTimePay = totalOverTime * overtimeRate
    
  if (week1 > 40 && week2 > 40) {
      document.write('regurlar hours: 80' + "<br>");
      document.write('overtime hours: ' + (week1OverTime + week2OverTime) + "<br>");
      document.write('total hours: ' + (week1 + week2) + "<br>");
      document.write('regular pay: $' + (80 * hourlyRate) + "<br>");
      document.write('overtime pay: $' + (totalOverTime * overtimeRate) + "<br>");
      document.write('total pay: $' + (overTimePay + regularPay) + "<br>");
  }
  
  else if (week1 > 40 && week2 <= 40) {
     document.write('regular hours: ' + (week2 + (week1 - week1OverTime)) + "<br>");
     document.write('overtime hours: ' + week1OverTime + "<br>");
     document.write('total hours: ' + (week1 + week2) + "<br>");
     document.write('regular pay: $' + ((40 + week2) * hourlyRate) + "<br>");
     document.write('overtime pay: $' + (week1OverTime * overtimeRate) + "<br>");
     document.write('total pay: $' + (((40 + week2) * hourlyRate) + (week1OverTime * overtimeRate)) + "<br>");
    
  }
  
  else if (week1 <= 40 && week2 > 40) {
        document.write('regular hours: ' + (week1 + (week2 - week2OverTime)) + "<br>");
        document.write('overtime hours: ' + week2OverTime + "<br>");
        document.write('total hours: ' + (week1 + week2) + "<br>");
        document.write('regular pay: $' + ((40 + week1) * hourlyRate) + "<br>");
        document.write('overtime pay: $' + (week2OverTime * overtimeRate) + "<br>");
        document.write('total pay: $' + (((40 + week1) * hourlyRate) + (week2OverTime * overtimeRate)) + "<br>");
  }
  
  else if (week1 <= 40 && week2 <= 40) {
        document.write('no overtime');
        document.write('total hours: ' + (week1 + week2) + "<br>");
        document.write('total pay: $' + ((week1 + week2) * hourlyRate) + "<br>");
  }
}

  myTime(week1, week2);