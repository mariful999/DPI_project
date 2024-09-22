import Banner from "@/components/homeSection/Banner";
import Container from "./ui/Container";
import Card from "@/components/homeSection/Card";
import WellCome from "@/components/homeSection/WellCome";
import WhyChoseUs from "@/components/homeSection/WhyChoseUs";
import OurCourses from "@/components/homeSection/OurCourses";
import Mission from "@/components/homeSection/Mission";
import Partner from "@/components/homeSection/Partner";
import Clients from "@/components/homeSection/Clients";

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
      <div>
        <Container>
        <Banner/>
        <WellCome></WellCome>
        <Mission></Mission>
        </Container>
        <WhyChoseUs ></WhyChoseUs>
        <OurCourses></OurCourses>
        <Card></Card>
        <Partner></Partner>
        <Clients></Clients>

      </div>
    </main>
  );
}
