
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const feature = card.getAttribute('data-feature');
    const link = card.getAttribute('data-link');

    if (feature === "Food Delivery") {
      openGunupurRestaurants();
    } 
    else if (feature === "Housing") {
      openGunupurHousing();
    }
    else if (link) {
      window.location.href = link;
    } 
    else {
      alert(`Feature "${feature}" under progress`);
    }
  });
});

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const parentCard = btn.closest('.card');
    const feature = parentCard.getAttribute('data-feature');
    const link = parentCard.getAttribute('data-link');

    if (feature === "Food Delivery") {
      openGunupurRestaurants();
    } 
    else if (feature === "Housing") {
      openGunupurHousing();
    }
    else if (link) {
      window.location.href = link;
    }
  });
});


function openGunupurRestaurants() {
  const url =
    "https://www.google.com/maps/search/restaurants+near+Gunupur,+Odisha+765022/";
  window.open(url, "_blank");
}


function openGunupurHousing() {
  const url =
    "https://www.google.com/maps/search/lodge+hostel+guest+house+hotel+pg+rooms+rent+accommodation+near+Gunupur,+Odisha+765022/";
  window.open(url, "_blank");
}
