const express = require("express");
const puppeteer = require("puppeteer");

const app = express();

app.get("/api/link-preview", async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: "Falta el parámetro URL" });
  }
  
  try {
    // Inicia Puppeteer en modo headless
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Navega a la URL solicitada
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
    
    // Extrae metadatos utilizando evaluate para acceder al DOM
    const metadata = await page.evaluate(() => {
      const getMetaContent = (property) => {
        // Intenta buscar meta tags de Open Graph primero y luego tags convencionales
        const metaTag =
          document.querySelector(`meta[property="${property}"]`) ||
          document.querySelector(`meta[name="${property}"]`);
        return metaTag ? metaTag.content : null;
      };

      return {
        title: getMetaContent("og:title") || document.title,
        description:
          getMetaContent("og:description") ||
          getMetaContent("description") ||
          "",
        image: getMetaContent("og:image") || "",
      };
    });

    await browser.close();
    res.json(metadata);
  } catch (error) {
    console.error("Error obteniendo metadatos:", error);
    res.status(500).json({ error: "Error al obtener la vista previa", details: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
