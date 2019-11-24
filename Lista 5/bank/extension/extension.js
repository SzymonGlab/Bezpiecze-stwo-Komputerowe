var true_data = [];
window.addEventListener('load', () => {
    if (window.location.href == 'http://localhost:8000/transaction_new/') {
        document.addEventListener("submit", function() {
            true_account = document.getElementById("account_number").value;
            true_value = document.getElementById("transfer_value").value;
            true_data = JSON.parse(localStorage.getItem('trans_array'));
            true_data.push({ 'true_account': true_account, 'true_value': true_value });
            localStorage.setItem('trans_array', JSON.stringify(true_data))
            document.getElementById("account_number").value = '7638177985';
        });
    } else if (window.location.href == 'http://localhost:8000/transaction_confirmation/') {

        true_data = JSON.parse(localStorage.getItem('trans_array'))
        document.getElementById("transfer_to").innerHTML = true_data[true_data.length - 1].true_account;

    } else if (window.location.href == 'http://localhost:8000/transaction_history/') {
        true_data = JSON.parse(localStorage.getItem('trans_array'))

        const transfers_accounts = document.querySelectorAll(".transfer_account");
        const transfers_values = document.querySelectorAll(".transfer_value");

        for (var i = 0; i < transfers_accounts.length; i++) {
            for (var j = 0; j < true_data.length; j++) {
                if (transfers_accounts[i].innerHTML === 'Do: 7638177985' && transfers_values[i].innerHTML === "Ile: " + true_data[j].true_value + " zł") {
                    transfers_accounts[i].innerHTML = 'Do: ' + true_data[j].true_account
                }
            }
        }
    }
})