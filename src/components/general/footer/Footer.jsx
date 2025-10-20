

import '../../../assets/styles/footer.css';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';

export const Footer = () => {
    return (
        <footer class="footer-distributed">

			<div class="footer-right">

				<a href="#"><i class="fa fa-facebook"><Facebook /></i></a>
				<a href="#"><i class="fa fa-twitter"><Twitter /></i></a>
				<a href="#"><i class="fa fa-linkedin"><Github /></i></a>
				<a href="#"><i class="fa fa-github"><Instagram /></i></a>

			</div>

			<div class="footer-left">

				<p class="footer-links">
					<a class="link-1" href="#">Home</a>

					<a href="#">Blog</a>

					<a href="#">About</a>

					<a href="#">Contact</a>
				</p>

				<p>Company Level-Up Gamer &copy; 2025</p>
			</div>

		</footer>
    )
}