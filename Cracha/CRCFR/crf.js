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
