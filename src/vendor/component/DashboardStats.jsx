import StatCard from "./StatCard";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard
        title="Running Order"
        value="20"
        trend="-12.5%"
        trendUp={false}
        subtitle="Down 12.5% this month"
        description="Your current open order"
      />
      <StatCard
        title="Completed Order"
        value="1,234"
        trend="+20%"
        trendUp={true}
        subtitle="Up 20% this period"
        description="Acquisition needs attention"
      />
      <StatCard
        title="Active Drivers"
        value="45"
        trend="+8%"
        trendUp={true}
        subtitle="Strong driver retention"
        description="Engagement exceeded targets"
      />
      <StatCard
        title="Reviews"
        value="4.9"
        trend="+4.5%"
        trendUp={true}
        subtitle="Steady performance increase"
        description="Meets growth projections"
      />
    </div>
  );
}
