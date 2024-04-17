const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <h1 className="btn btn-ghost text-3xl font-extrabold pl-0">ZenState</h1>
                <p>Real EState Industries Ltd.<br />Providing reliable state since 2024</p>
            </aside>
            <nav>
                <h6 className="footer-title">Pages</h6>
                <a href="/" className="link link-hover">Home</a>
                <a href="/register" className="link link-hover">Register</a>
                <a href="/login" className="link link-hover">Login</a>
            </nav>
            <nav>
                <h6 className="footer-title">Rent</h6>
                <a href="/#estate" className="link link-hover">Apartment</a>
                <a href="/#estate" className="link link-hover">Garage</a>
                <a href="/#estate" className="link link-hover">Home</a>
                <a href="/#estate" className="link link-hover">Single Family Home</a>
            </nav>
            <nav>
                <h6 className="footer-title">Buy</h6>
                <a href="/#estate" className="link link-hover">Apartment</a>
                <a href="/#estate" className="link link-hover">Single Family Home</a>
                <a href="/#estate" className="link link-hover">Multi Family Home</a>
                
            </nav>
            
        </footer>
    );
};

export default Footer;