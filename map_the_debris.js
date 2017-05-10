function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (var i = 0; i < arr.length; i++) {
    var avgAlt = arr[i].avgAlt;
    
    /*We used the formula 
    T = 2π √a^3 / gm
    
    -- Simbols --
    T = Orbital Period
    a = the sum of the Earth radius plus average altitude
    gm = gravitational parameter
    
    */
  	var period = (Math.PI * 2) * Math.sqrt((Math.pow((earthRadius + avgAlt), 3) / GM));
    
    //We delete de avgAlt property inside the object because we don't need it in the future
  	delete arr[i].avgAlt;
    // Now we add the orbitalPeriod to the object and go to check if is another element in the object to calculate
  	arr[i]['orbitalPeriod'] = Math.round(period);
  };


  return arr;

}



orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
