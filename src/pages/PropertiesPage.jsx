import Pagination from "../ui/Pagination";
import PropertiesHeader from "../features/properties/PropertiesHeader";
import ProprtiesTable from "../features/properties/ProprtiesTable";
import { decPage, incPage } from "../features/properties/ProprtiesSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PropertiesPage() {
  const { page, totalPages } = useSelector((state) => state.properties);
  const dispatch = useDispatch();
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="overflow-x-auto rounded-box border border-base-content/5 ">
        <PropertiesHeader />
        <ProprtiesTable />
      </div>
      <Pagination
        onClickNext={() => dispatch(incPage())}
        onCLickPrev={() => dispatch(decPage())}
        disabledPrev={page == 1}
        disabledNext={page >= totalPages}
      />
    </div>
  );
}
