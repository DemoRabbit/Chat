window.onload = function() {
    Player.init();
};

var Player = {
    audio: null,
    playIndex: 0,
    listData: null,
    timeDom: null,
    init: function() {
        this.getMusicList();
        this.audio = document.getElementById("audio_player");
        this.time = document.getElementById("player_time");
        this.audio.oncanplay = function() {
            console.log(Player.audio.duration);
            setInterval(function() {
                Player.time.innerHTML = Math.ceil(Player.audio.currentTime)+"/"+Math.ceil(Player.audio.duration);
            }, 900)

        }
    },
    
    getMusicList: function() {
        axios.get('./resource/list.json')
            .then(function (response) {
                Player.createList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    
    createList: function(data) {
        this.listData = data.list;
        var listStr = "";
        for(var i=0; i<data.list.length; i++){
            //console.log("$ins==  :"+data.list[i].name);
            listStr += "<div id=\"list_"+i+"\">" +
                "            <div class=\"list_pos\"></div>" +
                "            <span class=\"list_name\">"+data.list[i].name+"</span>" +
                "            <span class=\"list_actor\">"+data.list[i].actor+"</span>" +
                "            <span class=\"list_ico\"></span>" +
                "            <div class=\"list_border\"></div>" +
                "        </div>"
        }
        document.getElementById("list").innerHTML = listStr;
        this.playAudio(0);
    },
    
    playAudio: function(index) {
        this.playIndex = index;
        this.audio.src = this.listData[index].src;
        this.audio.play();
    },
    playNext: function() {
        this.playAudio(this.playIndex + 1);
    }
};