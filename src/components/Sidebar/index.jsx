import './style.scss';
import logo from '../../assets/logo.png';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={ sidebarOpen ? "sidebarResponsive" : "" } id="sidebar">
            <div className="sidebarTitle">
                <div className="sidebarImg">
                    <img src={ logo } alt="logo" />
                    <h1>WN Soluções</h1>
                </div>
                {/* <i onClick={ () => closeSidebar() } className="fa fa-times" id="sidebarIcon" aria-hidden="true"></i> */}
            </div>
            <div className="sidebarMenu">
                <div className="sidebarLink activeMenuLink">
                    
                    {/* <i className="fa fa-minus-square"></i> */}
                    <a href="#">Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className="sidebarLink">
                    
                    {/* <i className="fa fa-building"></i> */}
                    <a href="#">Lojas</a>
                </div>
                <div className="sidebarLink">
                    
                    {/* <i className="fa fa-archive"></i> */}
                    <a href="#">Produtos</a>
                </div>
                <div className="sidebarLink">
                    
                    {/* <i className="fa fa-bars"></i> */}
                    <a href="#">Categorias</a>
                </div>
                <div className="sidebarLink">
                    
                    {/* <i className="fa fa-cutlery"></i> */}
                    <a href="#">Pedidos</a>
                </div>
                <h2>PESSOAS</h2>
                <div className="sidebarLink">
                    
                    {/* <i className="fa fa-male"></i> */}
                    <a href="#">Administradores</a>
                </div>
                <div className="sidebarLink">
                    
                    {/* <i className="fa fa-user-circle"></i> */}
                    <a href="#">Usuários</a>
                </div>
                <div className="sidebarLink">
                    
                    {/* <i className="fa fa-money"></i> */}
                    <a href="#">Pagamentos e custos</a>
                </div>
                <div className="sidebarLink">
                    
                    {/* <i className="fa fa-tasks"></i> */}
                    <a href="#">A plataforma</a>
                </div>
                <div className="sidebarLink">
                    
                    {/* <i className="fa fa-file-text"></i> */}
                    <a href="#">Política de privacidade</a>
                </div>
                <div className="sidebarLogout">
                    
                    {/* <i className="fa fa-power-off"></i> */}
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;