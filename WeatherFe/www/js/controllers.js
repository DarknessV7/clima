angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {
  $scope.clima1=function(y){
     $http ({
          method : "GET",
          url: "https://openweathermap.org/data/2.5/forecast?q="+y+",GT&appid=b6907d289e10d714a6e88b30761fae22"
          
   }).then(function Dato(x){
      console.log(x) 
    })
  }
 

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
