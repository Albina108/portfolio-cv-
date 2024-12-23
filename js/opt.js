const updateElement = (selector, content) => {
    document.querySelector(selector).innerHTML = content;
};

//обновление имени и фамилии
updateElement('#my-name', `${data.first_name} <span class="color-grey">${data.last_name}</span>`);
//обновление должности профиля и адреса
updateElement('#job-title', data.job_title);
updateElement('.profile-data', data.profile);
updateElement('.address', `<p>${data.address}</p>`);
//обновление фото
document.querySelector('#my-photo').src = data.photo;
//обновление опыта работы
const experienceInfo = experience.map(item => `
    <selection class = "mb-5">
    <h4 class="company-name mb-2">${item.company}-${item.city}, <i>${item.from}-${item.to}</i></h4>
    <h5>${item.position}</h5>
    <p>${item.description}</p>
    </selection>`).join('');
updateElement('.experience-list', experienceInfo);

//обновление контактов
const projectsInfo = projects.map(project => `
    <section class="mb-5">
        <h4 class="project-name mb-2">${project.name}</h4>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    </section>
`).join('');

updateElement('.projects-list', projectsInfo);
//обновление контактов
const contactsInfo = `
<li><a href="tel:${data.phone}">${data.phone}</a></li>
<li><a href="mailto:${data.email}">${data.email}</a></li>
<li><a href="${data.linkedin}">${data.linkedin}</a></li>
`;
updateElement('.contacts-block', contactsInfo);
//обновление навыков
const skillsInfo = data.skills.map(skill => `<li>${skill}</li>`).join('');
updateElement('.skills-list', skillsInfo);
//обновление образования
const educationInfo = data.education.map(item => `<li>${item[0]},${item[1]}</li>`).join('');
updateElement('.education-list', educationInfo);
//обновление достижений
const languagesInfo = data.languages.map(language => `<li>${language[0]}</li>`).join('');
updateElement('.languages-list', languagesInfo);

