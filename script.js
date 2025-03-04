function selectOption(option, price) {
            document.querySelectorAll('.option').forEach((opt, index) => {
                opt.classList.remove('selected');
                document.getElementById(`dropdowns-${index + 1}`).style.display = "none";
            });

            let selectedOption = document.querySelectorAll('.option')[option - 1];
            selectedOption.classList.add('selected');
            document.querySelector(`input[name="unit"][value="${option}"]`).checked = true;
            document.getElementById(`dropdowns-${option}`).style.display = "block";

            // Update total price
            document.getElementById("total").innerText = price;
        }

        document.addEventListener("DOMContentLoaded", function () {
            selectOption(0, "$0.00 USD");
        });
    ;

    // document.querySelectorAll("input[name='unit']").forEach(option => {
    //     option.addEventListener("change", function () {
    //         let price = this.id === "unit1" ? "$10.00 USD" : this.id === "unit2" ? "$18.00 USD" : "$24.00 USD";
    //         document.getElementById("total-price").textContent = price;
    //     });
    // });
    