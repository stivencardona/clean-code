function sortListItems(evt) {
    var listItem, index, areWordsUnsorted, listItems, needSwitch, sortType, switchesCounter = 0;
    listItem = document.getElementById("names");
    areWordsUnsorted = true;
    sortType = evt.currentTarget.sortType; //asc o desc
    while (areWordsUnsorted) {
      areWordsUnsorted = false;
      listItems = listItem.getElementsByTagName("LI");
      for (index = 0; index < (listItems.length - 1); index++) {
        needSwitch = false;
        if (sortType == "asc") {
          if (listItems[index].innerHTML.toLowerCase() > listItems[index + 1].innerHTML.toLowerCase()) {
            needSwitch= true;
            break;
          }
        } else if (sortType == "desc") {
          if (listItems[index].innerHTML.toLowerCase() < listItems[index + 1].innerHTML.toLowerCase()) {
            needSwitch= true;
            break;
          }
        }
      }
      if (needSwitch) {
        listItems[index].parentNode.insertBefore(listItems[index + 1], listItems[index]);
        areWordsUnsorted = true;
        switchesCounter ++;
      } else {
        if (switchesCounter == 0 && sortType == "asc") {
          sortType = "desc";
          areWordsUnsorted = true;
        }
      }
    }
  }
  
  var sortButton = document.getElementById("sortBtn");
  sortButton.addEventListener("click", sortListItems, false );
  sortButton.sortType = 'asc';