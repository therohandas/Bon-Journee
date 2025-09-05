import { Badge } from "@/components/ui/badge";
import { Map, Compass, Sparkles, Landmark } from "lucide-react";

const featuresData = [
  {
    title: "Personalized Journeys",
    description:
      "Discover destinations that match your style, passions, and travel dreams.",
    icon: Compass,
  },
  {
    title: "Seamless Exploration",
    description:
      "Navigate with ease through smooth guidance and effortless transitions.",
    icon: Map,
  },
  {
    title: "Local Secrets",
    description:
      "Unlock authentic insights and hidden gems beyond the tourist trail.",
    icon: Landmark,
  },
  {
    title: "Inspire Your Wanderlust",
    description:
      "Fuel your adventures with limitless stories, visuals, and ideas.",
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section className="pb-20 pt-20 md:pb-32 md:pt-32 container mx-auto">
      <div className="text-center space-y-4 pb-16 mx-auto max-w-4xl">
        <Badge>FEATURES</Badge>
        <h2 className="mx-auto mt-4 text-3xl font-bold sm:text-5xl tracking-tight">
          Why Choose Bon Journee
        </h2>
        <p className="text-xl text-muted-foreground pt-1">
          Explore smarter, travel deeper, and wander without limits.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="relative flex items-center gap-3 rounded-lg border-dashed md:block md:border-l md:p-5
                       transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-primary/5 duration-300 ease-in-out"
          >
            <span className="md:mb-8 flex h-10 min-w-10 items-center justify-center rounded-full bg-primary/10 md:h-12 md:w-12">
              <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </span>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                {feature.title}
                <span className="absolute -left-px h-6 hidden w-px bg-primary md:inline-block"></span>
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
