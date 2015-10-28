/**
 * Created by session2 on 10/22/15.
 */
var nameInput = document.getElementById("name");
var descInput = document.getElementById("desc");
var dateInput = document.getElementById("date");
var expInput = document.getElementById("exp");

        var tableOutput = document.getElementById("table");

        function update() {
               var newItem = getInputItem();
                updateTable(newItem);
            }
    function getInputItem() {
         var item = {
                    name: nameInput.value,
                    desc: descInput.value,
                    date: dateInput.value,
                    exp: expInput.value
            };
    return item;
}

        function updateTable(item) {
                    if(item.name == "" || item.desc == "" || item.date == "" || item.exp == "") return;
                    if (item.exp == isNaN)alert("please enter in a number for the expiration");
                        var tablerow = document.createElement("tr");
                var name = document.createElement("td");
                var desc = document.createElement("td");
                var date = document.createElement("td");
                var exp = document.createElement("td");

                name.innerHTML = item.name;
                desc.innerHTML = item.desc;
                date.innerHTML = item.date;
                exp.innerHTML = item.exp;
                        if(parseFloat(item.exp) < 3) tablerow.style.backgroundColor = "red";

                        tablerow.appendChild(name);
                tablerow.appendChild(desc);
                tablerow.appendChild(date);
                tablerow.appendChild(exp);
                tableOutput.appendChild(tablerow);}

//hide food tracker
$("#hide").click(function(){
    $("content").hide();
});

