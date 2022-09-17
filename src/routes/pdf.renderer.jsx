
const PdfRenderer = ({url, style={}}) => {
    return (
      <div style={{ width: "100%", height: '100vh', overflow: "hidden", ...style}}>
        <object
          data={url}
          type="application/pdf"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
}
 
export default PdfRenderer;