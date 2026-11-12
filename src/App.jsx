import Header from "./components/Header.jsx";
import RedacaoCard from "./components/RedacaoCard.jsx";
import { REDACOES } from "./dados.js";
import "./estilo.css";

export default function App() {
  return (
    <div className="pagina">
      <Header />

      {REDACOES.map((r) => (
        <RedacaoCard key={r.id} redacao={r} />
      ))}

    </div>
  );
}
