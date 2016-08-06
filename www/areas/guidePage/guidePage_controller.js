// 引导页路由
angular.module('guidePage.controller', ['guidePage.service'])
  .controller('GuidePageCtrl',function ($scope) {
  var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical',
    // loop: true,
     onSlideChangeEnd: function(swiper){
       
      },
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
  }) 
  })
