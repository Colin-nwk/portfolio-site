const projectRow = document.getElementById("project-row"),
  skills = document.getElementById("skills"),
  url = "projects.json";
document.addEventListener("DOMContentLoaded", () => {
  // Create the <option> for the years

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      allProjects = data.jobs;
      // skillSet = data.skills;
      // console.log(skillSet);
      let projectBuilt = "";
      allProjects.forEach((project) => {
        projectBuilt += `

            <div class="col-sm-12 col-md-6 col-xl-4" id="${project.id}">
            <div class="card ">
              <div class="card-header">
                <img src="../assets/img/${project.image}" class=" img-fluid">
              </div>
              <div class="card-body">
                <h4>${project.title}</h4>
                <p>
                  ${project.description}
                </p>
                <br>
                <p>
                  <a class="badge bg-blue" ${
                    project.php == false ? "hidden" : ""
                  }>
                    <i class="fab fa-php text-white fa-2x" ></i>
                  </a>
                  <a href="#" class="badge bg-yellow " ${
                    project.js == false ? "hidden" : ""
                  }>
                    <i class="fab fa-js text-white fa-2x"></i>
                  </a>
                  <a href="#" class="badge bg-indigo " ${
                    project.bootstrap == false ? "hidden" : ""
                  }>
                    <i class="fab fa-bootstrap text-white fa-2x"></i>
                  </a>
                  <a href="#" class="badge bg-info " ${
                    project.css3 == false ? "hidden" : ""
                  }>
                    <i class="fab fa-css3-alt text-white fa-2x"></i>
                  </a>
                  <a href="#" class="badge bg-orange " ${
                    project.html == false ? "hidden" : ""
                  }>
                    <i class="fab fa-html5 text-white fa-2x"></i>
                  </a>
                  <a href="#" class="badge bg-blue " ${
                    project.github == false ? "hidden" : ""
                  }>
                    <i class="fab fa-github text-white fa-2x"></i>
                  </a>
                   </a>
                  <a href="#" class="badge bg-white " ${
                    project.vue == false ? "hidden" : ""
                  }>
                    <i class="fab fa-vuejs text-green fa-2x"></i>
                  </a>
                  <a href="#" class="badge bg-red" ${
                    project.angular == false ? "hidden" : ""
                  }>
                    <i class="fab fa-angular text-white fa-2x"></i>
                  </a>
                  <a href="#" class="badge bg-red " ${
                    project.scss == false ? "hidden" : ""
                  }>
                    <i class="fab fa-sass text-white fa-2x"></i>
                 
                  <a href="#" class="badge bg-blue " ${
                    project.react == false ? "hidden" : ""
                  }>
                    <i class="fab fa-react text-white fa-2x"></i>
                  </a>
                  <a href="#" class="badge bg-white" ${
                    project.wordpress == false ? "hidden" : ""
                  }>
                    <i class="fab fa-wordpress fa-2x text-dark"></i>
                  </a>

                </p>
              </div>
              <div class="card-footer">
                <div class="btn-wrapper text-center">
                  <a href="${
                    project.gitlink
                  }" class="btn btn-simple btn-primary" target="_blanc" ${
          project.github == false ? "hidden" : ""
        }>
                    <i class="fab fa-github"></i> Github
                  </a>
                  <a href="${
                    project.url
                  }" class="btn btn-simple btn-info" target="_blanc">
                    <i class="tim-icons icon-bulb-63"></i> Check it out!
                  </a>
                </div>
              </div>
            </div>
          </div>
        `;
      });
      projectRow.innerHTML = projectBuilt;
    })
    .catch(function (error) {
      console.log(error);
    });
});
// function loadJSON() {
//   fetch("employees.json")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       let html = "";
//       data.forEach(function (employee) {
//         html += `
//                     <li>${employee.name} - ${employee.job} </li>
//                `;
//       });
//       // Insert into the HTML
//       document.getElementById("result").innerHTML = html;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// // Prints the response from a REST API

// function loadREST() {
//   fetch("https://picsum.photos/list")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (images) {
//       let html = "";

//       images.forEach(function (image) {
//         html += `
//                     <li>
//                          <a target="_blank" href="${image.post_url}">View Image</a>
//                          ${image.author}
//                     </li>
//                `;
//       });
//       document.getElementById("result").innerHTML = html;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }
