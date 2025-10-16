function renderBooks() {
  const tbody = document.getElementById('book-list');
  tbody.innerHTML = '';

  books.forEach((book, index) => {
    const tr = document.createElement('tr');

    const titleTd = document.createElement('td');
    titleTd.textContent = `${index + 1}. ${book.title}`;
    tr.appendChild(titleTd);

    const authorTd = document.createElement('td');
    authorTd.textContent = book.author;
    tr.appendChild(authorTd);

    const actionsTd = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = "Modifier titre";
    editBtn.onclick = () => {
      // --- 🔽 Fonctionnalité ajoutée ici ---
      const newTitle = prompt(`Nouveau titre pour "${book.title}" :`, book.title);
      if (newTitle === null) return; // si annulé
      const trimmed = newTitle.trim();
      if (!trimmed) {
        alert("Le titre ne peut pas être vide !");
        return;
      }

      // Met à jour le titre dans le tableau
      books[index].title = trimmed;

      // Rafraîchit l’affichage
      renderBooks();

      // Petit message visuel
      alert(`Titre du livre modifié : "${trimmed}" ✅`);
      // --- 🔼 Fin de la fonctionnalité ---
    };
    actionsTd.appendChild(editBtn);

    tr.appendChild(actionsTd);

    tbody.appendChild(tr);
  });
}
renderBooks();