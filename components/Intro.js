export default function Intro() {
  return (
    <section className="intro">
      <h2>Not just a Developer.</h2>

      <style jsx>{`
        .intro {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: black;
          color: white;
        }

        h2 {
          font-size: 2rem;
          color: #ccc;
        }
      `}</style>
    </section>
  );
}