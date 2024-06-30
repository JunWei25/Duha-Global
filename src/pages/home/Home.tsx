import React from "react";
import General from "../../components/Cards/General";
import MostOrderedItemsProgressBar from "../../components/Charts/MostOrderedItemsBarChart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";


export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="col-span-2 grid grid-cols-3 gap-2">
          <Card>
            <CardHeader className="">
              <CardTitle>Total Sales</CardTitle>
            </CardHeader>
            <CardContent className="h-40 px-6"></CardContent>
          </Card>
          <Card>
            <CardHeader className="">
              <CardTitle>Total Revenue</CardTitle>
            </CardHeader>
            <CardContent className="h-40 px-6"></CardContent>
          </Card>
          <Card>
            <CardHeader className="">
              <CardTitle>Total Expenses</CardTitle>
            </CardHeader>
            <CardContent className="h-40 px-6"></CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader className="">
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent className="h-44 px-6">
            
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <General />
        <Card>
          <CardHeader className="">
            <CardTitle>Most Ordered Items</CardTitle>
          </CardHeader>
          <CardContent className="h-56 px-6">
            <MostOrderedItemsProgressBar></MostOrderedItemsProgressBar>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
