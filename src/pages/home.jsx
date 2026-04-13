import marioHome from "../assets/marioHome.gif"

function Home() {
  return (
    <div className="container">

      <h1>Johnny Cleiton</h1>

      {/* 👇 DINOSSAURO AQUI */}
      <img src={marioHome} className="mari" alt="Mari" />

      <p>
        sou estudando de sistema de informação da UFPE,
        tenho 24 anos e sou apaixonado por tecnologia e inovação.
      </p>

      <h3>Interesses</h3>
      <p>Desenvolvimento web, programação e ciência de dados.</p>

      <h3>Contatos</h3>

      <p>
        Email: 
       <a href="mailto:jcfl2@ufpe.br">
        jcfl2@ufpe.br
      </a>
     </p>
     <p> LinkedIn: 
  <a 
    href="https://www.linkedin.com/in/johnny-cleiton-ferreira-lins-245247324" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    linkedin.com/in/johnny-cleiton
  </a>
   </p>

   <p>
  GitHub: 
  <a 
    href="https://github.com/JohnnyFRL" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    github.com/JohnnyFRL
  </a>
</p>

    </div>
  )
}

export default Home