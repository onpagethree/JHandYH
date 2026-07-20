import { ContactSection } from "@/components/contact-section";
import { EventSection } from "@/components/event-section";
import { GallerySection } from "@/components/gallery-section";
import { IntroSection } from "@/components/intro-section";

export default function Page() {
  return (
    <main>
      <IntroSection />
      <EventSection />
      <ContactSection />
      <GallerySection />
    </main>
  );
}
