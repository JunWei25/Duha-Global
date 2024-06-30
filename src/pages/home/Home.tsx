import General from "../../components/Cards/General";
import MostOrderedItemsProgressBar from "../../components/Charts/MostOrderedItemsBarChart";
import MostOrderedItemsBarChart from "../../components/Charts/MostOrderedItemsBarChart";
import { Card, CardHeader, CardTitle, CardContent} from "../../components/ui/card";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <General />
        <Card>
          <CardHeader>
            <CardTitle>Most Ordered Items</CardTitle>
          </CardHeader>
          <CardContent className="h-56 p-0 pl-3 mr-3">
            <MostOrderedItemsProgressBar></MostOrderedItemsProgressBar>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
