import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import SetCounter from "@/components/shared/SetCounter";
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.action";
import Search from "@/components/shared/Search";
import { SearchParamProps } from "@/types";
import CategoryFilter from "@/components/shared/CategoryFilter";

export default async function Home({ searchParams }: SearchParamProps) {

  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?. category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  })

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 wrapper">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Over {" "} +<SetCounter targetValue={12200} />{" "}
              students!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Join over +7,168 students in our MUBAS community. Let's create, innovate, and grow together as one
              unified community.
            </p>
            <Button size="lg" className=" button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/mubasmw.jpeg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br /> <span className="text-primary-500">MUBAS SRC Union</span>
        </h2>

        <div className=" w-full flex flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
