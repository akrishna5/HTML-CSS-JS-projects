$.ajax({
  type: 'get',
  url: 'https://api.covid19api.com/summary',
  success: function (response)
  {
    console.log(response.Countries)

    for (var i = 0; i < response.Countries.length; i++)
    {
        var totalactive = response.Countries[i].TotalConfirmed - response.Countries[i].TotalRecovered - response.Countries[i].TotalDeaths
        var tablerow = `<tr>
        <td> ${response.Countries[i].Country} </td>
        <td> ${response.Countries[i].TotalConfirmed} </td>
        <td> ${totalactive} </td>
        <td> ${response.Countries[i].TotalRecovered} </td>
        <td> ${response.Countries[i].TotalDeaths} </td>
        </tr>`

        $('#tbody').append(tablerow)
    }

    $('#covidtable').DataTable()
  },
  error: function (error) {
    console.log(error)
  }
})
