import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


import Grados from "./Components/Grados";
import Info from "./Components/Info";
import Login from "./Components/Login";
import Materias from "./Components/Materias";
import Subir from "./Components/Subir";

function App() {
  return (
    <Router>
     
      <div>
        <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>

          <Route path="/Septimo" exact>
            <Grados 
            primera="Matemática"
            segunda="Física"
            tercera="Biología"
            cuarta="Química"
            quinta="Español"
            sexta="Cívica"
            setima="Es. Sociales"
            octava="Portugués"
            novena="Inglés"
            decima="Cómputo"
            unde="Educ. Física"
            grado="7"
            />
          </Route>

          <Route path="/Octavo" exact>
            <Grados
            primera="Matemática"
            segunda="Física"
            tercera="Biología"
            cuarta="Química"
            quinta="Español"
            sexta="Cívica"
            setima="Es. Sociales"
            octava="Francés"
            novena="Inglés"
            decima="Cómputo"
            unde="Educ. Física"
            grado="8"
            />
          </Route>

          <Route path="/Noveno" exact>
            <Grados 
            primera="Matemática"
            segunda="Física"
            tercera="Biología"
            cuarta="Química"
            quinta="Español"
            sexta="Cívica"
            setima="Es. Sociales"
            octava="Portugués"
            novena="Inglés"
            decima="Cómputo"
            unde="Educ. Física"
            grado="9"
            />
          </Route>

          <Route path="/Decimo" exact>
            <Grados
            primera="Matemática"
            segunda="Física"
            tercera="Biología"
            cuarta="Química"
            quinta="Español"
            sexta="Cívica"
            setima="Es. Sociales"
            octava="Psicología"
            novena="Inglés"
            decima="Cómputo"
            unde="Educ. Física"
            grado="10"
            />
          </Route>

          <Route path="/Undecimo" exact>
            <Grados
            primera="Matemática"
            segunda="Física"
            tercera="Biología"
            cuarta="Química"
            quinta="Español"
            sexta="Cívica"
            setima="Es. Sociales"
            octava="Filosofía"
            novena="Inglés"
            decima="Cómputo"
            unde="Educ. Física"
            grado="11"
            />
          </Route>

          <Route path="/Info" exact>
            <Info/>
          </Route>

          <Route path="/Subir" exact>
            <Subir/>
          </Route>

          <Route path="/7/:materia" exact>
            <Materias
            grado="7"/>
          </Route>

          <Route path="/8/:materia" exact>
            <Materias
            grado="8"/>
          </Route>

          <Route path="/9/:materia" exact>
            <Materias
            grado="9"/>
          </Route>

          <Route path="/10/: materia" exact>
            <Materias
            grado="10"/>
          </Route>

          <Route path="/11/:materia" exact>
            <Materias
            grado="11"/>
          </Route>

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
