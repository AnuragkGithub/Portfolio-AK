
import Head from "next/head";
import Hackathons from "../components/Hackathons";

export default function HackathonsPage() {
  return (
    <>
      <Head>
        <title>Hackathons | Anurag Karmakar</title>
        <meta
          name="description"
          content="Hackathon registrations, ongoing projects, and upcoming showcases."
        />
      </Head>

      <Hackathons />
    </>
  );
}
