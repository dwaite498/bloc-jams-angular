(function () {
    function SongPlayer() {
        var SongPlayer = {};
        
        var currentSong = null;
        var currentBuzzObject = null;
        
        SongPlayer.play = function(song) {
            if (currentSong !== song) {
                if (currentBuzzObject) {
                    currentBuzzObject.stop();
                    currentSong.playing = null;
                }
            currentBuzzObject = new buz.sound(song.audioURL, {
                formats: ['mp3'],
                preload: true
            });
            
            currentSong = song;
            
            currentBuzzObject.play();
            song.playing = true;
        }
    };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer)
})