function generateBadge() {
    const imageInput = document.getElementById('image');
    const nameInput = document.getElementById('name').value;
    const roleInput = document.getElementById('role').value;

    const badgeImage = document.getElementById('badgeImage');
    const reader = new FileReader();
    reader.onload = function (e) {
      badgeImage.src = e.target.result;
    }
    reader.readAsDataURL(imageInput.files[0]);

    document.getElementById('badgeName').textContent = nameInput;
    document.getElementById('badgeRole').textContent = roleInput;

    document.getElementById('badgeContainer').style.display = 'flex';
  }

// function printContent(el){

//     var restorepage = document.body.innerHTML;
//     var printContent = document.getElementById(el).innerHTML;
//     document.body.innerHTML = printContent;
//     window.print();
//     document.body.innerHTML = restorepage

// }

// function printPageArea(imageContainer){
//   var printContent = document.getElementById(imageContainer).innerHTML;
//   var originalContent = document.body.innerHTML;
//   document.body.innerHTML = printContent;
//   window.print();
//   document.body.innerHTML = originalContent;
// }
