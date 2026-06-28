"use client";

export default function Logs() {
  return (
    <div
      style={{
        padding: "2rem",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
        style={{
          marginTop: "2rem",
        }}
      >
        <div className="lg:col-span-4">
          <div
            className="w-[75px] h-[5px] mt-2 rounded-full"
            // style={{backgroundColor: "#dbc1ac"}}
            // style={`background-color: ${siteConfig.accentColor}`}
          />
        </div>

        <div className="lg:col-span-8">
          <div
            className="space-y-8"
            style={{ marginRight: "2rem", width: "80%" }}
          >
            <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              June 16th 2026
            </h1>
            <p>Now completely self-hosted!</p>

            <h1 style={{ fontSize: "1.25rem", fontWeight: "bold", marginTop: "1rem" }}>
              June 19th 2026
            </h1>
            <p>Shared files directory live, served through the server. Using as my own cloud storage! As of logging, currently at 500 GB of space.</p>
            <p>Subdomain routed to the directory</p>
          </div>
        </div>
      </div>
    </div>
  );
}
