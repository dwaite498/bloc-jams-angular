(function () {
    function SongPlayer(Fixtures) {
        var SongPlayer = {};
        /** @desc current currently playing album 
        *   @type {object}*/
        var currentAlbum = Fixtures.getAlbum();

        var currentBuzzObject = null;
        /** @function playSong
        *   @Desc plays the current song when called
        *   @param {object} song
        */
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        }
        
        /** @function stopSong
        *   @desc stops the current song when called
        *   @param {object} song
        */
        var stopSong = function(song) {
            currentBuzzObject.stop();
            song.playing = null;
        }
        
        /* @function getsongindex
        *  @ desc retrieves and returns the index of current song
        *  @param {obkect} song
        */
        var getSongIndex = function (song) {
            return currentAlbum.songs.indexOf(song);
        }
        
         /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
        var setSong = function(song) {
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
        
        // @desc current playback time (in seconds) of a currently playing song @type {number}
        SongPlayer.currentTime = null;
        
        /** *function songplayer.play
        *   @desc sets and plays a song when called
        *   @param {object} song
        */
        SongPlayer.play = function(song) {
            song = (song || SongPlayer.currentSong) || currentAlbum.songs[0];
            if (SongPlayer.currentSong !== song) {
            setSong(song);
            playSong(song);
                
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            
            }   
            
            
        };
        /** @function 
        *   @desc pauses the song when called
        *   @param {object} song
        */
        SongPlayer.pause = function(song) {
            var song = song || SongPlayer.currentSong;
            stopSong(song);
        };
        /** @function SongPLayer.previous
        *   @desc retrieves current song index and returns it 
        *    after decrementing. 
        */
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if(currentSongIndex < 0) {
                stopSong(SongPlayer.currentSong);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            };
        };
        
        /** @function SongPlayer.next
        *   @desc retrieves current song index, increments it and returns the new variable as the index. If next uses the new index to update the songnumber to the next song in the album.
        */
        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            
            if (currentSongIndex >= currentAlbum.songs.length) {
                var song = currentAlbum.songs[0];
                setSong(song);
                playSong(song);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        /**
        * @function setCurrentTime
        * @desc Set current time (in seconds) of currently playing song
        * @param {Number} time
        */
        SongPlayer.setCurrentTime = function(time) {
            if(currentBuzzObject) {
                currentBuzzObject.setTime(time);
            }
        };
            
         return SongPlayer;
    }
        
        
    
    
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();