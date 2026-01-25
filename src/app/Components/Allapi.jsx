import ApiCard from "./CardComponent";
import { seacrhApis } from "@/action/searchApi.action";
import Pagination from "@/app/Components/Buton/Pagination";

export default async function Allapi({ searchParams }) {
  const params = await searchParams;

  const category = params?.category || "All categories";
  const search = params?.search || "";
  const page = Number(params?.page) || 1;

  const res = await seacrhApis({ category, search, page });
  const apiData = res.data;
  const totalPage = res.totalPage;

  return (
    <>
      <div className="max-w-7xl justify-items-center mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {apiData && apiData.length > 0 ? (
          apiData.map((api) => <ApiCard key={api._id} api={api} />)
        ) : (
          <p className="text-slate-400 col-span-full py-20">
            {`No APIs found for "${search}" in ${category}`}
          </p>
        )}
      </div>

      {apiData.length > 0 && (
        <Pagination totalPages={totalPage} currentPage={page} />
      )}
    </>
  );
}
