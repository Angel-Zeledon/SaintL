import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">

             
<ul class="navbar-nav">
  <li class="nav-item">
     <Link class="nav-link" to="/Info" >Acerca De</Link>
  </li>
  

  <li class="nav-item dropdown">
    <h6 class="nav-link dropdown-toggle  mb-1"  id="navbarDropdown" data-toggle="dropdown" role="button">
     Grados
    </h6>
    <div class="dropdown-menu">
      <Link class="dropdown-item" to="/Septimo">Séptimo</Link>
      <Link class="dropdown-item" to="/Octavo">Octavo</Link>
      <Link class="dropdown-item" to="/Noveno">Noveno</Link>
      <Link class="dropdown-item" to="/Decimo">Décimo</Link>
      <Link class="dropdown-item" to="/Undecimo">Undécimo</Link>
    </div>
  </li>
</ul>


</nav>
            
        </div>
    )
}

export default Nav
