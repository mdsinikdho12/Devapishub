"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    router.push(createPageUrl(page), { scroll: false });
  };

  return (
    <nav
      role="navigation"
      aria-label="Pagination Navigation"
      className="flex items-center justify-center gap-2 mb-6 mt-12 select-none">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Go to previous page"
        className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-md border text-sm font-medium 
                   transition-all duration-200
                   bg-white dark:bg-[#152536] border-gray-200 dark:border-gray-700
                   hover:bg-gray-50 dark:hover:bg-[#1d3247]
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white
                   focus-visible:ring-2 focus-visible:ring-blue-500 outline-none">
        <ChevronLeft className="w-4 h-4" />
        <span>Previous</span>
      </button>

      <div className="flex items-center gap-1 mx-2 text-sm font-medium">
        <span className="text-gray-900 dark:text-gray-100">
          Page {currentPage}
        </span>
        <span className="text-gray-500">of</span>
        <span className="text-gray-900 dark:text-gray-100">
          {totalPages || "?"}
        </span>
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Go to next page"
        className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-md border text-sm font-medium 
                   transition-all duration-200
                   bg-white dark:bg-[#152536] border-gray-200 dark:border-gray-700
                   hover:bg-gray-50 dark:hover:bg-[#1d3247]
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white
                   focus-visible:ring-2 focus-visible:ring-blue-500 outline-none">
        <span>Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
