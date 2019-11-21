// from data.js
var tableData = data;


var filterButton = d3.select("#filter-btn");
var dateTime = d3.select("#datetime");
var tbody = d3.select("tbody");
var resetButton= d3.select("#reset-btn");
var city = d3.select("#city");


tableData.forEach((ufo_sighting)=>{
  var row = tbody.append("tr");
  Object.entries(ufo_sighting).forEach(([key,value])=>{
      var cell = row.append("td");
      cell.text(value);
  });
});

filterButton.on("click", () => {
  d3.event.preventDefault();
  var inputDate = dateTime.property("value");
  var inputCity = city.property("value");

  var filterDate = tableData.filter(ufo_sighting => ufo_sighting.datetime === inputDate);
  console.log(filterDate)
  var filterCity = tableData.filter(ufo_sighting => ufo_sighting.city === inputCity);
  console.log(filterCity)
  var filterData = tableData.filter(ufo_sighting =>ufo_sighting.datetime === inputDate && ufo_sighting.city === inputCity);
  console.log(filterData)


  tbody.html("");

  var response = {
    filterData, filterCity, filterDate
  }
  
 
  if (response.filterData.length !== 0) {
    populate(filterData);
  }
    else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))){
      populate(filterCity) || populate(filterDate);
  
    }
    else {
      tbody.append("tr").append("td").text("No results found!"); 
    }
})

resetButton.on("click", () => {
  tbody.html("");
  populate(data)
  console.log("Table reset")
})

  

