import './Product.css';
import logo from '../assets/image/logo.png';
import foto from '../assets/image/foto.png';
import icon_sinal from '../assets/image/icon_sinal.png';
import icon_relatorio from '../assets/image/icon_relatorio.png';
import icon_seta from '../assets/image/icon_seta_cima.png';

function Products() {

    return (
        <div className="AreaProducts">
            <div className="leftProduct">
                <img className="logoUsu" src={logo} />
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="botoes">
                         <button className="botao_ativo"><img className="icon_ativo" src={icon_sinal}/>Início</button>
                    </div>
                    <div className="botoes">
                         <button className="botao texto"><img className="icon_desativado" src={icon_relatorio}/>Contatos</button>
                    </div>
                    <div className="botoes">
                         <button className="botao texto"><img className="icon_desativado" src={icon_seta}/>Relatórios</button>
                    </div>
                    <div className="botoes">
                         <button className="botao texto"><img className="icon_desativado" src={icon_relatorio}/>Contatos</button>
                    </div>
                    <div className="botoes">
                         <button className="botao texto"><img className="icon_desativado" src={icon_relatorio}/>Contatos</button>
                    </div>
                    <div className="botoes">
                         <button className="botao texto"><img className="icon_desativado" src={icon_relatorio}/>Contatos</button>
                    </div>
                </div>
            </div>
            <div className="rightProduct">
                <div className="top">
                    <div className="title"><labe>Olá</labe><label className="usuario"><strong>Usuário</strong></label></div>
                    <hr />
                </div>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={foto} />

                            <div class="card-body">
                                <p class="card-text"><strong>This is a wider card with supporting text below as a natural lead-in to additional content.</strong></p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <label>This is a wider card with supporting text below as a natural lead-in to</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={foto} />

                            <div class="card-body">
                                <p class="card-text"><strong>This is a wider card with supporting text below as a natural lead-in to additional content.</strong></p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <label>This is a wider card with supporting text below as a natural lead-in to</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={foto} />

                            <div class="card-body">
                                <p class="card-text"><strong>This is a wider card with supporting text below as a natural lead-in to additional content.</strong></p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <label>This is a wider card with supporting text below as a natural lead-in to</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={foto} />

                            <div class="card-body">
                                <p class="card-text"><strong>This is a wider card with supporting text below as a natural lead-in to additional content.</strong></p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <label>This is a wider card with supporting text below as a natural lead-in to</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={foto} />

                            <div class="card-body">
                                <p class="card-text"><strong>This is a wider card with supporting text below as a natural lead-in to additional content.</strong></p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <label>This is a wider card with supporting text below as a natural lead-in to</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={foto} />

                            <div class="card-body">
                                <p class="card-text"><strong>This is a wider card with supporting text below as a natural lead-in to additional content.</strong></p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <label>This is a wider card with supporting text below as a natural lead-in to</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Products;
