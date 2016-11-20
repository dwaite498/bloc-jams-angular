(function () {
    function SongPlayer() {
        var SongPlayer = {};
        /** @desc current song file 
        *   @type {object}*/


        var currentBuzzObject = null;
        /** @function playSong
        *   @Desc plays the current song when called
        *   @param {object} song
        */
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        }
         /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
        var setSong = function(song) {
            debugger;
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }
 
            currentBuzzObject = new buzz.sound(song.audioURL, {
                formats: ['mp3'],
                preload: true
            });
 
            SongPlayer.currentSong = song;
 };
        
        /** @desc current song file 
        *   @type {object}*/
        SongPlayer.currentSong = null;
        
        /** *function songplayer.play
        *   @desc sets and plays a song when called
        *   @param {object} song
        */
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
            setSong(song);
 
            playSong(song);
                
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }   
            
            
        };
        /** @function 
        *   @desc pauses the song when called
        *   @param {object} song
        */
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        }
        
        return SongPlayer;
    }
    
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();