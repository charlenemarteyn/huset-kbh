function getSingleEventById(myId){
    console.log(myId);
     fetch("http://charlene-marteyn.dk/mywpsite/wp-json/wp/v2/events/" + myId + "/?_embed")
        .then(res => res.json())
        .then(showSingleEvent);
}


//categories or tags
//if page has id, show tag list, else show full list

function showSingleEvent(json){
    console.log(json);
    document.querySelector("#single h1").textContent = json.title.rendered;
    document.querySelector("#single .date span").textContent = json.acf.date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3.$2.$1');
    document.querySelector("#single .price span").textContent = json.acf.price;
    let img = document.querySelector("img");
    img.setAttribute("src", json._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
    document.querySelector("#single .location span").textContent = json.acf.location;
    document.querySelector("#single .start-time span").textContent = json.acf.start_time;
    document.querySelector("#single .description").innerHTML = json.content.rendered;

}

let searchParams = new URLSearchParams(window.location.search);
let id = searchParams.get("id");
let categoryid = searchParams.get("categoryid");
//console.log(id);

getSingleEventById(id);

//route - if this is true, go here, if not, go there

