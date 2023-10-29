export default async function onCopyButtonClick(textToCopy) {
  try {
    await navigator.clipboard.writeText(textToCopy);
    alert("Text copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy text: ", err);
    alert("Failed to copy text. Please try again.");
  }
}
