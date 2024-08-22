// 플레이어가 5, 5 좌표에 도착한 경우
App.addOnTileTouched(11, 17, function (player) {
    App.showCenterLabel(`${player.name}님이 (5, 5) 좌표에 도착!`);
});