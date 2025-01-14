import { Helmet } from 'react-helmet';
import { Button, Text } from 'common/components';
import { ReactComponent as Logo } from '../../assets/images/logo-inverse.svg';
import { ReactComponent as Waves } from '../../assets/images/wave.svg';
import { ReactComponent as Circles } from '../../assets/images/circles.svg';
import Footer from './Footer';
import './_home.scss';

export default function Home({ onConnect }) {
	return (
		<div className="home">
			<Helmet><meta name="theme-color" content="#00BA89" /></Helmet>
			<div className="home__intro">
				<Logo className="home__intro__logo" />
				<Text inverse heading className="mt-20">Create remixed versions of your favourite playlists.</Text>
				<Text subHeading inverse className="mb-60">Search. Remix. Groove to the beat.</Text>
				<div className="home__intro__connect">
					<Button icon="fa-spotify" brandIcon onClick={onConnect}>Connect To Spotify</Button>
					<a onClick={() => {
						document.querySelector('.home__getting-started').scrollIntoView({ behavior: 'smooth' });
					}}>Learn More</a>
				</div>
				<Circles className="home__intro__circles" />
			</div>
			<div className="home__learn-more">
				<div className="home__getting-started ml-auto mr-auto">
					<Text inverse heading className="home__getting-started__title ml-auto mr-auto" centered>How It Works</Text>
					<Text inverse className="home__getting-started__subtitle ml-auto mr-auto" centered><strong>Connect your Spotify account</strong> and get ready to dance to some remixes.</Text>
					<div className="home__getting-started__container ml-auto mr-auto">
						<div className="home__getting-started__block">
							<div className="home__getting-started__block__header">
								<div className="home__getting-started__block__number">1</div>
								<Text inverse subHeading bold>Choose a playlist</Text>
							</div>
							<Text inverse>
								Search for a playlist across your private, public and liked songs playlists.
							</Text>
						</div>
						<div className="home__getting-started__block">
							<div className="home__getting-started__block__header">
								<div className="home__getting-started__block__number">2</div>
								<Text inverse subHeading bold>Browse your remixes</Text>
							</div>
							<Text inverse>We’ll look for remixed versions of your songs, where you can preview them and choose what to keep.</Text>
						</div>
						<div className="home__getting-started__block">
							<div className="home__getting-started__block__header">
								<div className="home__getting-started__block__number">3</div>
								<Text inverse subHeading bold>Save to Spotify</Text>
							</div>
							<Text inverse>Choose a name for your new playlist and save it directly to your Spotify account.</Text>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<Waves className="home__learn-more__waves" />
		</div>
	);
}