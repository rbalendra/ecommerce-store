import styles from './AboutPage.module.scss';
import profileImg from '../../assets/images/profile.png';

const AboutPage = () => {
	return (
		<div className={styles.about}>
			<div className={styles.about_container}>
				<div className={styles.about_header}>
					<h1>Our Story</h1>
				</div>

				<div className={styles.about_content}>
					<section className={styles.about_section}>
						<h2>How KeydUp Began</h2>
						<p>
							KeydUp was born in 2025 from the frustration of a Nology software
							developer student (& founder) Rajeev who couldn't find mechanical
							keyboards that matched both his typing needs and aesthetic
							preferences without breaking the bank.
						</p>
						<p>
							It all started in Rajeev's bedroom, where he spent weekends
							disassembling keyboards, testing different switches, and
							experimenting with custom keycaps. What began as a hobby quickly
							turned into a passion project when their classmates began
							requesting custom builds.
						</p>
					</section>

					<section className={styles.about_section}>
						<h2>Our Mission</h2>
						<p>
							At KeydUp, we believe that the tools you use daily should feel as
							good as they look. Our mission is to create mechanical keyboards
							that enhance productivity through superior typing feel while
							adding a touch of personality to your workspace.
						</p>
						<p>
							We're committed to using high-quality components, supporting the
							mechanical keyboard community, and making the customization
							process accessible to everyone—from programming professionals to
							gaming enthusiasts to creative writers.
						</p>
					</section>

					<section className={styles.about_section}>
						<h2>Growing Beyond Our Garage</h2>
						<p>
							From those humble beginnings in Rajeev's bedroom, We've shipped
							thousands of keyboards to customers in over 30 countries, but we
							maintain the same attention to detail that went into our first
							custom builds.
						</p>
						<p>
							Today, our workshop in Melbourne continues the tradition of
							hands-on quality control, with each keyboard tested and approved
							before shipping. While we've expanded our operation, we remain
							true to our founding principle: everyone deserves to experience
							the satisfaction of typing on a keyboard that feels like it was
							made just for them.
						</p>
					</section>

					<section className={styles.about_section}>
						<div className={styles.about_founders}>
							<div className={styles.about_founder}>
								<div className={styles.about_avatar}>
									<img
										src={profileImg}
										alt='Rajeev Balendra'
										className={styles.about_image}
									/>
								</div>
								<h3>Rajeev Balendra</h3>
								<p>CEO & Founder</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
