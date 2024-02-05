import "./style.css";

import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="#!">
								<img src={vk} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://www.instagram.com/_zoxidjonov_/" target=" blank">
								<img src={instagram} alt="Link"/>
							</a>
						</li>
						<li className="social__item">
							<a href="https://twitter.com/Salikho7?t=RsQ1rjL2WQBfhmZVjBqB8A&s=09">
								<img src={twitter} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://github.com/Salikh07">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="www.linkedin.com/in/abduraxmon-zoxidjonov-391081290">
								<img src={linkedIn} alt="Link" />
							</a>
						</li>
					</ul>
				<div>
					<p>To order web-page, write to instagram</p>
				</div>
				</div>
				</div>
				</footer>
	);
}

export default Footer;