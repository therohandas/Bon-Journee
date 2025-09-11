import MapView from "../components/MapView";

export default function Location() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Location</h1>
      <p>Find us on the map below:</p>
      
      {/* Google Maps Embed */}
      <div style={{ width: "100%", height: "500px", marginTop: "20px" }}>
        <iframe
          title="Google Maps Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117462.25684456554!2d85.7633!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d6a9d3e4e7%3A0xabcdef123456789!2sBhubaneswar!5e0!3m2!1sen!2sin!4v1694343098765"
        ></iframe>
      </div>
    </div>
  );
}
