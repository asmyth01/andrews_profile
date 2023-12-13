import './assets/css/johndoe.css';
import Nav from  './components/nav';
import About from './components/about';
import Resume from './components/resume';
import Numbers from './components/numbers';
import MyServices from './components/portfolio';
import Header from './components/header';
import HiringBanner from './components/hiring_banner';
import Footer from './components/footer';


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
      <HiringBanner></HiringBanner>
      <Footer></Footer>
    </div>
  );
}

export default App;
