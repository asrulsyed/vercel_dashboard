'use client'

import Card from "@/components/Card";
import Filter from "@/components/Filter";
import List from "@/components/List";
import stack from "@/stack/stack";
import { useState } from "react";

export default function Home() {
  const [align, setAlign] = useState<string>('list');

  return (
    <div className="min-h-[calc(100vh-100px)]">
      <div className="flex items-center justify-center py-6">
        <div className="max-w-[1350px] w-full flex flex-col gap-6 sm:px-6 px-4">
          <Filter setAlign={setAlign} align={align} />
          {
            align === 'card' ?
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 md:grid-cols-2">
                {
                  stack.map((item, index) => {
                    return (
                      <Card key={index} item={item} />
                    )
                  })
                }
              </div>
              : <div className="flex flex-col gap-8 mt-4">
              {
                stack.map((item, index) => {
                  return (
                    <List key={index} item={item} />
                  )
                })
              }
            </div>
          }

        </div>
      </div>
    </div>
  );
}
