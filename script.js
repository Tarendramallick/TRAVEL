document.addEventListener("DOMContentLoaded", function () {

    const filterItems = document.querySelectorAll("#yearFilter li");
    const cards = document.querySelectorAll(".msg-card");

    filterItems.forEach(item => {
        item.addEventListener("click", () => {

            // active class toggle
            filterItems.forEach(li => li.classList.remove("active"));
            item.classList.add("active");

            const selectedYear = item.getAttribute("data-year");

            cards.forEach(card => {
                const cardYear = card.getAttribute("data-year");

                if (selectedYear === "all" || cardYear === selectedYear) {
                    card.style.display = "block";   // ✅ IMPORTANT
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

});
const cards = document.querySelectorAll(".msg-card");
const grid = document.querySelector(".grid");
const detail = document.getElementById("msg-detail");
const backBtn = document.getElementById("backBtn");

// Dummy content map (later you can replace with DB)
const messageData = {
    2: {
        title: "海外旅行が好きで、詳しくなってしまった。",
        text: "ここに長い本文が入ります。",
        img: "images/asset 1.png",
        date: "2025.10.10",
        label: "MESSAGE. 2"
    }
};

cards.forEach(card => {
    card.addEventListener("click", () => {
        const id = card.dataset.id;
        const data = messageData[id];

        // Fill detail
        document.getElementById("detail-img").src = data.img;
        document.getElementById("detail-title").textContent = data.title;
        document.getElementById("detail-text").textContent = data.text;
        document.getElementById("detail-date").textContent = data.date;
        document.getElementById("detail-label").textContent = data.label;

        // Toggle view
        grid.style.display = "none";
        detail.style.display = "block";
        window.scrollTo(0, 0);
    });
});

// Back button
backBtn.addEventListener("click", () => {
    detail.style.display = "none";
    grid.style.display = "grid";
});