const downloadAsPDF = async () => {
  const content = document.getElementById("content");
  const { default: html2pdf } = await import("html2pdf.js");

  const options = {
    margin: 0,
    filename: "chat.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().from(content!).set(options).save();
};

export default downloadAsPDF;
