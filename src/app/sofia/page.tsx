// Sofia Concierge page — hides ChatGPT branding and runs under your domain
export default function Sofia() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#0B0F1A", // Using your brand's dark background
        padding: "20px",
      }}
    >
      <iframe
        src="https://chat.openai.com/g/68ed35708bbc8191b6f594075fa0a3d6-sofia?model=gpt-5"
        title="Sofia Concierge"
        width="100%"
        height="800"
        style={{
          border: "none",
          borderRadius: "18px",
          boxShadow: "0 8px 40px rgba(99, 245, 255, 0.15)", // Using your primary color for the shadow
          maxWidth: "1100px",
        }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      ></iframe>
    </main>
  );
}
