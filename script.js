// Fetch and display projects
fetch('data/projects.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('projects-container');
    data.forEach(item => {
      container.innerHTML += `
        <div class="project-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a href="${item.link}" target="_blank">View Project</a>
        </div>`;
    });
  });

// Fetch and display certificates
fetch('data/certificates.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('certificates-container');
    data.forEach(item => {
      container.innerHTML += `
        <div class="certificate-card">
          <h3>${item.name}</h3>
          <p>Issued by: ${item.issuer}</p>
          <a href="${item.link}" target="_blank">View Certificate</a>
        </div>`;
    });
  });
