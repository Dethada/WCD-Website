/* 
creds index
0 - username
1 - password
2 - email
3 - plan
*/
var creds = readCookie("creds").split(":");

// update user's current subscribed plan
function updatePlan(plan) {
    creds[3] = plan;
    setCookie("creds", creds.join(':'), 99999999);
}

// redirect to login page if user is not logged in
function authCheck() {
    if (readCookie("auth") !== '1') {
        window.location.href = "login.html";
    }
}

// basic plan pruchase button
$(".color-free").click(function() {
    authCheck();
   if (creds[3] === "Basic") {
    $.jqDialog.alert("You already have this plan");
   } else {
        $.jqDialog.confirm("Downgrade to the Basic Plan?", function(){
            updatePlan('Basic');
            $.jqDialog.alert('Successfully purchased Basic Plan');
        });
    }
});

// pro plan pruchase button
$(".color-pro").click(function() {
    authCheck();
    if (creds[3] === "Pro") {
        alert("You already have this plan");
    } else {
        var msg;
        if (creds[3] == "Basic") {
            msg = "Upgrade";
        } else {
            msg = "Downgrade";
        }
        $.jqDialog.confirm(msg + " to the Pro Plan?", function(){
            updatePlan('Pro');
            $.jqDialog.alert('Successfully purchased Pro Plan');
        });
    }
 });

 // business plan pruchase button
 $(".color-business").click(function() {
    authCheck();
    if (creds[3] === "Business") {
        alert("You already have this plan");
    } else {
        $.jqDialog.confirm("Upgrade to the Business Plan?", function(){
            updatePlan('Business');
            $.jqDialog.alert('Successfully purchased Business Plan');
        });
    }
 });