$(function() {
    // var API_URL = 'https://newsapi.org/v2/top-headlines?apiKey=037145ee49c84037b33c6fae68b51368&country=ph';

    var parsedata = $('#parsedata');
        $.ajax({
            type:'get',
            url: 'https://newsapi.org/v2/top-headlines?apiKey=037145ee49c84037b33c6fae68b51368&country=ph',
        })
        .then(function(res){
            var fetch = res.articles
            fetch.forEach(function(resu) {
                console.log(resu)

                var dataitems = `<li> <img src="${resu.urlToImage}" alt= style="height:200px">
                <h5>${resu.title}</h5>
                <h7>${resu.author}</h7>
                <h6>${resu.content}<h6>
                
                
                <input type="button" value="Go to Page" onclick="window.location.href='${resu.url}'"
                </li>`

               parsedata.append(dataitems);
            }, this);
                
            })
            
        })


// function myFunction() {
//   var x = document.getElementById("mySelect").value;
//   document.getElementById("demo").innerHTML = "You selected: " + x;
// }