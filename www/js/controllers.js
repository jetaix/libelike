angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaDevice) {

	$scope.toto = function () {

		$scope.device = $cordovaDevice.getDevice();
  		var cordova = $cordovaDevice.getCordova();
  		var model = $cordovaDevice.getModel();
		var platform = $cordovaDevice.getPlatform();
  		var uuid = $cordovaDevice.getUUID();
  		var version = $cordovaDevice.getVersion();
	}

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
