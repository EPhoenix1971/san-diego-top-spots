
$(document).ready(function() {
        
  $.getJSON('data.JSON', function (data){
    for (i = 0; i < data.length; i++) { 
                
      var table = document.getElementById("table");
      var row = table.insertRow(i);
      var cellFirst = row.insertCell(0);
      var cellSecond = row.insertCell(1);
      var cellThird = row.insertCell(2);
      
        cellFirst.innerHTML = data[i].name;
        cellSecond.innerHTML = data[i].description;
        cellThird.innerHTML = "<a href='https://www.google.com/maps?q=" + data[i].location + "'>" +'Link' +"</a>"
    };
  });
})
    
  

 // i used w3 schools Table insertRow() Method, Table Rows Collection, JS getElementById
 
 //INSTRUCTIONS FOR PROJECT
//Using the command prompt open the project folder in VS Code: code ~/projects/web102-san-diego-top-spots.md
/*Run: npm install
Write your code in the index.html file and a corresponding main.js file.
Add a title to the page with 'San Diego Top Spots' as the text.
Add an H1 with 'San Diego Top Spots' as the text.
Create an HTML table structure with the headers you see in the image above.
Also make sure you reference your main.js before the </body> tag.
Write the following JavaScript in your main.js file:
Use the $.getJSON method to download the contents of the data.json file.
Iterate through the top spots and create a table row for each spot.
Create a link to the location using the longitude and latitude provided. (Example https://www.google.com/maps?q=33.09745,-116.99572)
To start/test your application in your browser - Run static . to start a web server that you can access by going to http://localhost:8080. 
You MUST follow this step and use a 
static web server in order to read in the contents of a file on your local file system as required in this project.*/







