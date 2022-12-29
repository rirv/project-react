import Cartwidget from "./Cartwidget"
const NavBar = () => {
  return (
    <div>
        <nav className="navegador">
            <a href="./index.html"> </a>
            <ul class="cabecera_links">
                <li>Inicio</li>
                <li>Nacionales</li>
                <li>Internacionales</li>
                <li>Galería</li>
                <li>Contacto</li>
                <Cartwidget />
            </ul>
        </nav>
    </div>
  )
}

export default NavBar