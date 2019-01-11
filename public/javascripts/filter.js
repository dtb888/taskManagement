function filterSearch() {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	
	// Loop through all table rows, and hide those who don't match the search query
	for (i = 1; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function filterAll() {
	// Declare variables
	var table, tr, td, i, txtValue;

	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	
	// Loop through all table rows, and hide those who don't match the search query
	for (i = 1; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[5];
		if (td) {
				tr[i].style.display = "";
		}
	}
}


function filterCompleted() {
	// Declare variables
	var table, tr, td, i, txtValue;

	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	
	// Loop through all table rows, and hide those who don't match the search query
	for (i = 1; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[6];
		if (td) {
			txtValue = td.textContent;
			if (txtValue == "Yes") {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function filterUncompleted() {
	// Declare variables
	var table, tr, td, i, txtValue;

	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	
	// Loop through all table rows, and hide those who don't match the search query
	for (i = 1; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[6];
		if (td) {
			txtValue = td.textContent;
			if (txtValue == "No") {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}


function filterOverdue() {
	// Declare variables
	var table, tr, td, i, txtValue;

	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	
	// Loop through all table rows, and hide those who don't match the search query
	for (i = 1; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[3];
		if (td) {
			txtValue = Date.parse(td.textContent);
			let today = Date.parse(Date())
			if (txtValue < today) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function filterCompletedLastMonth() {
	// Declare variables
	var table, tr, td, i, txtValue;

	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	
	// Loop through all table rows, and hide those who don't match the search query
	for (i = 1; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[3];
		if (td) {
			txtValue = Date.parse(td.textContent);
			let today = Date.parse(Date());
			let lastMonth = Date.parse(Date()) - 2592000000;
			let tdComp = tr[i].getElementsByTagName('td')[6]
			if (txtValue > lastMonth && txtValue < today && tdComp == "Yes") {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}
