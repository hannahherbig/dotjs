// eventually make our own element and put immediately after the image, like
// on m.xkcd.com, but this still looks pretty good.
$("#transcript")[0].innerText = $("img")[1].title;
$("#transcript").css({
  'display': 'block',
  'background': '#FFF9BD',
  'width': '90%',
  'margin': '0px auto',
  'border': '1px solid black',
  'padding': '2px 10px',
  'font-variant': 'normal' // fuck smallcaps!
});
