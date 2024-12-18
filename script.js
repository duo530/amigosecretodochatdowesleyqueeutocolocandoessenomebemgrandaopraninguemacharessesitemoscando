import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAL-tUfCYkXAWgBsUpVL-Is1d_D5-rEGX8",
  authDomain: "amigosecretodochat.firebaseapp.com",
  projectId: "amigosecretodochat",
  storageBucket: "amigosecretodochat.firebasestorage.app",
  messagingSenderId: "297104948376",
  appId: "1:297104948376:web:a7f69c1beb3e534f5564ed",
  measurementId: "G-9ZCGHPVBCP"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

async function sortearNome() {
  if (getCookie("jasorteou")) {
    alert("Não sorteia de novo");
    return;
  }

  try {
    const nomesRef = ref(db, "nomes");
    const snapshot = await get(nomesRef);
    if (!snapshot.exists()) {
      alert("Nenhum nome disponível para sorteio.");
      return;
    }

    const nomes = Object.values(snapshot.val()).map(obj => obj.nome);
    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    alert(`Você sorteou o ${sorteado}. Sorteou você mesmo? Fala comigo (simpleuser) pra eu arrumar.`);
    setCookie("jasorteou", "true", 1);
  } catch (error) {
    console.error("Erro ao sortear nome:", error);
    alert("Erro ao sortear nome. Tente novamente mais tarde.");
  }
}

document.getElementById("sortButton").addEventListener("click", sortearNome);
