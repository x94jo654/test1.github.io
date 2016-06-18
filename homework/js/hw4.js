$(function () {
    var $btn1 = $("#btn1");
    //var $box2 = $("#box2");
    $btn1.click(function () {
        var $ansbox = $("#ansbox");
        $("#ansbox").empty();
        var a1 = $("input[name=Q1]:checked").val();
        //$ansbox.append(" a1= " + a1);
        var a2 = $("input[name=Q2]:checked").val();
        //$ansbox.append(" a2= " + a2);
        var a3 = $("input[name=Q3]:checked").val();
        //$ansbox.append(" a3= " + a3);
        var a4 = $("input[name=Q4]:checked").val();
        //$ansbox.append(" a4= " + a4);
        var a5 = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4);
        //$ansbox.append(" a5= " + a5);
        if (a5 < 5) {
            $("#ansbox").append("你屬於被虐型的人，在公司總是任勞任怨，什麼工作你都照單全收，算是好用型的下屬，而且不論發生什麼事，你總是安靜不吭聲地做好份內的工作，即使是不合理的要求，或是同事有事請你幫忙，你也都默默接受並且努力完成，算是職場阿信的最佳代表。");
        } else if (a5 > 4 && a5 < 9) {
            $("#ansbox").append("你屬於公務員型的人，做事效率不算太差，但是過於機械化，喜歡不花腦力的工作，總是一個口令一個動作。此外，在上班時間要你做什麼都好，一旦下了班，任何人都別想煩你，對於自己應要的一定追求到底，不屬於你的，你也不會隨便接受。");
        } else if (a5 > 8 && a5 < 13) {
            $("#ansbox").append("你屬於擺爛型的人，其實老闆知道你並沒有完全發揮出你的實力，而你也覺得自己在職務上是大材小用，因此你認為，在千里馬還沒有遇到伯樂之前，不要拿出百分之百的實力去做事，覺得自己能力非常好，遲早有一天會被明白你能力的上司發掘與跟賞識。");
        } else if (a5 > 12 && a5 < 17) {
            $("#ansbox").append("你屬於難搞的人，是個想法多意見也多的員工，做任何事情堅持一定要維持自己的格調，常常成為團隊中的意見領袖。不過這類型的人，就像一把雙面刃，如果和上面關係好的話，升職加薪絕對少不了你；但若和上司關係搞不好，也會第一個拿你開刀。");
        } else {
            $("#ansbox").append("您還有答案沒選");
        }
        // a1=$('input[name=radio1]:checked').val(),
        //$box1.slideUp(1000);
        //$box1.slideDown(1000);
        //$("#ansbox").append("a1=");
        //$("#ansbox").append(a1);
        //$box2.slideDown(1000);
        //$("#box2").slideDown("slow");

    });
});
