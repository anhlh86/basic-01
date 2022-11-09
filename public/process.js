// Web3 also code here.
$(document).ready(function(){
    var currentAccount = "";

    checkMetaMaskRunning();

    $("#btnConnectMetaMask").click(function(){
        connectMetaMask().then((data)=>{
            currentAccount = data[0];
        }).catch((err)=>{
            console.log(err);
        });
    });

    $("#btnRegister").click(function(){
        $.post("./register", {
            // Validate inputs.
            Email: $("#txtEmail").val(),
            FullName: $("#txtFullName").val(),
            MobilePhone: $("#txtMobilePhone").val()
        }, function(data){
            console.log(data);
        })
    });
});

async function connectMetaMask(){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts;
}


function checkMetaMaskRunning(){
    if(typeof window.ethereum !== 'undefined'){
        console.log('MetaMask is installed!');
    }else{
        console.log('MetaMask is not installed!');
    }
}