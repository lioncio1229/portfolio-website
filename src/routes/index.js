import Homepage from "./homepage";
import CalculatorApp from "./calculator";
import ResistorColorCoding from "./resistor_color_coding";

const ExternalLink = ({link}) => {
    window.location.href = link;
    return null;
}

export {Homepage, CalculatorApp, ResistorColorCoding, ExternalLink};