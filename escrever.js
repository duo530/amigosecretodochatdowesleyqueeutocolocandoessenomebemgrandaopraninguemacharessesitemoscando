import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

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

function adicionarNomes() {
  const nomesRef = ref(db, "nomes");
  const nomes = {
    1: { nome: "Alice" },
    2: { nome: "Bob" },
    3: { nome: "Carlos" }
  };
  set(nomesRef, nomes)
    .then(() => console.log("Nomes adicionados com sucesso!"))
    .catch((error) => console.error("Erro ao adicionar nomes:", error));
}

adicionarNomes();
