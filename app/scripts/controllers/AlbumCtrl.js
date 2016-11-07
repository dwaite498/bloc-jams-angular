(function() {
    function AlbumCrtl() {
        this.albumData = albumPicasso;
    };
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCrtl);
    
})();
