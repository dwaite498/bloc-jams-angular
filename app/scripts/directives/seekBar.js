(function() {
    function seekBar () {
        return {
            templateUrl: '/templates/directives/seek_bar.html',
            replace: true;
            retrict: 'E'
        };
    }
    
    angular
        .module('blocJams')
        .directive('seekBar', seekBar);
})();