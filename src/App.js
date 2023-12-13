import './assets/css/johndoe.css';
import Nav from  './components/nav';
import About from './components/about';
import Resume from './components/resume';
import Numbers from './components/numbers';
import MyServices from './components/portfolio';
import Header from './components/header';

function App() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="A personal profile page for Andrew Smyth." />
      <meta name="author" content="Andrew Smyth" />
      <title>Andrew Smyth</title>
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
          <h2 className="text-light mb-5 font-weight-normal">Open to Hiring Opportunities</h2>
          <h5 className="text-light mb-5 font-weight-normal">Recruiters reach out on <a href="https://www.linkedin.com/in/andrew-j-smyth">LinkedIn</a></h5>
        </div>
      </section>
      <footer className="footer py-3">
        <div className="container">
          <p className="small mb-0 text-light">Created With React</p>
          <p>Copyright Andrew Smyth 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
