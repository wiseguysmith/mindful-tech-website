// Sofia Concierge page — hides ChatGPT branding and runs under your domain
export default function Sofia() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "20px",
      }}
    >
      <iframe
        src="https://chat.openai.com/g/68ed35708bbc8191b6f594075fa0a3d6-sofia?model=gpt-4o"
        title="Sofia – Hacienda Pinilla Concierge"
        width="100%"
        height="800"
        style={{
          border: "none",
          borderRadius: "18px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
          maxWidth: "1100px",
        }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      ></iframe>
    </main>
  );
}
