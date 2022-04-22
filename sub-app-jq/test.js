Router.route('/one', function () {
  $(".content").html("<p>路由就是根据不同的 url 地址展示不同的内容或页面，早期路由的概念是在后端出现的，通过服务器端渲染后返回页面，随着页面越来越复杂，服务器端压力越来越大。后来ajax异步刷新的出现使得前端也可以对url进行管理，此时，前端路由就出现了。</p>");
});

Router.route('/two', function () {
  $(".content").html("<p><b>单页面就是有前端路由来实现的，也就是说网站只有一个页面，点击导航会显示不同的内容，对应的url也在发生改变。在这个过程中，js会实时检测url的变化，从而改变显示的内容。</b></p>");
});

Router.route('/three', function () {
  $(".content").html("<h3>路由就是根据不同的 url 地址展示不同的内容或页面。</h3>");
});