async function refresh_table()
{
	//const tbl = document.createElement("table");
	//const tblBody = document.createElement("tbody");
	
	// TODO: Change function to use the getAll API call
	
	obj = await fetchAsync("http://137.184.49.130:8080/api/getAll");
	
	var tbl = $("<table/>").attr("id","mytable");
    $("#div1").append(tbl);
	var thead = $("<thead/>").attr("id","thead");
	$("#mytable").append(thead);

	// Table Headings
	var tr = "<tr>";
	var tr_end = "</tr>";
	var th1 = "<th>Part Name</th>";
	var th2 = "<th>Quantity</th>";
	$("#thead").append(tr+th1+th2+tr_end);

    for(var i=0;i<obj.length;i++)
    {
        var td1="<td>"+obj[i]["part"]+"</td>";
        var td2="<td>"+obj[i]["quant"]+"</td>";
		console.log(tr+td1+td2+tr_end);

       $("#mytable").append(tr+td1+td2+tr_end);
    }

	$("#mytable").attr("border", "2");
}

async function fetchAsync (url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
