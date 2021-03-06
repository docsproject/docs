module.exports = function ($) {
  $('li.chapter').each(function (i, elem) {
    var li = $(elem);
    if (li.text().indexOf('GET') > 0) {
      var newTxt = li.children().first().html().replace("GET", "<code class=\"get\">GET </code>");
      li.children().first().html(newTxt);
    }
    else if (li.text().indexOf('POST') > 0) {
      var newTxt = li.children().first().html().replace("POST", "<code class=\"post\">POST</code>");
      li.children().first().html(newTxt);
    }
    else if (li.text().indexOf('DELETE') > 0) {
      var newTxt = li.children().first().html().replace("DELETE", "<code class=\"delete\">DEL </code>");
      li.children().first().html(newTxt);
    }
    else if (li.text().indexOf('PUT') > 0) {
      var newTxt = li.children().first().html().replace("PUT", "<code class=\"put\">PUT </code>");
      li.children().first().html(newTxt);
    }
    else if (li.text().indexOf('PATCH') > 0) {
      var newTxt = li.children().first().html().replace("PATCH", "<code class=\"patch\">PAT </code>");
      li.children().first().html(newTxt);
    }
  });

  $('.page-inner').has('iframe').contents().find('div, section').css({'height':'100vh','padding':'0px'});


  var helperPages = [
    'uisetup.html',
    'apisetup.html',
    'orderingSummary.html',
    'disconnectSummary.html',
    'restAPI.html',
    'manageLocations.html',
    'portingPhoneNumbers.html',
    'managingLineFeatures.html',
    'reporting.html'
  ];



  $('li.chapter a').each(function(i, elem) {
    var a = $(elem);
    var link = a.attr("href");
    helperPages.forEach(page => {
      if(link.endsWith(page)) {
        a.attr("href", link+'#top');
      }
    });
  });

  var title = $('title').text();


  if(title.indexOf(' · GitBook')  > 0) {
    var newTitle = title.replace(' · GitBook', '');
    $('title').text(newTitle);
  }

  return $.html();
}