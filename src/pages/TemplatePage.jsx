import { useParams } from "react-router-dom";

const TemplatePage = () => {
  const { id } = useParams();

  // Fetch or display data using the template id
  return (
    <div className="template-page">
      <h1 className="text-5xl">Template ID: {id}</h1>
      {/* Display template content */}
    </div>
  );
};

export default TemplatePage;
