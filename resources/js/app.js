// api url
const api_url = "http://10.16.110.110:8086/itinfo";
const cas = "http://localhost:3000/";

async function GetAllNews(url) {   
		// Storing response
		const uri = api_url + "?_limit=8"
		const response = await fetch(url);
		// Storing data in form of JSON
		var data = await response.json();
		//console.log(data);
		if (response) {
			//hideloader();
		}
		ShowAllNews(data)
}
	// Calling that async function
	GetAllNews(api_url);

function ShowAllNews(data) {
	var table = ``
    for (let key of data){
		
		table += `
		<a href="#" class="card-link" onclick="GetMore(${key.id})">
        <div class="card" style="width: 100%; height: 10%; padding-left:1px;">
            <div class="card-body">
        	    <h5 class="card-title">${key.subject}</h5>
            	<h6 class="card-subtitle mb-2 text-muted">${key.date}</h6>
            	<p class="card-text">${key.summary}</p>
	        </div>
		</div>
		</a>

        `;
	}
	table += "";
	document.getElementById("BlackBoardCore").innerHTML = table;
}


async function GetHR(){
	const type = "HR"
	const uri = api_url +"?type="+type + "&_limit=8"
	
	const response = await fetch(uri);
    var data = await response.json();
	ShowHR(data)
}

function ShowHR(data){
	var table = ``
    for (let key of data){
		
		table += `
		<a href="#" class="card-link" onclick="GetMore(${key.id})">
        <div class="card" style="width: 100%; height: 10%; padding-left:1px;">
            <div class="card-body">
        	    <h5 class="card-title">${key.subject}</h5>
            	<h6 class="card-subtitle mb-2 text-muted">${key.date}</h6>
            	<p class="card-text">${key.summary}</p>
	        </div>
		</div>
		</a>

        `;
	}
	table += "";
	document.getElementById("BlackBoardCore").innerHTML = table;
}


async function GetBR(){
	const type = "BR"
	const uri = api_url +"?type="+type + "&_limit=8"
	
	const response = await fetch(uri);
    var data = await response.json();
	ShowBR(data)
}

function ShowBR(data){
	var table = ``
    for (let key of data){
		
		table += `
		<a BRef="#" class="card-link" onclick="GetMore(${key.id})">
        <div class="card" style="width: 100%; height: 10%; padding-left:1px;">
            <div class="card-body">
        	    <h5 class="card-title">${key.subject}</h5>
            	<h6 class="card-subtitle mb-2 text-muted">${key.date}</h6>
            	<p class="card-text">${key.summary}</p>
	        </div>
		</div>
		</a>

        `;
	}
	table += "";
	document.getElementById("BlackBoardCore").innerHTML = table;
}


async function GetIT(){
	const type = "IT"
	const uri = api_url +"?type="+type + "&_limit=8"
	
	const response = await fetch(uri);
    var data = await response.json();
	ShowIT(data)
}

function ShowIT(data){
	var table = ``
    for (let key of data){
		
		table += `
		<a ITef="#" class="card-link" onclick="GetMore(${key.id})">
        <div class="card" style="width: 100%; height: 10%; padding-left:1px;">
            <div class="card-body">
        	    <h5 class="card-title">${key.subject}</h5>
            	<h6 class="card-subtitle mb-2 text-muted">${key.date}</h6>
            	<p class="card-text">${key.summary}</p>
	        </div>
		</div>
		</a>

        `;
	}
	table += "";
	document.getElementById("BlackBoardCore").innerHTML = table;
}

async function GetMore(id){
	const uri = api_url +"/" +id
	
	const response = await fetch(uri);
    var data = await response.json();
	
	ShowMore(data)
	
}

function ShowMore(data){
	var table = `
	   <h1>${data.subject}</h1>
	   <p>${data.date}</p>
	   <hr>
	   ${data.Body}
	   <hr>
       <a href="#" class="btn btn-primary btn-lg active" role="button" onclick="GetAllNews(api_url)">Zurück</a>

	
	`

	document.getElementById("BlackBoardCore").innerHTML = table;
}


