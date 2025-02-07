const Data_psiriwan = {
    "name": "Pasut Siriwan",
    "age": 19,
    "url_profile": "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/313405963_2339249589567176_2825625593009656426_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FOnvI0wtWmsQ7kNvgFGT9RY&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=ARxXnYvpGNmC5MUPE2482Ba&oh=00_AYBqHi_3eReYx_tgKxvyqNRTsurM9INNnwnIFQLCH4aysQ&oe=67ABBCB2",
    "education": "KMITL - Computer Engineering",
    "education_name": ["KMITL"],
    "achievement": ["KMITL First Year Student Representative", "KMITL Computer Engineering 2023" , "เหรียญทองโอลิมปิกคอมพิวเตอร์ ปี 1", "ชนะเลิศรายการกินจุ อิอิ"],
    "hobbies": [
        { "emoji": "🎮", "name": "Games" },
        { "emoji": "🎥", "name": "Movies" },
        { "emoji": "🏃‍♂️", "name": "Running" },
        { "emoji": "🎧", "name": "Music" },
        { "emoji": "🏀", "name": "Basketball" },
        { "emoji": "📚", "name": "Reading"},
    ],
    "skills": [
        { "URL": "https://cdn3.emoji.gg/emojis/HTML.png", "name": "HTML" },
        { "URL": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", "name": "CSS" },
        { "URL": "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", "name": "JavaScript" },
        { "URL": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", "name": "Tailwind CSS" },
        { "URL": "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", "name": "React" },
        { "URL": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", "name": "Python" },
        { "URL": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", "name": "C++" },
        { "URL": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", "name": "TypeScript" },
        { "URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/2048px-Kali-dragon-icon.svg.png", "name": "Kali Linux" },
        { "URL": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Wireshark_icon_new.png/768px-Wireshark_icon_new.png", "name": "Wireshark" },
    ],
    "github": "underdust",
    "facebook": "https://www.facebook.com/pasut.siriwan"
};

// Set Profile Information
document.getElementById("profile").src = Data_psiriwan.url_profile;
document.getElementById("name").textContent = Data_psiriwan.name;
document.getElementById("name2").textContent = Data_psiriwan.name;
document.getElementById("education").textContent = Data_psiriwan.education;


// Display Achievement
const achievementContainer = document.getElementById("achievement");
Data_psiriwan.achievement.forEach(achievement => {
    const achievementElement = document.createElement("li");
    achievementElement.innerHTML = achievement;
    achievementContainer.appendChild(achievementElement);
});

// Display Skills
const skillsContainer = document.getElementById("skills");
Data_psiriwan.skills.forEach(skill => {
    const skillElement = document.createElement("div");
    skillElement.classList.add("skill");
    skillElement.innerHTML = `<img src="${skill.URL}" alt="${skill.name}"> ${skill.name}`;
    skillsContainer.appendChild(skillElement);
});

// Display Hobbies
const hobbiesContainer = document.getElementById("hobbies");
Data_psiriwan.hobbies.forEach(hobby => {
    const hobbyElement = document.createElement("div");
    hobbyElement.classList.add("hobby");
    hobbyElement.innerHTML = `${hobby.emoji} ${hobby.name}`;
    hobbiesContainer.appendChild(hobbyElement);
});

const githubElement = document.getElementById("github");
githubElement.innerHTML = `<a href="https://github.com/${Data_psiriwan.github}" target="_blank">${Data_psiriwan.github}</a>`;

const facebookElement = document.getElementById("facebook");
facebookElement.innerHTML = `<a href="${Data_psiriwan.facebook}" target="_blank">Pasut Siriwan</a>`;