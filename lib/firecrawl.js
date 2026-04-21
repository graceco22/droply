import Firecrawl from "@mendable/firecrawl-js";

const firecrawl = new Firecrawl({ apiKey: process.env.FIRECRAWL_API_KEY });

export async function scrapeProduct(url) {
  try {
    const extractionPrompt =
      "Extract the product name as 'productName', current price as a number as 'currentPrice', currency code (USD, CAD, EUR, etc) as 'currencyCode', and product image URL as 'productImageUrl' if available";

    const extractionSchema = {
      type: "object",
      properties: {
        productName: { type: "string" },
        currentPrice: { type: "number" },
        currencyCode: { type: "string" },
        productImageUrl: { type: "string" },
      },
      required: ["productName", "currentPrice"],
    };

    let result;

    if (firecrawl?.v1 && typeof firecrawl.v1.scrapeUrl === "function") {
      result = await firecrawl.v1.scrapeUrl(url, {
        formats: ["extract"],
        extract: {
          prompt: extractionPrompt,
          schema: extractionSchema,
        },
      });
    } else if (typeof firecrawl.scrape === "function") {
      result = await firecrawl.scrape(url, {
        formats: [
          {
            type: "json",
            prompt: extractionPrompt,
            schema: extractionSchema,
          },
        ],
      });
    } else {
      throw new Error("Firecrawl SDK missing supported scrape methods");
    }

    const extractedData = result?.extract || result?.json;

    if (!extractedData || !extractedData.productName) {
      throw new Error("No data extracted from URL");
    }

    return extractedData;
  } catch (error) {
    console.error("Firecrawl scrape error:", error);
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}
