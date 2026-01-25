import { Suspense } from "react";
import ApiSearchBar from "../Components/Searchfeild";
import Allapi from "../Components/Allapi";
import HeadingText from "../Components/Heading/Heading";
import CardSkeleton from "../Components/CardSkeletion";

function page({ searchParams }) {
  return (
    <div className="max-w-7xl mx-auto w-full mt-10">
      <HeadingText headingfast={"All Free "} headinglast={"Apis"} />
      <ApiSearchBar />

      <Suspense fallback={<CardSkeleton />}>
        <Allapi searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

export default page;
