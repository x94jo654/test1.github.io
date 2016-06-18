$(function () {
    $(document).ready(function () {
        var $btn1 = $("#btn1");
        $btn1.click(function () {
            $("p").slideToggle();
            $.getJSON('https://api.thingspeak.com/channels/60126/fields/1.json?api_key=Q9GXW9WOFZT285IJ&timezone=Asia/Taipei&results=10',
                function (dataTS) { // Insert JavaScript code to operate on return data
                    alert("channel: " + dataTS.channel.id + "\nname: " + dataTS.channel.name + "\n連線成功");
                    var chart = new CanvasJS.Chart("chartContainer", {
                        title: {
                            text: dataTS.channel.name
                        },
                        axisX: {
                            title: "第n筆資料",
                            interval: 10,
                            maximum: dataTS.feeds[8].field1,
                            minimum: dataTS.feeds[0].field1
                        },
                        axisY: {
                            title: dataTS.channel.name,
                            interval: 10

                        },
                        data: [{
                            type: "line",
                            dataPoints: [{
                                x: dataTS.feeds[0].field1,
                                y: dataTS.feeds[0].entry_id
                        }, {
                                x: dataTS.feeds[1].field1,
                                y: dataTS.feeds[1].entry_id
                        }, {
                                x: dataTS.feeds[2].field1,
                                y: dataTS.feeds[2].entry_id
                        }, {
                                x: dataTS.feeds[3].field1,
                                y: dataTS.feeds[3].entry_id
                        }, {
                                x: dataTS.feeds[4].field1,
                                y: dataTS.feeds[4].entry_id
                        }, {
                                x: dataTS.feeds[5].field1,
                                y: dataTS.feeds[5].entry_id
                        }, {
                                x: dataTS.feeds[6].field1,
                                y: dataTS.feeds[6].entry_id
                        }, {
                                x: dataTS.feeds[7].field1,
                                y: dataTS.feeds[7].entry_id
                        }, ]
                    }]
                    });
                    chart.render();
                });
        });
    });
});
