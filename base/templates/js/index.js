$(document).ready(function () {
  var newsContent = $(".news .news-content");
  var smallNavigation = $(".news .small-navigation")
  var html = "";

  $(".news .news-item-items").attr("aria-status", "false");
  $(".news .news-item-items").on("click", function (e) {
    var index = $(this).attr("data-index");
    var innertxt = $(this).text();

    $(this).addClass("active").attr("aria-status", "true").siblings().removeClass("active").attr("aria-status", "false");

    smallNavigation.text(innertxt)

    $.each(data, function (indexInArray, valueOfElement) {

      if (indexInArray == index) {
        
        for (const iterator of valueOfElement) {
          html += `<li class="news-content-items"><a href="${iterator.href}">${iterator.title}</a></li>`;
        }
        
        $(newsContent).html(html);
        console.log(html);
      }

      html = "";
    });
  });

  // back-to-top
  var backToTop = $(".back-to-top");

  $(window).scroll(function (e) {
    var scorllTop = $(document).scrollTop();

    scorllTop >= 200 ? $(backToTop).fadeIn(450) : $(backToTop).fadeOut(450);

    $(backToTop).on('click', function () {
      $("html,body").stop().animate({
        scrollTop: 0
      }, 240);
    });
  });

  // lb
  $('.shutter').shutter({
    shutterW: 1000, // 容器宽度
    shutterH: 358, // 容器高度
    isAutoPlay: true, // 是否自动播放
    playInterval: 2000, // 自动播放时间
    curDisplay: 3, // 当前显示页
    fullPage: true // 是否全屏展示
  });
});
