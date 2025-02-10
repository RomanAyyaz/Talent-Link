import { LightBulbIcon, ClockIcon, ChartBarIcon } from "@heroicons/react/24/outline";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
    <Icon className="h-12 w-12  text-HeroButtonOne mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: LightBulbIcon,
      title: "Real Industry Experts",
      description: "Get interviewed by experienced professionals in your field.",
    },
    {
      icon: ClockIcon,
      title: "Flexible Scheduling",
      description: "Book interviews at times that suit your busy schedule.",
    },
    {
      icon: ChartBarIcon,
      title: "Detailed Feedback",
      description: "Receive comprehensive feedback to improve your interview skills.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading and Description (Centered) */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Why Choose Our Online Interviews?</h2>
          <p className="text-xl text-gray-600">
            Talent Link offers a unique opportunity to practice and excel in your interview skills with 
            industry-leading professionals.
          </p>
        </div>

        {/* Feature Cards (Below the text) */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
