'use strict';

/**
 * @ngdoc function
 * @name musicAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the musicAppApp
 */
angular.module('musicAppApp')
    .controller('MainCtrl', ['$http', '$scope', '$sce', function($http, $scope, $sce) {


        // this.awesomeThings = [
        //   'HTML5 Boilerplate',
        //   'AngularJS',
        //   'Karma'
        // ];

        var test;

        $http({
            method: 'GET',
            url: 'https://graph.facebook.com/v2.5/207509089592618/feed?fields=link&access_token=CAACEdEose0cBAGR7VjnkUoKb80HKGiUQGhJctoL0x7ZB4Jr9xDqnxwAXAcmdZCnZBPVzqWZBL39jj9uW5aCG5xb12vxqkETNUZBdZBKF42qufGhyptmrmEgI9bwWUjxIc7faLwwdWrdP6hgPlkkIZB4tJT7gjhxt5jMjD0jwHHIk7CPZBUEmTgML5ZCJx0GKSOLaauiHaEtz8WgZDZD'
        }).then(function successCallback(response) {
            test = response;

            $scope.test = response;


        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


        var soundCloud 	= 'https://w.soundcloud.com/player/?color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;url=';
        var youTube	 	= '';
        
        $scope.generateURL = function(link) {

        	var finalUrl;
        	
            if (link.indexOf("soundcloud")) {
                finalUrl = soundCloud + link;

            } else {
                return;
            }
            
            var finalUrl = soundCloud + link;
            finalUrl = $sce.trustAsResourceUrl(finalUrl);
            return finalUrl;
        };

    }]);
