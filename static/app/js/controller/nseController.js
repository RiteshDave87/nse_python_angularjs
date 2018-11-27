nseApp.controller("nseController", function($scope, $http, $interval) {
            
			var vm = this;
			vm.topgainers = {};
			vm.toplosers = {};
			vm.counter = 0;
			vm.tatamotors = {};
			vm.cmicables = {};
			vm.yesbank = {};
			
			var fetchTopGainers = function(){
				$http.get("/topgainers")
					.then(function (response) {
					vm.topgainers = response.data;
				});
			};
			
			var fetchTopLosers = function(){
				$http.get("/toplosers")
					.then(function (response) {
					vm.toplosers = response.data;
				});
			};
			
			var fetchTataMotorsQuote = function(){
				$http.get("/getquote/TATAMOTORS")
					.then(function (response) {
					vm.tatamotors = response.data;
				});
			};
			
			var fetchCmiCablesQuote = function(){
				$http.get("/getquote/CMICABLES")
					.then(function (response) {
					vm.cmicables = response.data;
				});
			};
			
			var fetchYesBankQuote = function(){
				$http.get("/getquote/YESBANK")
					.then(function (response) {
					vm.yesbank = response.data;
				});
			};
			
			var autoRefresh = function(){
				fetchTopGainers();
				fetchTopLosers();
				fetchTataMotorsQuote();
				fetchCmiCablesQuote();
				fetchYesBankQuote();
				vm.counter = vm.counter + 1;
			};
			
			var init = $interval(autoRefresh, 10000, 100);
			
         });