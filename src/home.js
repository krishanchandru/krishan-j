
import { Link,  useNavigate } from "react-router-dom";
import './css/bootstrap.min.css';
import './home.css';
import { autho, logout } from "./auth";
export default function Home() {

    const navigate = useNavigate();
const logoutuser=()=>{
    logout();
    navigate("/")
}
   
      
        return (
            <div className="home">
                {/*nav--------------------------------------start*/}
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-flued navbarr">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to={"/"}>A.A.KALAINILAVAN</Link>
                           </div>
                       
                       
                            <ul className="navbar-nav nav">
                                <li><Link to={"/"}><i className="glyphicon glyphicon-home"></i> Home</Link></li>
                               
                            </ul>
                            <ul className="navbar-nav nav navbar-right">
                             
                              {autho()?(    <li><a class="nav-link" onClick={logoutuser} style={{cursor:"pointer"}} ><i className="glyphicon glyphicon-log-out"></i> Logout</a></li>):null}
                               {autho()?(<li><Link to={"/dashboard"}><i className="glyphicon glyphicon-dashboard"></i> Dashbord</Link></li>):null}
                                { !autho()? ( <li><Link to={"/register"}><i className="glyphicon glyphicon-log-in"></i> Register</Link></li>):null}

                            </ul>
                        
                    </div>

                </nav>
                {/*nav-------------------------------------------end*/}
                {/*header------------------------------------------start*/}
                <header className="header">
                    <div className="col-md-12 header1">
                        <div className="col-md-6 line"><h3>Hi! iam Kalainilavan</h3><p> "Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa</p><br />
                            <div className="veiw col-md-3"><button className="btn ">veiw code</button></div>
                           {!autho()?(<div className="veiw  col-md-3"><button className="btn "><Link to={"/login"} className="vvv"><i className="glyphicon glyphicon-user"></i> Sign_in</Link></button></div>):null}</div>


                    </div>
                </header>
                {/*header----------------------------------------end*/}
                {/*body-----------------------------------------------start*/}
                <section className="body">
                    <div className="well container-flued col-md-12 body">
                        <div className="col-md-8 line2 text-justify"><p>Computer science is the study of computation, automation, and information.[1] Computer science spans theoretical disciplines (such as algorithms, theory of computation, information theory, and automation) to practical disciplines (including the design and implementation of hardware and software).[2][3][4] Computer science is generally considered an area of academic research and distinct from computer programming.[5]

                            Algorithms and data structures are central to computer science.[6] The theory of computation concerns abstract models of computation and general classes of problems that can be solved using them.<br />The fields of cryptography and computer security involve studying the means for secure communication and for preventing security vulnerabilities. Computer graphics and computational geometry address the generation of images.</p></div>
                        <div className="col-md-4">
                            <img className="img-responsive image2 img-circle img-thumnail" src="https://www.shutterstock.com/image-illustration/line-web-concept-computer-science-260nw-501705679.jpg" height="auto" width="auto"></img>
                        </div>
                    </div>
                    

                </section>
                {/*body-------------------------------------------------end*/}
                {/*footer -----------------------------------------------start */}
                <footer >
                    <div className="fline">

                        <div className="col-md-12 fline text-center"><Link className="aa" to={"/"}><h4>A.A.KALAINILAVAN</h4></Link><br /><p>EUSL/TC/IS/2020/COM/32</p></div>
                    </div>
                </footer>

            </div>



        );

    }






