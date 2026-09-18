const cnc = document.getElementById("tmpcmp")

function makeNewsArticle(image, date, headline, content) {
    cnc.insertAdjacentHTML('afterbegin', 
    `

    <div class="nea-container">
        
        <div class="news-image">
            <img style="border: 3px solid white;" src="${image}">
        </div>

        <div class="news-text">
            <span class="date-tag">${date}</span>
            <h2>${headline}</h2>
            <p>${content}
            </p>
        </div>

    </div>

    ` 
    )
}
makeNewsArticle(
    "diddyinternet.jpg", 
    "18-9-2026", 
    "Ιστοσελίδα τάξης βγήκε δημόσια", 
    "Η επίσημη ιστοσελίδα του Α'1 γυμνασίου, γνωστή ως Α'1 FOREVER, φτιαγμένη από τον Γιώργο Αρούκατο, βγήκε δημόσια για όλη την τάξη του Α'1 γυμνασίου, ως η επίσημη σελίδα της τάξης."
)
makeNewsArticle(
    "bus.png",
    "18-9-2026",
    "Ανακοινώθικε εκδρομή",
    "Σήμερα ανακοινώθηκε εκδρομή για τα τμήματα της Α' Γυμνασίου σε άγνωστο προορισμό. Η εκδρομή προβλέπεται να γίνει σε 1-2 εβδομάδες. Θα ακολουθήσουν ενημερώσεις την ερχόμενη εβδομάδα."
)
