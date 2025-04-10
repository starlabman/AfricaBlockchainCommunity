import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactFormSection = (): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xvgkdlpb", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset(); // vider le formulaire après soumission
      } else {
        alert("Une erreur s’est produite. Veuillez réessayer.");
      }
    } catch (error) {
      alert("Erreur réseau. Réessayez plus tard.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative w-full bg-[#060606] rounded-2xl overflow-hidden py-16 px-8">
      {/* Background elements */}
      <img
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1000px] opacity-10 pointer-events-none"
        alt="Ellipse"
        src="/ellipse-263.svg"
      />
      <img
        className="absolute right-0 bottom-0 opacity-10"
        alt="Vector"
        src="/vector-267.svg"
      />

      {/* Content container */}
      <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-8">
            <div className="text-[#4e5cbc] text-base mb-1">Get in touch</div>
            <h2 className="text-white text-[40px] md:text-[48px] leading-[1.2] font-semibold mb-4">
              Let’s chat
            </h2>
            <p className="text-[#bebebe] text-base leading-relaxed">
              We would love to answer your questions, discuss your ideas, or
              collaborate with you to advance the blockchain ecosystem in Africa.
              Whether you are interested in our programs, want to learn more about
              our initiatives, or are looking to partner, our team is here to help.
            </p>
          </div>

          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0">
              {isSubmitted ? (
                <div className="text-green-500 text-lg font-medium">
                  ✅ Merci ! Votre message a été envoyé avec succès.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Row 1 */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <Input
                      name="firstName"
                      required
                      placeholder="First name *"
                      className="bg-white h-[50px]"
                    />
                    <Input
                      name="lastName"
                      required
                      placeholder="Last name *"
                      className="bg-white h-[50px]"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <Input
                      name="email"
                      required
                      type="email"
                      placeholder="Email *"
                      className="bg-white h-[50px]"
                    />
                    <Input
                      name="company"
                      placeholder="Company or Organisation name"
                      className="bg-white h-[50px]"
                    />
                  </div>

                  {/* Row 3 */}
                  <Textarea
                    name="message"
                    required
                    className="bg-white h-[160px]"
                    placeholder="Message *"
                  />

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 bg-[#2d6ef7] text-neutral-100 rounded-[200px] px-10 py-2.5 text-sm"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right-side Image */}
        <div className="flex justify-center items-center">
          <img
            src="/group-54.png"
            alt="Contact illustration"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};
