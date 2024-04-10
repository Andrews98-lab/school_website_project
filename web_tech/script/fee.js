function calculateAmount() {
    var program = document.getElementById("program").value;
    var hall = document.getElementById("HA").value;
    var amount = 0;

    // Define prices for each program and hall
    var programPrices = {
        "Health Information Management": 2300,
        "Clinical Nutrition & Dietetics": 2600,
        "Physician Assistantship": 3000,
        "Medicine": 4500,
        "Nursing": 1300,
        "Sport Science": 2400,
        "Medical Laboratory Science": 2000,
        "Optometry": 2300
    };

    var hallPrices = {
        "OGUAA": 680,
        "SRC": 900,
        "Valco": 720,
        "Casford": 800,
        "ATL": 750,
        "Adheye": 780,
        "KNH": 750,
        "Supernuation": 950
    };

    // Calculate the total amount owed
    amount = programPrices[program] + hallPrices[hall];

    // Redirect to pay.html with amount, program price, hall price, and other details as parameters
    window.location.href = "pay.html?amount=" + amount + "&programPrice=" + programPrices[program] +
    "&hallPrice=" + hallPrices[hall] + "&program=" + program + "&hall=" + hall;
}
