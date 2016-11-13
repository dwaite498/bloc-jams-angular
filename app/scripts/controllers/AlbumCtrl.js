(function() {
    function AlbumCrtl(Fixtures) {
        this.albumData = angular.getAlbum();
        
    }
    
    angular
        .module('blocJams');
        .controller('AlbumCtrl', ['Fixtures', AlbumCrtl]);
    
})();