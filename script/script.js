function toggleDropdown() {
  var dropdownContent = document.querySelector('.header__category__dropdown__content');
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? null : 'block';
}


function toggleDropdownMobile() {
  var dropdownContent = document.getElementById("dropdownContent");
  if (dropdownContent.style.display === "block" || dropdownContent.style.display === "") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}

window.onclick = function(event) {
  var dropdownContent = document.getElementById("dropdownContent");
  if (!event.target.closest('.headerMobile__dropdown')) {
    dropdownContent.style.display = "none";
  }
};

