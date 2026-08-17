document.addEventListener('DOMContentLoaded', () => {
    // CSE-D Roll Numbers
    const rollNumbers = [
        '25EU04199', '25EU04200', '25EU04201', '25EU04202', '25EU04203', '25EU04204', '25EU04205', '25EU04206', '25EU04207', '25EU04208',
        '25EU04209', '25EU04210', '25EU04211', '25EU04212', '25EU04213', '25EU04214', '25EU04215', '25EU04216', '25EU04217', '25EU04218',
        '25EU04219', '25EU04220', '25EU04221', '25EU04222', '25EU04223', '25EU04224', '25EU04225', '25EU04226', '25EU04227', '25EU04228',
        '25EU04229', '25EU04230', '25EU04231', '25EU04232', '25EU04233', '25EU04234', '25EU04235', '25EU04236', '25EU04237', '25EU04238',
        '25EU04239', '25EU04240', '25EU04241', '25EU04242', '25EU04243', '25EU04244', '25EU04245', '25EU04246', '25EU04247', '25EU04248',
        '25EU04249', '25EU04250', '25EU04251', '25EU04252', '25EU04253', '25EU04254', '25EU04255', '25EU04256', '25EU04257', '25EU04258',
        '25EU04259', '25EU04260', '25EU04261', '25EU04262', '25EU04263', '25EU04264',
        'LECS009', 'LECS010', 'LECS017'
    ];

    const absentRollNumbers = new Set();
    const studentListEl = document.getElementById('student-list');
    const absentCountEl = document.getElementById('absent-count');
    const totalCountEl = document.getElementById('total-count');
    const generateBtn = document.getElementById('generate-btn');
    const modal = document.getElementById('report-modal');
    const closeBtn = document.getElementById('close-btn');
    const copyBtn = document.getElementById('copy-btn');
    const reportOutput = document.getElementById('report-output');

    totalCountEl.textContent = rollNumbers.length;

    function renderStudents() {
        studentListEl.innerHTML = '';
        
        rollNumbers.forEach((roll, index) => {
            const card = document.createElement('div');
            card.className = `student-card ${absentRollNumbers.has(roll) ? 'absent' : ''}`;
            card.style.animationDelay = `${index * 0.03}s`;
            
            card.innerHTML = `
                <div class="student-info">
                    <span class="student-roll">${roll}</span>
                </div>
                <div class="checkbox-wrapper">
                    <input type="checkbox" ${absentRollNumbers.has(roll) ? 'checked' : ''} tabindex="-1">
                    <span class="checkmark"></span>
                </div>
            `;

            card.addEventListener('click', () => toggleAttendance(roll, card));
            studentListEl.appendChild(card);
        });
    }

    function toggleAttendance(roll, cardElement) {
        if (absentRollNumbers.has(roll)) {
            absentRollNumbers.delete(roll);
            cardElement.classList.remove('absent');
            cardElement.querySelector('input').checked = false;
        } else {
            absentRollNumbers.add(roll);
            cardElement.classList.add('absent');
            cardElement.querySelector('input').checked = true;
        }
        updateCounts();
    }

    function updateCounts() {
        absentCountEl.textContent = absentRollNumbers.size;
    }

    function generateReport() {
        let report = "";
        
        if (absentRollNumbers.size === 0) {
            report = "CSE IV - ALL PRESENT";
        } else {
            report = "CSE IV - absentees:\n";
            // Sort absentees according to their original order in the list
            const sortedAbsent = Array.from(absentRollNumbers).sort((a, b) => {
                return rollNumbers.indexOf(a) - rollNumbers.indexOf(b);
            });
            report += sortedAbsent.join("\n");
        }
        
        reportOutput.value = report;
        modal.classList.remove('hidden');
    }

    function copyToClipboard() {
        reportOutput.select();
        document.execCommand('copy');
        
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        copyBtn.style.background = "var(--success)";
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = "var(--success)"; // keep it success color base
        }, 2000);
    }

    // Event Listeners
    generateBtn.addEventListener('click', generateReport);
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    copyBtn.addEventListener('click', copyToClipboard);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    renderStudents();
});
