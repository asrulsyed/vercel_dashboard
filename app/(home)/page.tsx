import Card from "@/components/Card";
import Filter from "@/components/Filter";
import stack from "@/stack/stack";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-100px)]">
      <div className="flex items-center justify-center py-6">
        <div className="max-w-[1350px] w-full flex flex-col gap-6 sm:px-6 px-4">
          <Filter />
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {
              stack.map((item, index) => {
                return (
                  <Card key={index} item={item} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
