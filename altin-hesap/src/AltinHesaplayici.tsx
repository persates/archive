import { useState } from "react";

export default function AltinHesaplayici() {
  const [gram, setGram] = useState("");

  const altinlar = [
    { isim: "Gram Altın", carpim: 1, icon: "⚖️" },
    { isim: "Çeyrek Altın", carpim: 1.754, icon: "🪙" },
    { isim: "Yarım Altın", carpim: 3.508, icon: "💰" },
    { isim: "Ata Altın", carpim: 7.216, icon: "👑" },
    { isim: "Cumhuriyet Altın", carpim: 6.72, icon: "🏛️" },
  ];

  const [adetler, setAdetler] = useState<{ [key: string]: string }>({
    "Gram Altın": "",
    "Çeyrek Altın": "",
    "Yarım Altın": "",
    "Ata Altın": "",
    "Cumhuriyet Altın": "",
  });

  const gramFiyat = Number(gram) || 0;

  const toplam = altinlar.reduce((acc, altin) => {
    const adet = Number(adetler[altin.isim]) || 0;
    return acc + gramFiyat * altin.carpim * adet;
  }, 0);

  const handleAdetChange = (isim: string, value: string) => {
    setAdetler({ ...adetler, [isim]: value });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: 24,
          padding: "40px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1
            style={{
              fontSize: 36,
              background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              fontWeight: 700,
            }}
          >
            💎 Altın Hesaplayıcı
          </h1>
          <p style={{ color: "#666", marginTop: 10, fontSize: 14 }}>
            Altınlarınızın güncel değerini hesaplayın
          </p>
        </div>

        <div style={{ marginBottom: 30 }}>
          <label
            style={{
              display: "block",
              marginBottom: 8,
              color: "#333",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Gram Altın Fiyatı
          </label>
          <input
            type="number"
            placeholder="Örn: 3500"
            value={gram}
            onChange={(e) => setGram(e.target.value)}
            style={{
              width: "100%",
              padding: "16px 20px",
              fontSize: 18,
              border: "2px solid #e0e0e0",
              borderRadius: 12,
              outline: "none",
              transition: "all 0.3s ease",
              boxSizing: "border-box",
              fontWeight: 600,
              backgroundColor: "white",
              color: "#000",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#10b981";
              e.target.style.backgroundColor = "#ecfdf5";
              e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e0e0e0";
              e.target.style.backgroundColor = "white";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>

        <div style={{ marginBottom: 30 }}>
          {altinlar.map((altin, index) => {
            const adet = Number(adetler[altin.isim]) || 0;
            const fiyat = gramFiyat * altin.carpim;
            const toplamFiyat = fiyat * adet;

            return (
              <div
                key={altin.isim}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 16,
                  padding: "20px",
                  background: `linear-gradient(135deg, ${
                    index % 2 === 0
                      ? "rgba(255, 245, 235, 0.6)"
                      : "rgba(255, 250, 240, 0.6)"
                  }, ${
                    index % 2 === 0
                      ? "rgba(255, 237, 213, 0.6)"
                      : "rgba(255, 245, 230, 0.6)"
                  })`,
                  borderRadius: 16,
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(212, 175, 55, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    marginRight: 15,
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                  }}
                >
                  {altin.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "#333" }}>
                    {altin.isim}
                  </div>
                  <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>
                    {fiyat.toLocaleString("tr-TR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    ₺ / adet
                  </div>
                </div>
                <div style={{ marginRight: 15 }}>
                  <input
                    type="number"
                    placeholder="0"
                    value={adetler[altin.isim]}
                    onChange={(e) => handleAdetChange(altin.isim, e.target.value)}
                    style={{
                      width: 70,
                      padding: "10px",
                      textAlign: "center",
                      fontSize: 16,
                      fontWeight: 600,
                      border: "2px solid #e0e0e0",
                      borderRadius: 10,
                      outline: "none",
                      transition: "all 0.3s ease",
                      backgroundColor: "white",
                      color: "#000",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#10b981";
                      e.target.style.backgroundColor = "#ecfdf5";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e0e0e0";
                      e.target.style.backgroundColor = "white";
                    }}
                  />
                </div>
                <div style={{ minWidth: 120, textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: toplamFiyat > 0 ? "#d4af37" : "#999",
                    }}
                  >
                    {toplamFiyat.toLocaleString("tr-TR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    ₺
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
            borderRadius: 16,
            padding: "24px 30px",
            marginTop: 30,
            boxShadow: "0 8px 24px rgba(253, 160, 133, 0.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 20, fontWeight: 600, color: "#fff" }}>
              Toplam Değer
            </span>
            <span
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#fff",
                textShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              {toplam.toLocaleString("tr-TR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              ₺
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
