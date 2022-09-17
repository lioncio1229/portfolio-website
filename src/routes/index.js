import Homepage from "./homepage";
import CalculatorApp from "./simple-calculator";
import ResistorColorCoding from "./resistor_color_coding";
import MyNotepad from "./my-notepad";
import PdfRenderer from "./pdf.renderer";

const ExternalLink = ({link}) => {
    window.location.href = link;
    return null;
}

export {Homepage, CalculatorApp, ResistorColorCoding, MyNotepad, PdfRenderer, ExternalLink};