$(document).ready(function()
{
     loadDocument();
});
function loadDocument()
{
     $.ajax(
     {
          type: 'GET',
          url:"https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=500&%24format=JSON",
          //data: data,
          dataType:"JSON",
          success:function(information)
          {
               console.log(information);
               for(var i=0;i<400;i=i+21)
               {
                    $('#DataTable').append
                    (
                         "<tr>"
                         +"<td>"+information[i].OriginStationName.Zh_tw+"</td>"
                         +"<td>"+information[i].DestinationStationName.Zh_tw+"</td>"
                         +"<td>"+information[i].Fares[0].Price+"</td>"
                         +"<td>"+information[i].TravelTime+"</td>"
                         +"</tr>"
                    );
               }
          },
          error: function(msg)
          {
               alert("Error!!!");
          }
     })
}