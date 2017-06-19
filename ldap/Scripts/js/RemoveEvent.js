﻿function OnSuccess(data) {
    var results = $('#results'); // получаем нужный элемент
    results.empty(); //очищаем элемент
    results.append('<li>' + data + '</li>'); // добавляем данные в список

}

function RemoveEvent(id, currentDate) {

    var event_id1 = id;
    var curdate = currentDate;
    //var current_date = document.getElementById("StartEvent1").innerHTML;
   

    $.ajax({
        type: 'POST',
        url: '/Logic/RemoveEvent?event_id=' + event_id1,
        contentType: 'application/json; charset=utf-8',
        processData: false,
        success: function (data) {
            if (data.success) {
                //loadEventsOfDay(current_date)
                reloadCalendar(data.year, data.month, data.day) // перегружает календарь
                var year = data.year.toString();
                var month = data.month.toString();
                var day = data.day.toString();
              
               
                var currenDate = year+ "." + month + "." + day;
                reloadSchedule(curdate);
            } else {
                alert("ошибка удаления!!!")
            }

            jQuery('.form').trigger('reset');
        },
        error: function () {
            alert('Ошибка! Проверьте соединение!');
        }

    });
}