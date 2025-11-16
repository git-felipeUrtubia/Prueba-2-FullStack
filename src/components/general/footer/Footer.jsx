

import '../../../assets/styles/footer.css';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="footer-distributed">

			<div className="footer-right">

				<a href="#"><i className="fa fa-facebook"><Facebook /></i></a>
				<a href="#"><i className="fa fa-twitter"><Twitter /></i></a>
				<a href="#"><i className="fa fa-linkedin"><Github /></i></a>
				<a href="#"><i className="fa fa-github"><Instagram /></i></a>

			</div>

			<div className="footer-left">

				<p className="footer-links">
					<a className="link-1" href="#">Home</a>

					<a href="#">Blog</a>

					<a href="#">About</a>

					<a href="#">Contact</a>
				</p>

				<p>Company Level-Up Gamer &copy; 2025</p>
			</div>

		</footer>
    )
}