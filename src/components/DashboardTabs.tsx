import { CategoryCards } from "./CategoryCards";
import { OverviewCards } from "./OverviewCards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export function DashboardTabs() {
  return (
    <div className="w-full">
      <Tabs defaultValue="ov" className="w-full">
        <TabsList>
          <TabsTrigger value="ov">Overview</TabsTrigger>
          <TabsTrigger value="byc">By Catagory</TabsTrigger>
        </TabsList>
        <TabsContent value="ov" className="w-full">
          <OverviewCards />
        </TabsContent>
        <TabsContent value="byc" className="w-full">
          <CategoryCards />
        </TabsContent>
      </Tabs>
    </div>
  );
}
