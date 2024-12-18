fetch('data/projects.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('projects-container');
        data.forEach(project => {
            container.innerHTML += `
                <div class="project-card">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">View Project</a>
                </div>
            `;
        });
    });

fetch('data/certificates.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('certificates-container');
        data.forEach(cert => {
            container.innerHTML += `
                <div class="certificate-card">
                    <h3>${cert.name}</h3>
                    <p>Issued by: ${cert.issuer}</p>
                    <a href="${cert.link}" target="_blank">View Certificate</a>
                </div>
            `;
        });
    });
