const popupTemplates = {
    cardiology: {
        title: "Kardiologia",
        fields: [
            { label: "Imię i Nazwisko:", type: "text", id: "name", required: true },
            { label: "Email:", type: "email", id: "email", required: true },
            { label: "Telefon:", type: "tel", id: "phone" },
            { label: "Preferowana Data:", type: "date", id: "date", required: true },
            { label: "Kardiolog:", type: "select", id: "doctor", required: true, options: [
                "", "Dr. Kowalski", "Dr. Nowak", "Dr. Wiśniewski"
            ]},
            { label: "Objawy/Uwagi:", type: "textarea", id: "symptoms", placeholder: "Opisz swoje objawy lub dodatkowe informacje" }
        ]
    },
    dermatology: {
        title: "Dermatologia",
        fields: [
            { label: "Imię i Nazwisko:", type: "text", id: "name", required: true },
            { label: "Email:", type: "email", id: "email", required: true },
            { label: "Telefon:", type: "tel", id: "phone" },
            { label: "Preferowana Data:", type: "date", id: "date", required: true },
            { label: "Dermatolog:", type: "select", id: "doctor", required: true, options: [
                "", "Dr. Lewandowski", "Dr. Wójcik", "Dr. Kamińska"
            ]},
            { label: "Problem skórny:", type: "textarea", id: "symptoms", placeholder: "Opisz problem z którym się zmagasz" }
        ]
    },
    neurology: {
        title: "Neurologia",
        fields: [
            { label: "Imię i Nazwisko:", type: "text", id: "name", required: true },
            { label: "Email:", type: "email", id: "email", required: true },
            { label: "Telefon:", type: "tel", id: "phone" },
            { label: "Preferowana Data:", type: "date", id: "date", required: true },
            { label: "Neurolog:", type: "select", id: "doctor", required: true, options: [
                "", "Dr. Zieliński", "Dr. Majewska", "Dr. Szymański"
            ]},
            { label: "Opis problemu:", type: "textarea", id: "symptoms", placeholder: "Opisz swoje objawy lub problem neurologiczny" }
        ]
    },
    orthopedics: {
        title: "Ortopedia",
        fields: [
            { label: "Imię i Nazwisko:", type: "text", id: "name", required: true },
            { label: "Email:", type: "email", id: "email", required: true },
            { label: "Telefon:", type: "tel", id: "phone" },
            { label: "Preferowana Data:", type: "date", id: "date", required: true },
            { label: "Ortopeda:", type: "select", id: "doctor", required: true, options: [
                "", "Dr. Kaczmarek", "Dr. Pawlak", "Dr. Baran"
            ]},
            { label: "Opis urazu/choroby:", type: "textarea", id: "symptoms", placeholder: "Opisz uraz lub problem ortopedyczny" }
        ]
    },
    pediatrics: {
        title: "Pediatria",
        fields: [
            { label: "Imię i Nazwisko dziecka:", type: "text", id: "name", required: true },
            { label: "Email rodzica:", type: "email", id: "email", required: true },
            { label: "Telefon rodzica:", type: "tel", id: "phone" },
            { label: "Preferowana Data:", type: "date", id: "date", required: true },
            { label: "Pediatra:", type: "select", id: "doctor", required: true, options: [
                "", "Dr. Nowicka", "Dr. Grabowski", "Dr. Piotrowska"
            ]},
            { label: "Objawy/Uwagi:", type: "textarea", id: "symptoms", placeholder: "Opisz objawy lub dodatkowe informacje" }
        ]
    },
    gynecology: {
        title: "Ginekologia",
        fields: [
            { label: "Imię i Nazwisko:", type: "text", id: "name", required: true },
            { label: "Email:", type: "email", id: "email", required: true },
            { label: "Telefon:", type: "tel", id: "phone" },
            { label: "Preferowana Data:", type: "date", id: "date", required: true },
            { label: "Ginekolog:", type: "select", id: "doctor", required: true, options: [
                "", "Dr. Dąbrowska", "Dr. Król", "Dr. Lis"
            ]},
            { label: "Powód wizyty:", type: "textarea", id: "symptoms", placeholder: "Opisz powód wizyty lub pytania" }
        ]
    },
    ophthalmology: {
        title: "Okulistyka",
        fields: [
            { label: "Imię i Nazwisko:", type: "text", id: "name", required: true },
            { label: "Email:", type: "email", id: "email", required: true },
            { label: "Telefon:", type: "tel", id: "phone" },
            { label: "Preferowana Data:", type: "date", id: "date", required: true },
            { label: "Okulista:", type: "select", id: "doctor", required: true, options: [
                "", "Dr. Wrona", "Dr. Sokołowska", "Dr. Orzeł"
            ]},
            { label: "Opis problemu ze wzrokiem:", type: "textarea", id: "symptoms", placeholder: "Opisz problem ze wzrokiem lub pytania" }
        ]
    },
    dentistry: {
        title: "Stomatologia",
        fields: [
            { label: "Imię i Nazwisko:", type: "text", id: "name", required: true },
            { label: "Email:", type: "email", id: "email", required: true },
            { label: "Telefon:", type: "tel", id: "phone" },
            { label: "Preferowana Data:", type: "date", id: "date", required: true },
            { label: "Stomatolog:", type: "select", id: "doctor", required: true, options: [
                "", "Dr. Ząbek", "Dr. Mleczko", "Dr. Szkliwa"
            ]},
            { label: "Opis problemu z zębami:", type: "textarea", id: "symptoms", placeholder: "Opisz problem stomatologiczny" }
        ]
    },
    general: {
        title: "Medycyna Ogólna",
        fields: [
            { label: "Imię i Nazwisko:", type: "text", id: "name", required: true },
            { label: "Email:", type: "email", id: "email", required: true },
            { label: "Telefon:", type: "tel", id: "phone" },
            { label: "Preferowana Data:", type: "date", id: "date", required: true },
            { label: "Lekarz ogólny:", type: "select", id: "doctor", required: true, options: [
                "", "Dr. Biały", "Dr. Zielona", "Dr. Czerwony"
            ]},
            { label: "Opis problemu/uwagi:", type: "textarea", id: "symptoms", placeholder: "Opisz problem lub pytania" }
        ]
    },
};
function openPopup(service) {
    const template = popupTemplates[service];
    if (!template) return;

    let html = `
        <div class="popup-header">
            <h2>${template.title}</h2>
            <button class="close-btn" onclick="closePopup()">&times;</button>
        </div>
        <form id="popup-form" action="submit-appointment.php" method="POST">
    `;

    template.fields.forEach(field => {
        html += `<div class="form-group">`;
        if (field.label) html += `<label for="${field.id}">${field.label}</label>`;
        if (field.type === "select") {
            html += `<select id="${field.id}" name="${field.id}" ${field.required ? "required" : ""}>`;
            field.options.forEach(opt => {
                html += `<option value="${opt}">${opt ? opt : "Wybierz"}</option>`;
            });
            html += `</select>`;
        } else if (field.type === "textarea") {
            html += `<textarea id="${field.id}" name="${field.id}" ${field.placeholder ? `placeholder="${field.placeholder}"` : ""}></textarea>`;
        } else {
            html += `<input type="${field.type}" id="${field.id}" name="${field.id}" ${field.required ? "required" : ""} ${field.placeholder ? `placeholder="${field.placeholder}"` : ""}>`;
        }
        html += `</div>`;
    });

    html += `<button type="submit" class="submit-btn">Umów Wizytę</button></form>`;

    document.getElementById('popup-content').innerHTML = html;
    document.getElementById('popup-overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Set min date for date input
    const dateInput = document.querySelector('#popup-content input[type="date"]');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }

    // Confirmation on submit
    document.getElementById('popup-form').addEventListener('submit', function(e) {
        const dateInput = this.querySelector('input[type="date"]');
        if (dateInput && dateInput.value) {
            // Try to parse and reformat
            const d = new Date(dateInput.value);
            if (!isNaN(d.getTime())) {
                // Format as YYYY-MM-DD
                const yyyy = d.getFullYear();
                const mm = String(d.getMonth() + 1).padStart(2, '0');
                const dd = String(d.getDate()).padStart(2, '0');
                dateInput.value = `${yyyy}-${mm}-${dd}`;
            }
        }
        if (!confirm('Czy na pewno chcesz umówić wizytę?')) {
            e.preventDefault();
        }
    });
}

function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.body.style.overflow = '';
}

// Close popup when clicking outside content
document.getElementById('popup-overlay').addEventListener('click', function(e) {
    if (e.target === this) closePopup();
});