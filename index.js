// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//init FavColor antara user
const firstFavColor = new Set();
const secondFavColor = new Set();

//isi data FavColor dari user 1
firstFavColor.add("Yellow");
firstFavColor.add("Pink");
firstFavColor.add("White");
firstFavColor.add("Purple");

//isi data FavColor dari user 2
secondFavColor.add("Blue");
secondFavColor.add("Black");
secondFavColor.add("Grey");

//init FavResto antara user
const firstFavoriteRestaurant = new Set();
const secondFavoriteRestaurant = new Set();

//isi data FavResto dari user 1
firstFavoriteRestaurant.add("Bento");
firstFavoriteRestaurant.add("Sushi");
firstFavoriteRestaurant.add("Pancake");
firstFavoriteRestaurant.add("Eggy");
firstFavoriteRestaurant.add("Tempura");
firstFavoriteRestaurant.add("Bento");
firstFavoriteRestaurant.add("Eggy");
firstFavoriteRestaurant.add("Padang");
firstFavoriteRestaurant.add("Tteok");
firstFavoriteRestaurant.add("Sushi");
firstFavoriteRestaurant.add("Sushi");

//isi data FavResto dari user 2
secondFavoriteRestaurant.add("Tempura");
secondFavoriteRestaurant.add("Bento");
secondFavoriteRestaurant.add("Sushi");
secondFavoriteRestaurant.add("Pancake");
secondFavoriteRestaurant.add("Padang");
secondFavoriteRestaurant.add("Katsu");
secondFavoriteRestaurant.add("Geprek");
secondFavoriteRestaurant.add("Pancake");
secondFavoriteRestaurant.add("Eggy");

//membuat array data education dan objek nama,tempat dan tahun lulus dengan objek
const firstEducation = [
  { name: "SD 01", city: "Jakarta", graduate: 2016 },
  { name: "SMP 02", city: "Jakarta", graduate: 2019 },
  { name: "SMA 03", city: "Tangerang" },
];
const secondEducation = [
  { name: "SD 02", city: "Jakarta", graduate: 2010 },
  { name: "SMP 03", city: "Bogor", graduate: 2013 },
  { name: "SMA 01", city: "Surabaya", graduate: 2016 },
  { name: "Universitas Maju", city: "Tangerang" },
];

const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: [...firstFavColor],
  isHavePet: "Yes",
  education: firstEducation,
  favoriteRestaurant: [...firstFavoriteRestaurant],
};
const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: [...secondFavColor],
  isHavePet: "No",
  education: secondEducation,
  favoriteRestaurant: [...secondFavoriteRestaurant],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
