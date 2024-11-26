const spaceFacts = {
    "space_facts": [
        {
            "id": 1,
            "fact": "One day on Venus is longer than its year",
            "details": {
                "rotation_period": "243 Earth days",
                "orbital_period": "225 Earth days"
            }
        },
        {
            "id": 2,
            "fact": "Moon footprints will last for at least 100 million years",
            "details": {
                "reason": "No atmosphere to cause erosion",
                "location": "Moon surface"
            }
        },
        {
            "id": 3,
            "fact": "Olympus Mons is the highest known mountain",
            "details": {
                "location": "Mars",
                "height": "21.9 kilometers",
                "comparison": "2.5 times higher than Mount Everest"
            }
        },
        {
            "id": 4,
            "fact": "Saturn would float in a massive ocean",
            "details": {
                "reason": "Lower density than water",
                "density": "0.687 g/cm³"
            }
        },
        {
            "id": 5,
            "fact": "Mars day length is close to Earth's",
            "details": {
                "duration": "24 hours and 37 minutes",
                "comparison": "Slightly longer than Earth day"
            }
        }
    ]
};

function createFactCards() {
    const container = document.getElementById('facts-container');
    spaceFacts.space_facts.forEach(fact => {
        const card = document.createElement('div');
        card.className = 'fact-card';
        
        const details = Object.entries(fact.details)
            .map(([key, value]) => `<p>${key.replace('_', ' ')}: ${value}</p>`)
            .join('');

        card.innerHTML = `
            <div class="fact-title">${fact.fact}</div>
            <div class="details">${details}</div>
            <button class="share-button" onclick="shareFact('${fact.fact}')">Share This Fact</button>
        `;
        container.appendChild(card);
    });
}

function shareFact(fact) {
    if (navigator.share) {
        navigator.share({
            title: 'Amazing Space Fact!',
            text: fact,
            url: window.location.href
        })
        .catch(error => console.log('Error sharing:', error));
    } else {
        alert('Sharing is not supported on this browser. Copy this fact: ' + fact);
    }
}

// Initialize the app
createFactCards();
