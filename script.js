// function to create a DOM elements
function element(tag, classname, id, text) {
    let tags = document.createElement(tag);
    tags.classList = classname;
    tags.id = id;
    tags.innerHTML = text;
    return tags;
  }
  
  //creating a container,heading and row
  
  let container = element("div", "container", "", "");
  const h1 = element("h1", "text-center", "title", "Harry Potter");
  const row = element("div", "row", "", "");
  
  //fecting the restcounties api
  const response = fetch("https://hp-api.onrender.com/api/characters");
  response
    .then((data) => data.json())
    .then((result) => {
      // console.log(result);
      //for loop for allocating the countries details to card
      for (let i = 0; i < result.length; i++) {
        const col = document.createElement("div");
        col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
        col.innerHTML = `
        <div class="card h-100">
        <div class="card-header">
        <h5 class="card-title text-center">${result[i].name} </h5>
        </div>
        <div class="img-box">
        <img src="${result[i].image}" class="card-img-top" alt="Harry Potter character image" />
        </div>
        <div class="card-body">
        <div class="card-text">House : ${result[i].house}</div>
        <div class="card-text">Species: ${result[i].species}</div>
        <div class="card-text">Alternate Names: ${result[i].alternate_names}</div>
        <div class="card-text">Date Of Birth: ${result[i].dateOfBirth}</div>
        </div>
        </div>
    
        `;
        row.append(col);
      }
    });
  
  // Appending to view in webpage
  document.body.append(h1, container);
  container.append(row);
  