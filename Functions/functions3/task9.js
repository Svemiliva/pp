/*
9.	Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs"

*/

function hideEmail(email) {
    var result = "";
    var etindex;
    for (i = 0; i < email.length; i++) {
        if (i < 3) {
            result += email[i];
        }
    } result += "..."
    for (j = 0; j < email.length; j++) {
        if (email[j] == "@") {
            etindex = j;
        }
    }
    for (k = etindex; k < email.length; k++) {
        result += email[k];
    } return result;
}
console.log(hideEmail("myemailaddress@bgit.rs"));
