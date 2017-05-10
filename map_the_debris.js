function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (var i = 0; i < arr.length; i++) {

  	var period = (Math.PI * 2) * Math.sqrt((Math.pow((earthRadius + arr[i].avgAlt), 3) / GM));

  	delete arr[i].avgAlt;
  	arr[i]['orbitalPeriod'] = Math.round(period);
  };


  return arr;

}



orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
