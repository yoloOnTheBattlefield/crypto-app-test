export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        style={{
          width: "100%",
          height: 0,
          paddingBottom: "81%",
          position: "relative",
        }}
      >
        <iframe
          src="https://giphy.com/embed/l3vRlT2k2L35Cnn5C"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/dance-donald-l3vRlT2k2L35Cnn5C">
          via GIPHY
        </a>
      </p>
    </main>
  );
}
