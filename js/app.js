document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').innerHTML = data.job_title;
document.querySelector('.profile-data').innerHTML = data.profile;

let expirienceData = '';
experience.forEach(item => {
    expirienceData += `<section class="mb-5">`;
    expirienceData += ` <h4 class="company-name mb-2">${item.company} - ${item.city}, <i>${item.from} - ${item.to}</i></h4>`;
    expirienceData += `<h5>${item.position}</h5>`;
    expirienceData += `<p>${item.description}</p>`;
    expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;

document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}">${data.phone}</li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email}">${data.email}</li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="callto:${data.skype}">${data.skype}</li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.linkedin}">${data.linkedin}</li>`
document.querySelector('.address').innerHTML = `<p>${data.address}</p>`;
document.querySelector('#my-photo').src = data.photo;

let skillsData = '';
data.skills.forEach(item=>{
    skillsData +=`<li>${item}</li>`
});
document.querySelector('.skills-list').innerHTML = skillsData;

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

let achievementsData = '';
data.achievements.forEach(item=>{
    achievementsData += `<li>${item}</li>`
});
document.querySelector('.achievements-list').innerHTML= achievementsData;