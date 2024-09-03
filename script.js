$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "https://aibit-translator.p.rapidapi.com/api/v1/translator/support-languages",
        dataType: "json",
        headers: {
            'x-rapidapi-key': 'd013e9dbd9mshfbc1c8f0dbe33edp1733bcjsncb2043838ae6',
            'x-rapidapi-host': 'aibit-translator.p.rapidapi.com'
        },
        success: function (response) {

            $.each(response, function(index, element){
                let option = `<option value="${element.code}">${element.language}</option>`


                $("#from").append(option)
                $("#to").append(option)
            })
            
        }
    });
});

translate

$("button").click(function(){
    let text = $("input").val()
    let languagefrom = $("#from").val()
    let languageto = $("#to").val()



    $.ajax({
        type: "post",
        url: "https://aibit-translator.p.rapidapi.com/api/v1/translator/text",
        data: {from: languagefrom, to: languageto, text: text},
        dataType: "json",
        headers: {
            'x-rapidapi-key': 'd013e9dbd9mshfbc1c8f0dbe33edp1733bcjsncb2043838ae6',
            'x-rapidapi-host': 'aibit-translator.p.rapidapi.com',

        },
        success: function (response) {
            $("h1").text(response.trans);
            
        },
        error:function(err){
            console.log(err);
        }
    });
})

