import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import OrderBarChart from "../Charts/OrderBarChart";


const General = () => {
  return (
    <div className="h-full">
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Orders</CardTitle>
        <CardDescription>Here are the number of orders</CardDescription>
      </CardHeader>
      <CardContent className="h-56 p-0 mr-3 mb-5">
        <OrderBarChart></OrderBarChart>
      </CardContent>
    </Card>
    </div>
  );
};

export default General;
