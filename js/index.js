

$scope.list = [{content: "Loading items...", priority: 1}];
$(function(){
  loadList();
  animateLoading();
})

$('box').on('click', reorderByPriority($scope.list));
var reorderByPriority = function(list){
  list.sort(function(a,b){
    if (a.priority > b.priority){
      return 1;
    } else if (a.priority < b.priority){
      return -1;
    } else {
      return 0;
    }
  })
}

var animateLoading = function(){

}

var loadList = function(){
  $http.get()
}

// options page:
// elements will expire after being completed for (24)hrs
// 