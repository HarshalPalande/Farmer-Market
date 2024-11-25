import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } 
from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const createButton = document.getElementById("create-button");
const auctionsContainer = document.getElementById("auctions");

// Create Auction
createButton?.addEventListener("click", async () => {
  const productName = document.getElementById("product-name").value;
  const startingPrice = document.getElementById("starting-price").value;

  await addDoc(collection(db, "auctions"), {
    product: productName,
    price: startingPrice,
    timestamp: new Date(),
  });

  alert("Auction created successfully!");
  fetchAuctions();
});

// Fetch and Display Auctions
async function fetchAuctions() {
  const querySnapshot = await getDocs(collection(db, "auctions"));
  auctionsContainer.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const auction = doc.data();
    const div = document.createElement("div");
    div.innerHTML = `<h3>${auction.product}</h3><p>Starting Price: INR ${auction.price}</p>`;
    auctionsContainer.appendChild(div);
  });
}

fetchAuctions();

