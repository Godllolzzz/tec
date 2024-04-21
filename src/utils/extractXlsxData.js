import * as XLSX from "xlsx";

export async function fetchDataAndExtract(file) {
  try {
    const response = await fetch(file); // Change the path to your XLSX file
    if (!response.ok) {
      throw new Error("Failed to fetch XLSX file");
    }

    const blob = await response.blob();
    const binaryData = await readBlobAsBinaryString(blob);
    return extractDataFromXLSX(binaryData);
  } catch (error) {
    console.error("Error fetching or extracting data from XLSX file:", error);
    return null;
  }
}

function readBlobAsBinaryString(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsBinaryString(blob);
  });
}

function extractDataFromXLSX(binaryData) {
  const workbook = XLSX.read(binaryData, { type: "binary" });
  const sheetName = workbook.SheetNames[0]; // Assuming you want to read the first sheet
  const sheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(sheet);

  return jsonData.map((row) => {
    const rowData = {};
    Object.keys(row).forEach((key) => {
      // Convert empty strings to null
      rowData[key.trim()] = row[key] === "" ? null : row[key];
    });
    return rowData;
  });
}
