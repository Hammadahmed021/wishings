import { useLocation, useNavigate } from "react-router-dom"
import SummaryView from "../components/SummaryView"

const SummaryPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const {state}= location
  return (
    <SummaryView
      categoryId={state?.categoryId}
      calculatePrice={state?.calculatePrice}
      images={state?.images ?? []}
      navigate={navigate}
      pdfFile={state?.pdfFile}
      scriptText={state?.scriptText}
      selectedFile={state?.selectedFile}
      selectedTime={state?.selectedTime}
      state={state?.state}
      videos={state?.videos ?? []}
      instructions={state?.instructions}
      proportion={state?.proportion}
      titles={state?.titles ?? []}
      tags={state?.tags ?? []}
    />
  );
}

export default SummaryPage