import logo from './logo.svg';
import './assets/css/johndoe.css';
import Nav from  './components/nav';
import About from './components/about';
import Resume from './components/resume';
import Numbers from './components/numbers';
import MyServices from './components/my_services';
import Header from './components/header';

function App() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Start your development with JohnDoe landing page." />
      <meta name="author" content="Devcrud" />
      <title>JohnDoe Landing page | Free Bootstrap 4.3.x landing page</title>
      {/* font icons */}
      <link rel="stylesheet" href="assets/vendors/themify-icons/css/themify-icons.css" />
      {/* Bootstrap + JohnDoe main styles */}
      <link rel="stylesheet" href="./public/assets/css/johndoe.css" />
      <a href="components.html" className="btn btn-primary btn-component" data-spy="affix" data-offset-top={600}><i className="ti-shift-left-alt" /> Components</a>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Resume></Resume>
      <Numbers></Numbers>
      <MyServices></MyServices>
      <section className="section bg-dark py-5">
        <div className="container text-center">
          <h2 className="text-light mb-5 font-weight-normal">I Am Available For FreeLance</h2>
          <button className="btn bg-primary w-lg">Hire me</button>
        </div>
      </section>
      
      
      <footer className="footer py-3">
        <div className="container">
          <p className="small mb-0 text-light">
            ©  Created With <i className="ti-heart text-danger" /> By <a href="http://devcrud.com" target="_blank"><span className="text-danger" title="Bootstrap 4 Themes and Dashboards">DevCRUD</span></a> 
          </p>
        </div>
      </footer>
      {/* core  */}
      {/* bootstrap 3 affix */}
      {/* Isotope  */}
      {/* Google mpas */}
      {/* JohnDoe js */}
    </div>
  );
}

export default App;
