// pages/index.js
import { pricingPlans } from "../../../store/staticData";
import CustomTitle from "../../ui/CustomTitle";
import PricingCard from "../../ui/PricingCard";
import { GradientBackground } from "../../ui/gradiant-background";
import { Container } from "@mui/material";
export default function PricingCards() {
  return (
    <GradientBackground>
      <Container
        maxWidth="lg"
        sx={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <div className="flex items-center justify-center min-h-screen ">
          <main className="container mx-auto p-4">
            {/* <div className="text-center mb-12">
              <h1 className="text-4xl text-white font-bold">Our Plans</h1>
              <p className="text-white mt-4">
                Choose a plan that suits your needs
              </p>
            </div> */}
            <CustomTitle
              title="Our Pricing"
              mainKeyword="plans"
              description="Choose a plan that suits your needs."
              isCenter={true}
            />
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="w-full md:w-1/3 lg:w-1/4">
                  <PricingCard
                    plan={plan.plan}
                    features={plan.features}
                    price={plan.price}
                    buttonText={plan.buttonText}
                  />
                </div>
              ))}
            </div>
          </main>
        </div>
      </Container>
    </GradientBackground>
  );
}
