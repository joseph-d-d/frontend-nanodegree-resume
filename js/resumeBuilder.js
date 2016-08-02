var bio = {
    "name": "Joseph Dollahon",
    "role": "Web Developer",
    "contacts": {
        "mobile": "900-597-697",
        "email": "josephdollahon@fakeEmail.com",
        "github": "joseph-d-d",
        "location": "Sunnyvale, CA, US"
    },
    "welcomeMessage": "Welcome to my online resume",
    "skills": ["Web Development", "Javascript", "Python", "HTML", "C#"],
    "biopic": "images/joseph.jpg",
    "display": function () {
        var header = $("#header");
        header.prepend(HTMLheaderRole.replace("%data%", bio.role));
        header.prepend(HTMLheaderName.replace("%data%", bio.name));
        header.append(HTMLbioPic.replace("%data%", bio.biopic));
        header.append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        this.displayContacts("#topContacts");
        this.displayContacts("#footerContacts");
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var skillID = $("#skills");
            for (var i = 0; i < bio.skills.length; i++) {
                skillID.append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }
    },

    "displayContacts": function (elementID) {
        var contactID = $(elementID);
        contactID.append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        contactID.append(HTMLemail.replace("%data%", bio.contacts.email));
        contactID.append(HTMLgithub.replace("%data%", bio.contacts.github));
        contactID.append(HTMLlocation.replace("%data%", bio.contacts.location));
    }
};

var education = {
    "schools": [
        {
            "name": "De anza",
            "location": "Cupertino, CA, US",
            "degree": "AA",
            "majors": ["Engineering for transfer"],
            "dates": "2011-2015",
            "url": "https://www.deanza.edu/"
        },
        {
            "name": "Arizona State",
            "location": "Tempe, AZ US",
            "degree": "BS",
            "majors": ["Software Engineering"],
            "dates": "2015-current",
            "url": "https://www.deanza.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Web Developer",
            "school": "Udacity",
            "dates": "2016-current",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],
    "display": function () {
        $("#education").append(HTMLschoolStart);
        for (var i = 0; i < education.schools.length; i++) {
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
            for (var j = 0; j < education.schools[i].majors.length; j++) {
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
            }
        }
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        for (var index = 0; index < education.onlineCourses.length; index++) {
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[index].url));
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "AGC Inc.",
            "title": "System Admin",
            "location": "Campbell, CA, US",
            "dates": "2011-2016",
            "description": "Planned and implement all IT solutions"
        },
        {
            "employer": "AGC Inc.",
            "title": "Web Developer",
            "location": "Campbell, CA, US",
            "dates": "2016-Current",
            "description": "Planned and implement all internal web applications"
        }
    ],
    "display": function () {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "Sanctum Breach",
            "dates": "2015",
            "description": "2D Isometric game where the player fights monsters as they make their way through a castle forgotten by time. I joined the team three months into production, it was both interesting and challenging to become familiar with an existing code base. I implemented many back end systems, including the store, player progression, checkout point system and various other tasks. Source code for this project can be found on GitHub.",
            "images": ["images/AlienFeature-300x140.jpg"]
        },
        {
            "title": "Mr Alien Jump",
            "dates": "2016",
            "description": "2D arcade game made using Unity game engine I performed all programming and art creation. The purpose of the game was to go through the entire process of creating a mobile game in Unity.  Game is published on Google Play.",
            "images": ["images/SanctumFeature-300x140.jpg"]
        }
    ],
    "display": function () {
        $("#projects").append(HTMLprojectStart);
        for (var i = 0; i < projects.projects.length; i++) {
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images));
            console.log(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        }
    }
};

$("#mapDiv").append(googleMap);

work.display();
bio.display();
projects.display();
education.display();
