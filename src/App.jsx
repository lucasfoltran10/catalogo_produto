import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  // 1. Nossa base de dados original (ela NUNCA será alterada por nós)
  const todosOsProdutos = [
    { id: 1, nome: "Teclado Mecânico", categoria: "Periféricos", preco: 250.0 },
    { id: 2, nome: "Mouse Gamer", categoria: "Periféricos", preco: 120.0 },
    { id: 3, nome: "Monitor 24 polegadas", categoria: "Telas", preco: 800.0 },
    { id: 4, nome: "Headset Bluetooth", categoria: "Áudio", preco: 180.0 },
    { id: 5, nome: "Microfone Condensador", categoria: "Áudio", preco: 300.0 }
  ];

  // 2. O Estado guarda APENAS uma string com o nome da categoria atual
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  // 3. A Mágica do Filter: Cria uma vitrine dinâmica!
  // Ela analisa cada 'produto'. Se ele tiver a categoria que está no estado, ele entra na vitrine.
  const produtosFiltrados = todosOsProdutos.filter((produto) => {
    // Regra de exceção: Se o estado for "Todos", mandamos exibir tudo!
    if (categoriaAtiva === "Todos") {
      return true; 
    }
    // Caso contrário, só exibe quem bater com o estado
    return produto.categoria === categoriaAtiva;
  });


   return (
    <div className={styles.container}>
      <h1>Catálogo Tech 🖥️</h1>
      
      {/* 4. Os Botões de Filtro */}
      <div className={styles.botoesFiltro}>
      <button className={categoriaAtiva === "Todos" ? styles.botaoAtivo : styles.categoriaInativa} onClick={() => setCategoriaAtiva("todos")}>todos</button>
             <button className={categoriaAtiva === "Perifericos" ? styles.botaoAtivo : styles.categoriaInativa} onClick={() => setCategoriaAtiva("Periféricos")}>todos</button>
                   <button className={categoriaAtiva === "Telas" ? styles.botaoAtivo : styles.categoriaInativa} onClick={() => setCategoriaAtiva("Telas")}>todos</button>
                         <button className={categoriaAtiva === "Áudio" ? styles.botaoAtivo : styles.categoriaInativa} onClick={() => setCategoriaAtiva("Áudio")}>todos</button>
      </div>

      {/* Aviso que reage automaticamente ao estado e à nova lista */}
      <p className={styles.avisoCategoria}>
        Exibindo: <strong>{categoriaAtiva}</strong> ({produtosFiltrados.length} itens)
      </p>

     {/* 5. O Map renderizando a lista FILTRADA */}
      <div className={styles.gradeProdutos}>
        {produtosFiltrados.map((produto) => (
          <div key={produto.id} className={styles.card}>
            <h3>{produto.nome}</h3>
            {/* O nome da categoria aparece em formato de selo/badge */}
            <span className={styles.badge}>{produto.categoria}</span>
            <p className={styles.preco}>R$ {produto.preco.toFixed(2)}</p>
          </div>
        ))}
      </div>

    </div>
  );

}

export default App;