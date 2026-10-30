import { useEffect, useState, lazy, Suspense } from "react";
import { fetchServices } from "../services/api";

const ServiceCard = lazy(() => import("../components/ServiceCard"));

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true);
        console.log("Fetching services from API...");
        const data = await fetchServices();
        console.log("Services received:", data);
        setServices(data || []);
      } catch (error) {
        console.error("Error loading services:", error);
        console.error("Error details:", error.message);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, []);

  return (
    <div className="services-page">
      <section id="services">
        <div className="section-title">
          <h2>Our Core Services</h2>
          <p>Comprehensive software development solutions tailored to your business needs</p>
        </div>

        {loading ? (
          <div className="loading">
            <span>Loading services...</span>
          </div>
        ) : (
          <div className="cards-grid">
            <Suspense fallback={<div className="loading">Loading...</div>}>
              {services.length > 0 ? (
                services.map((service) => (
                  <ServiceCard key={service._id} service={service} />
                ))
              ) : (
                <div className="empty-state">
                  <p>No services available at the moment. Please add services through the admin panel.</p>
            </div>
              )}
            </Suspense>
        </div>
      )}
      </section>
    </div>
  );
}

export default Services;
