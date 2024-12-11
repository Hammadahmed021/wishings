import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextImageSection from "../components/About/TextImageSection";
import GetInTouch from "../components/ServicePage/GetInTouch";
import { servicesData } from "../utils/localDb";

const ServicePage = () => {
  const { serviceName } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        // Uncomment the API fetch when you're ready to connect to a real API
        // const response = await fetch(`/api/services/${serviceName}`);
        // const data = await response.json();

        const service = servicesData.find(
          (service) =>
            service.title.toLowerCase().replace(/\s+/g, "-") ===
            serviceName.toLowerCase()
        );

        if (service) {
          setServiceData(service);
        } else {
          setServiceData(null);
        }
      } catch (error) {
        console.error("Error fetching service data:", error);
        setServiceData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [serviceName]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (!serviceData) return <div className="text-center">Service not found</div>;

  return (
    <div className="xl:container xl:mx-auto">
      <section className=" text-black  py-16 text-center">
        <h1 className="text-4xl font-bold">{serviceData.title}</h1>
        <p className="mt-4">{serviceData.subtitle}</p>
      </section>

      {/* <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold">{serviceData.textSection.title}</h2>
          <p className="mt-4 text-lg">{serviceData.textSection.text}</p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={serviceData.textSection.image}
            alt={serviceData.textSection.title}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </section> */}
      <TextImageSection
        heading={serviceData.textSection.title}
        paragraph={serviceData.textSection.text}
        bullets={[
          {
            heading: "Excellence",
            paragraph: "We deliver the best in everything we do.",
          },
          {
            heading: "Integrity",
            paragraph: "We uphold the highest standards of integrity.",
          },
        ]}
        image={serviceData.textSection.image}
        reverse={false}
      />

      <section className="py-12">
        <h2 className="text-large font-semibold text-center">
          {serviceData.videoSection.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 gap-y-14">
          {serviceData.videoSection.videos.map((video, index) => (
            <div key={index} className="rounded-lg">
              <video
                src={video.url}
                controls
                className="w-full h-[600px] rounded-lg mb-4"
              />
              <h3 className="text-large font-semibold">{video.title}</h3>
              <p className="text-medium text-gray-600 mt-2">{video.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <GetInTouch/>
      </section>
    </div>
  );
};

export default ServicePage;
