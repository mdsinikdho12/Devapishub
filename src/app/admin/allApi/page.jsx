import { getallApi } from "@/action/api.action";
import AllapiTablie from "@/app/Components/adminComponents/AllapiTablie";
import Link from "next/link";

async function page({ searchParams }) {
  const params = await searchParams;
  const currentPage = parseInt(params?.page) || 1;

  const limit = 10;

  const res = await getallApi(currentPage, limit);
  const Apis = res.data || [];

  const { totalPages, hasNextPage, hasPrevPage } = res.pagination || {};

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">All Apis</h2>
        <span>
          page {currentPage} of {totalPages}
        </span>
      </div>

      <AllapiTablie Allapis={Apis} />
      <div className="flex justify-center gap-4 mt-8">
        <Link
          className={`px-4 py-2 rounded bg-white/10 text-white ${
            !hasPrevPage
              ? "pointer-events-none opacity-30"
              : "hover:bg-white/20"
          }`}
          href={`?page=${currentPage - 1}`}>
          Previous
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-white px-4 py-2 bg-[#7B61FF] rounded">
            {currentPage}
          </span>
        </div>
        <Link
          className={`px-4 py-2 rounded bg-white/10 text-white ${
            !hasNextPage
              ? "pointer-events-none opacity-30"
              : "hover:bg-white/20"
          }`}
          href={`?page=${currentPage + 1}`}>
          Next
        </Link>
      </div>
    </div>
  );
}

export default page;
