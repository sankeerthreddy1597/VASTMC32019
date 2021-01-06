function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//on load
$(document).ready(function () {
  Promise.all([d3.xml("resources/map.svg")]).then(([map]) => {
    let mapAlt = map.documentElement;
    mapAlt.id = "map";
    d3.select("#resources").node().prepend(mapAlt);
  });

  // reasons to use jquery: you don't need onclicks for each tab and openTab method shortens to this:
  /*$(".tablinks").click(function () {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = $(".tabcontent").hide();

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = $(".tablinks").removeClass("active");

    // Show the current tab, and add an "active" class to the button that opened the tab
    $(`#${$(this).attr("id").replace("-btn", "")}`).show();
    $(this).addClass("active");
  });*/
});
