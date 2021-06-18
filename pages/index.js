import Head from 'next/head'
import Header from '../components/header/Header';
import Application from '../components/Applications/Application';
import Banner from '../components/Banner/Banner';
import BannerTwo from '../components/BannerTwo/BannerTwo';
import Blogs from '../components/Blogs/Blogs';
import Care from '../components/Care/Care';
import Client from '../components/Client/Client';
import Consult from '../components/Consult/Consult';
import Dance from '../components/Dance/Dance';
import Event from '../components/Event/Event';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';
import Subscription from '../components/Subscription/Subscription';
import Testimonials from '../components/Testimonials/Testimonials';
import Trending from '../components/Trending/Trending';
import Upcoming from '../components/Upcoming/Upcoming';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AMBHOS</title>
        <meta name="description" content="Spirit to heal , spirit to care" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <Subscription />
      <Services />
      <Dance />
      <BannerTwo />
      <Event />
      <Care />
      <Client />
      <Consult />
      <Footer />
      <Testimonials />
      <Application />
      <Trending />
      <Blogs />
      <Upcoming />
      

    </div>
  )
}
