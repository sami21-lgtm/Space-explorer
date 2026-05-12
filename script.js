const planetData = {
    jupiter: {
        subtitle: "Planet",
        title: "Jupiter",
        desc: "Jupiter is the largest planet in our Solar System. Fittingly, it was named after the king of the gods in Roman mythology, exhibiting massive storms and beautiful complex gas layers."
    },
    saturn: {
        subtitle: "Planet",
        title: "Saturn",
        desc: "Saturn is the sixth planet from the Sun and the second-largest planet in the Solar System, widely recognized for its stunningly extensive and complex ring system."
    },
    earth: {
        subtitle: "Planet",
        title: "Earth",
        desc: "Our home planet Earth is the third planet from the Sun, and the only astronomical object known to harbor and sustain vibrant ecosystems and liquid water oceans."
    },
    mars: {
        subtitle: "Planet",
        title: "Mars",
        desc: "Mars is the fourth planet from the Sun, often referred to as the 'Red Planet' due to the reddish iron oxide prevalent on its surface landscape."
    },
    mercury: {
        subtitle: "Planet",
        title: "Mercury",
        desc: "Mercury is the smallest and closest planet to the Sun in the Solar System, experiencing extreme temperature shifts between scorching days and freezing nights."
    },
    venus: {
        subtitle: "Planet",
        title: "Venus",
        desc: "Venus is the second planet from the Sun. It is the hottest planet in our solar system due to an intense runaway greenhouse effect within its dense atmosphere."
    },
    uranus: {
        subtitle: "Planet",
        title: "Uranus",
        desc: "Uranus is the seventh planet from the Sun. It features a unique cyan hue from atmospheric methane and spins on an extreme, almost horizontal axis tilt."
    },
    neptune: {
        subtitle: "Planet",
        title: "Neptune",
        desc: "Neptune is the eighth and most distant major planet from the Sun, characterized by powerful supersonic winds and an intense deep-blue color palette."
    },
    pluto: {
        subtitle: "Dwarf Planet",
        title: "Pluto",
        desc: "Pluto is a complex dwarf planet located within the icy dark expanses of the Kuiper Belt, sporting a distinct heart-shaped nitrogen ice glacier."
    }
};

const menuItems = document.querySelectorAll('.menu-item');
const planetBody = document.getElementById('planetBody');
const contentPanel = document.getElementById('contentPanel');
const panelSubtitle = document.getElementById('panelSubtitle');
const panelTitle = document.getElementById('panelTitle');
const panelDesc = document.getElementById('panelDesc');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('active')) return;

        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const targetedPlanet = item.getAttribute('data-planet');
        const currentInfo = planetData[targetedPlanet];

        // Trigger CSS Motion Fade-out
        contentPanel.classList.add('fade-out');

        setTimeout(() => {
            panelSubtitle.textContent = currentInfo.subtitle;
            panelTitle.textContent = currentInfo.title;
            panelDesc.textContent = currentInfo.desc;

            // Updates the visual appearance classes
            planetBody.className = `current-planet-body ${targetedPlanet}`;

            // Fade back in smoothly
            contentPanel.classList.remove('fade-out');
        }, 300);
    });
});
